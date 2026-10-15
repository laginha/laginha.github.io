import type { KeyboardEvent, MouseEvent } from 'react'

import { EMPTY_TILE_POSITION, GRID_SIZE } from './constants'

const randomNumber = (max: number): number => Math.floor(Math.random() * max)

const possibleMoves = (index: number): number[] => {
  const col = index % GRID_SIZE
  return [
    col > 0 ? index - 1 : -1,
    col < GRID_SIZE - 1 ? index + 1 : -1,
    index - GRID_SIZE,
    index + GRID_SIZE
  ].filter((i) => i >= 0 && i < GRID_SIZE ** 2)
}

// CSS variables that place a tile in slot `index` (see .tile in index.css).
// The empty tile also shows the icon for its slot, read from --icon-N on the puzzle
export const tileVariables = (index: number) => ({
  '--col': String(index % GRID_SIZE),
  '--row': String(Math.floor(index / GRID_SIZE)),
  '--icon': `var(--icon-${index})`
})

// CSS variables that pick the slice of the picture a tile shows
export const pictureVariables = (position: number) => ({
  '--pos-col': String(position % GRID_SIZE),
  '--pos-row': String(Math.floor(position / GRID_SIZE))
})

const describeSlot = (index: number) =>
  `row ${Math.floor(index / GRID_SIZE) + 1}, column ${(index % GRID_SIZE) + 1}`

// Pieces are numbered by their slot in the solved picture, so the label tells
// a screen reader user both where a piece is and where it belongs
export const tileLabel = (position: number, index: number) =>
  position === EMPTY_TILE_POSITION
    ? `Learn more about me (empty slot at ${describeSlot(index)})`
    : `Piece ${position} at ${describeSlot(index)}`

const moveTile = (tile: HTMLButtonElement, index: number) => {
  tile.dataset.index = index.toString()
  tile.setAttribute(
    'aria-label',
    tileLabel(Number(tile.dataset.position), index)
  )
  for (const [name, value] of Object.entries(tileVariables(index))) {
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
    document.querySelectorAll<HTMLButtonElement>('[data-index]')
  ).every((tile) => tile.dataset.index === tile.dataset.position)

const getEmptyElement = (): [HTMLButtonElement, number] => {
  const empty = document.querySelector<HTMLButtonElement>('.empty')
  if (!empty?.dataset.index) {
    throw Error('Empty tile not found')
  }
  return [empty, Number(empty.dataset.index)]
}

const slideIntoEmpty = (tile: HTMLButtonElement) => {
  const [empty, indexOfEmpty] = getEmptyElement()
  const indexOfTile = Number(tile.dataset.index)
  if (!possibleMoves(indexOfEmpty).includes(indexOfTile)) {
    return
  }

  moveTile(empty, indexOfTile)
  moveTile(tile, indexOfEmpty)
  announce(
    `Piece ${tile.dataset.position} moved to ${describeSlot(indexOfEmpty)}` +
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

  const [, indexOfEmpty] = getEmptyElement()
  const row = Math.floor(indexOfEmpty / GRID_SIZE) + offset[0]
  const col = (indexOfEmpty % GRID_SIZE) + offset[1]
  if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE) {
    return
  }

  const tile = e.currentTarget.querySelector<HTMLButtonElement>(
    `[data-index="${row * GRID_SIZE + col}"]`
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
    document.querySelectorAll<HTMLButtonElement>('[data-index]')
  )
  let previousEmpty = EMPTY_TILE_POSITION
  let movesLeft = SHUFFLE_MOVES

  const intervalId = setInterval(() => {
    const [empty, indexOfEmpty] = getEmptyElement()
    const possibilities = possibleMoves(indexOfEmpty).filter(
      (i) => i !== previousEmpty
    )
    const randomIndex = possibilities[randomNumber(possibilities.length)]
    const tileToSwap = tiles.find(
      (tile) => tile.dataset.index === String(randomIndex)
    )

    if (tileToSwap && randomIndex !== undefined) {
      previousEmpty = indexOfEmpty
      moveTile(empty, randomIndex)
      moveTile(tileToSwap, indexOfEmpty)
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
