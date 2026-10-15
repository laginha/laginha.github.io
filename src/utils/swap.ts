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

const getEmptyElement = (): [HTMLButtonElement, TilePosition] => {
  const empty = document.querySelector('.empty') as HTMLButtonElement
  if (!empty.dataset.index) {
    throw Error('Empty tile not found')
  }
  return [empty, parseInt(empty.dataset.index) as TilePosition]
}

export const swapTiles = (e: MouseEvent<HTMLButtonElement>) => {
  const [empty, indexOfEmpty] = getEmptyElement()
  const possibilities = possibleMoves(indexOfEmpty)

  const indexOfTile = parseInt(e.currentTarget.dataset.index as string)
  if (possibilities.includes(indexOfTile as TilePosition)) {
    empty.dataset.index = indexOfTile.toString()
    e.currentTarget.dataset.index = indexOfEmpty.toString()
  }
}

export const shuffle = () => {
  let previousEmpty: TilePosition = EMPTY_TILE_POSITION

  const intervalId = setInterval(() => {
    const [empty, indexOfEmpty] = getEmptyElement()
    const possibilities = possibleMoves(indexOfEmpty).filter(
      (i) => i !== previousEmpty
    )
    const randomIndex = possibilities[randomNumber(possibilities.length)]
    const tileToSwap = document.querySelector(
      `[data-index="${randomIndex}"]`
    ) as HTMLButtonElement

    if (tileToSwap) {
      previousEmpty = indexOfEmpty
      empty.dataset.index = randomIndex.toString()
      tileToSwap.dataset.index = indexOfEmpty.toString()
    }
  }, 400)

  setTimeout(() => {
    clearInterval(intervalId)
  }, 3000)
}
