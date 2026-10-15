import { GRID_SIZE } from './constants'
import { type Board, emptySlot } from './puzzle'

const ARROW_OFFSETS: Record<string, [number, number]> = {
  ArrowUp: [1, 0],
  ArrowDown: [-1, 0],
  ArrowLeft: [0, 1],
  ArrowRight: [0, -1]
}

const ARROW_OFFSET_KEYS = Object.keys(ARROW_OFFSETS)

export const isArrowKey = (key: string) => ARROW_OFFSET_KEYS.includes(key)

// Home slot of the piece an arrow key would slide, if there is one
export const tileForArrowKey = (
  board: Board,
  key: string
): number | undefined => {
  const offset = ARROW_OFFSETS[key]
  if (!offset) return undefined

  const empty = emptySlot(board)
  const row = Math.floor(empty / GRID_SIZE) + offset[0]
  const col = (empty % GRID_SIZE) + offset[1]
  if (row < 0 || row >= GRID_SIZE || col < 0 || col >= GRID_SIZE)
    return undefined

  const homeSlot = board.indexOf(row * GRID_SIZE + col)
  return homeSlot === -1 ? undefined : homeSlot
}
