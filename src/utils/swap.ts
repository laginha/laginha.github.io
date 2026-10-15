import type { MouseEvent } from 'react'

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

const moveTile = (tile: HTMLButtonElement, index: number) => {
  tile.dataset.index = index.toString()
  for (const [name, value] of Object.entries(tileVariables(index))) {
    tile.style.setProperty(name, value)
  }
}

const getEmptyElement = (): [HTMLButtonElement, number] => {
  const empty = document.querySelector<HTMLButtonElement>('.empty')
  if (!empty?.dataset.index) {
    throw Error('Empty tile not found')
  }
  return [empty, Number(empty.dataset.index)]
}

export const swapTiles = (e: MouseEvent<HTMLButtonElement>) => {
  const [empty, indexOfEmpty] = getEmptyElement()
  const possibilities = possibleMoves(indexOfEmpty)

  const indexOfTile = Number(e.currentTarget.dataset.index as string)
  if (possibilities.includes(indexOfTile)) {
    moveTile(empty, indexOfTile)
    moveTile(e.currentTarget, indexOfEmpty)
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
      (tile) => tile.dataset.index === randomIndex.toString()
    )

    if (tileToSwap) {
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
