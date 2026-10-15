import type { KeyboardEvent, MouseEvent } from 'react'

import { EMPTY_TILE_HOME_SLOT, GRID_SIZE } from './constants'

const randomNumber = (max: number): number => Math.floor(Math.random() * max)

const possibleMoves = (slot: number): number[] => {
  const col = slot % GRID_SIZE
  return [
    col > 0 ? slot - 1 : -1,
    col < GRID_SIZE - 1 ? slot + 1 : -1,
    slot - GRID_SIZE,
    slot + GRID_SIZE
  ].filter((s) => s >= 0 && s < GRID_SIZE ** 2)
}

// A tile's home slot is where it belongs in the solved picture and never
// changes; its current slot is where it is now. Both count left to right,
// top to bottom

// CSS variables that place a tile in `currentSlot` (see .tile in index.css).
// The empty tile also shows the icon for its slot, read from --icon-N on the puzzle
export const tileVariables = (currentSlot: number) => ({
  '--col': String(currentSlot % GRID_SIZE),
  '--row': String(Math.floor(currentSlot / GRID_SIZE)),
  '--icon': `var(--icon-${currentSlot})`
})

// CSS variables that pick the slice of the picture a tile shows
export const pictureVariables = (homeSlot: number) => ({
  '--home-col': String(homeSlot % GRID_SIZE),
  '--home-row': String(Math.floor(homeSlot / GRID_SIZE))
})

const describeSlot = (slot: number) =>
  `row ${Math.floor(slot / GRID_SIZE) + 1}, column ${(slot % GRID_SIZE) + 1}`

// Pieces are numbered by their home slot, so the label tells a screen reader
// user both where a piece is and where it belongs
export const tileLabel = (homeSlot: number, currentSlot: number) =>
  homeSlot === EMPTY_TILE_HOME_SLOT
    ? `Learn more about me (empty slot at ${describeSlot(currentSlot)})`
    : `Piece ${homeSlot} at ${describeSlot(currentSlot)}`

const moveTile = (tile: HTMLButtonElement, currentSlot: number) => {
  tile.dataset.currentSlot = currentSlot.toString()
  tile.setAttribute(
    'aria-label',
    tileLabel(Number(tile.dataset.homeSlot), currentSlot)
  )
  for (const [name, value] of Object.entries(tileVariables(currentSlot))) {
    tile.style.setProperty(name, value)
  }
}

const announce = (message: string) => {
  const status = document.querySelector('[data-puzzle-status]')
  if (status) {
    status.textContent = message
  }
}

const isSolved = () =>
  Array.from(
    document.querySelectorAll<HTMLButtonElement>('[data-current-slot]')
  ).every((tile) => tile.dataset.currentSlot === tile.dataset.homeSlot)

const getEmptyElement = (): [HTMLButtonElement, number] => {
  const empty = document.querySelector<HTMLButtonElement>('.empty')
  if (!empty?.dataset.currentSlot) {
    throw Error('Empty tile not found')
  }
  return [empty, Number(empty.dataset.currentSlot)]
}

const slideIntoEmpty = (tile: HTMLButtonElement) => {
  const [empty, emptySlot] = getEmptyElement()
  const tileSlot = Number(tile.dataset.currentSlot)
  if (!possibleMoves(emptySlot).includes(tileSlot)) {
    return
  }

  moveTile(empty, tileSlot)
  moveTile(tile, emptySlot)
  announce(
    `Piece ${tile.dataset.homeSlot} moved to ${describeSlot(emptySlot)}` +
      (isSolved() ? '. Puzzle solved!' : '')
  )
}

export const swapTiles = (e: MouseEvent<HTMLButtonElement>) =>
  slideIntoEmpty(e.currentTarget)

// Arrow keys slide the neighbouring piece in that direction into the empty
// slot, e.g. ArrowUp moves the piece below the empty slot up. Values are the
// [row, column] offset from the empty slot to that piece
const ARROW_OFFSETS: Record<string, [number, number]> = {
  ArrowUp: [1, 0],
  ArrowDown: [-1, 0],
  ArrowLeft: [0, 1],
  ArrowRight: [0, -1]
}

export const slideWithArrowKey = (e: KeyboardEvent<HTMLElement>) => {
  const offset = ARROW_OFFSETS[e.key]
  if (!offset) {
    return
  }
  e.preventDefault()

  const [, emptySlot] = getEmptyElement()
  const row = Math.floor(emptySlot / GRID_SIZE) + offset[0]
  const col = (emptySlot % GRID_SIZE) + offset[1]
  if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) {
    return
  }

  const tile = e.currentTarget.querySelector<HTMLButtonElement>(
    `[data-current-slot="${row * GRID_SIZE + col}"]`
  )
  if (tile) {
    slideIntoEmpty(tile)
  }
}

const SHUFFLE_MOVES = 7
const SHUFFLE_INTERVAL_MS = 400

let stopActiveShuffle: (() => void) | undefined

// Returns a function that stops the shuffle, so it can be used as an effect cleanup
export const shuffle = (): (() => void) => {
  stopActiveShuffle?.()

  const tiles = Array.from(
    document.querySelectorAll<HTMLButtonElement>('[data-current-slot]')
  )
  // Don't undo the previous move
  let previousEmptySlot: number | undefined
  let movesLeft = SHUFFLE_MOVES

  const intervalId = setInterval(() => {
    const [empty, emptySlot] = getEmptyElement()
    const possibilities = possibleMoves(emptySlot).filter(
      (s) => s !== previousEmptySlot
    )
    const randomSlot = possibilities[randomNumber(possibilities.length)]
    const tileToSwap = tiles.find(
      (tile) => tile.dataset.currentSlot === String(randomSlot)
    )

    if (tileToSwap && randomSlot !== undefined) {
      previousEmptySlot = emptySlot
      moveTile(empty, randomSlot)
      moveTile(tileToSwap, emptySlot)
    }

    if (--movesLeft === 0) {
      stop()
    }
  }, SHUFFLE_INTERVAL_MS)

  const stop = () => {
    clearInterval(intervalId)
    if (stopActiveShuffle === stop) {
      stopActiveShuffle = undefined
    }
  }

  stopActiveShuffle = stop
  return stop
}
