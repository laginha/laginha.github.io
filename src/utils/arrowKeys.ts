import { type Board, emptySlot, gridSize, OFFSETS, offsetSlot } from './puzzle'

// Each arrow key moves the tile on the opposite side of the empty slot into it.
const ARROW_OFFSETS = {
  ArrowUp: OFFSETS.down,
  ArrowDown: OFFSETS.up,
  ArrowLeft: OFFSETS.right,
  ArrowRight: OFFSETS.left
} as const

export type ArrowKey = keyof typeof ARROW_OFFSETS

const ARROW_KEYS: readonly string[] = Object.keys(ARROW_OFFSETS)

export function isArrowKey(key: string): key is ArrowKey {
  return ARROW_KEYS.includes(key)
}

export function tileForArrowKey(
  board: Board,
  key: ArrowKey
): number | undefined {
  const target = offsetSlot(
    emptySlot(board),
    ARROW_OFFSETS[key],
    gridSize(board)
  )
  if (target === undefined) return undefined

  const homeSlot = board.indexOf(target)
  return homeSlot === -1 ? undefined : homeSlot
}
