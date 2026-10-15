import type { MouseEvent } from 'react'

import { EMPTY_TILE_POSITION } from './constants'
import type { TilePosition, Tiles } from './types'

const randomNumber = (max: number): number => Math.floor(Math.random() * max)

const possibleMoves = (index: number): Tiles => {
  const top = index - 3
  const bottom = index + 3
  let left = index - 1
  let right = index + 1

  if ((index % 3) - (left % 3) < 1) {
    left = -1
  }
  if ((right % 3) - (index % 3) < 1) {
    right = -1
  }

  return [left, right, top, bottom].filter((i) => i >= 0 && i < 9) as Tiles
}

// CSS variables that place a tile in slot `index` (see .tile in index.css).
// The empty tile also shows the icon for its slot, read from --icon-N on the puzzle
export const tileVariables = (index: number) => ({
  '--col': String(index % 3),
  '--row': String(Math.floor(index / 3)),
  '--icon': `var(--icon-${index})`
})

// CSS variables that pick the slice of the picture a tile shows
export const pictureVariables = (position: TilePosition) => ({
  '--pos-col': String(position % 3),
  '--pos-row': String(Math.floor(position / 3))
})

const moveTile = (tile: HTMLButtonElement, index: number) => {
  tile.dataset.index = index.toString()
  for (const [name, value] of Object.entries(tileVariables(index))) {
    tile.style.setProperty(name, value)
  }
}

const getEmptyElement = (): [HTMLButtonElement, TilePosition] => {
  const empty = document.querySelector('.empty') as HTMLButtonElement
  if (!empty.dataset.index) {
    throw Error('Empty tile not found')
  }
  return [empty, Number(empty.dataset.index) as TilePosition]
}

export const swapTiles = (e: MouseEvent<HTMLButtonElement>) => {
  const [empty, indexOfEmpty] = getEmptyElement()
  const possibilities = possibleMoves(indexOfEmpty)

  const indexOfTile = Number(e.currentTarget.dataset.index as string)
  if (possibilities.includes(indexOfTile as TilePosition)) {
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
  let previousEmpty: TilePosition = EMPTY_TILE_POSITION
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
