export type Board = readonly number[]

export const EMPTY_TILE_HOME_SLOT = 0

export function emptySlot(board: Board) {
  return board[EMPTY_TILE_HOME_SLOT] ?? 0
}

export function createBoard(tileCount: number): Board {
  if (!Number.isInteger(Math.sqrt(tileCount))) {
    throw new Error(`A board needs a square number of tiles, got ${tileCount}`)
  }
  return [...Array(tileCount).keys()]
}

export function gridSize(board: Board) {
  return Math.sqrt(board.length)
}

export function toCoords(slot: number, size: number) {
  return {
    row: Math.floor(slot / size),
    column: slot % size
  }
}

export function toSlot(
  row: number,
  column: number,
  size: number
): number | undefined {
  return row >= 0 && row < size && column >= 0 && column < size
    ? row * size + column
    : undefined
}

type Offset = { rowOffset: number; columnOffset: number }

export const OFFSETS = {
  up: { rowOffset: -1, columnOffset: 0 },
  down: { rowOffset: 1, columnOffset: 0 },
  left: { rowOffset: 0, columnOffset: -1 },
  right: { rowOffset: 0, columnOffset: 1 }
} as const satisfies Record<string, Offset>

export function offsetSlot(
  slot: number,
  { rowOffset, columnOffset }: Offset,
  size: number
): number | undefined {
  const { row, column } = toCoords(slot, size)
  return toSlot(row + rowOffset, column + columnOffset, size)
}

function neighbours(slot: number, size: number): number[] {
  return Object.values(OFFSETS)
    .map((offset) => offsetSlot(slot, offset, size))
    .filter((s) => s !== undefined)
}

function slide(board: Board, homeSlot: number): Board {
  const empty = emptySlot(board)
  const tileSlot = board[homeSlot]
  const canSlide =
    homeSlot !== EMPTY_TILE_HOME_SLOT &&
    tileSlot !== undefined &&
    neighbours(empty, gridSize(board)).includes(tileSlot)
  if (!canSlide) return board

  return board.map((currentSlot, home) => {
    if (home === homeSlot) return empty
    if (home === EMPTY_TILE_HOME_SLOT) return tileSlot
    return currentSlot
  })
}

type PuzzleAction =
  { type: 'slide'; homeSlot: number } | { type: 'shuffleStep'; random: number }

export function puzzleReducer(board: Board, action: PuzzleAction): Board {
  switch (action.type) {
    case 'slide':
      return slide(board, action.homeSlot)
    case 'shuffleStep': {
      const options = neighbours(emptySlot(board), gridSize(board))
      const target = options[Math.floor(action.random * options.length)]
      return target === undefined ? board : slide(board, board.indexOf(target))
    }
  }
}
