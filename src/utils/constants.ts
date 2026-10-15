import { TilePosition, Tiles, PuzzleSize, TileSize } from './types'

export const EMPTY_TILE_POSITION: TilePosition = 0
export const ORDERED_POSITIONS = [...Array(9).keys()] as Tiles
export const PUZZLE_SIZE: PuzzleSize = 96

export const PUZZLE_WIDTH_CLASSES: Record<PuzzleSize, string> = {
  96: 'w-96',
  72: 'w-72',
  48: 'w-48'
}

export const PUZZLE_SIZE_CLASSES: Record<PuzzleSize, string> = {
  96: 'h-96 w-96',
  72: 'h-72 w-72',
  48: 'h-48 w-48'
}

export const TILE_SIZE_CLASSES: Record<TileSize, string> = {
  32: 'h-32 w-32',
  24: 'h-24 w-24',
  16: 'h-16 w-16'
}
