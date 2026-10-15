import { GRID_SIZE } from './constants'

export type Board = readonly number[]

export const EMPTY_TILE_HOME_SLOT = 0

export const emptySlot = (board: Board) => board[EMPTY_TILE_HOME_SLOT] ?? 0

const neighbours = (slot: number): number[] => {
  const col = slot % GRID_SIZE
  return [
    col > 0 ? slot - 1 : -1,
    col < GRID_SIZE - 1 ? slot + 1 : -1,
    slot - GRID_SIZE,
    slot + GRID_SIZE
  ].filter((s) => s >= 0 && s < GRID_SIZE ** 2)
}

const slide = (board: Board, homeSlot: number): Board => {
  const empty = emptySlot(board)
  const tileSlot = board[homeSlot]
  if (
    homeSlot === EMPTY_TILE_HOME_SLOT ||
    tileSlot === undefined ||
    !neighbours(empty).includes(tileSlot)
  )
    return board

  return board.map((currentSlot, home) => {
    if (home === homeSlot) return empty
    if (home === EMPTY_TILE_HOME_SLOT) return tileSlot
    return currentSlot
  })
}

type PuzzleAction =
  { type: 'slide'; homeSlot: number } | { type: 'shuffleStep' }

export const puzzleReducer = (board: Board, action: PuzzleAction): Board => {
  switch (action.type) {
    case 'slide':
      return slide(board, action.homeSlot)
    case 'shuffleStep': {
      const options = neighbours(emptySlot(board))
      const target = options[Math.floor(Math.random() * options.length)]
      return target === undefined ? board : slide(board, board.indexOf(target))
    }
  }
}
