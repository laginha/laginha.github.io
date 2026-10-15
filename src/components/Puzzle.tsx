import { MouseEvent, useEffect } from 'react'
import Tile from '@/components/Tile'
import { TilePosition, TileSize } from '@/utils/types'
import { shuffle, swapTiles } from '@/utils/swap'
import {
  ORDERED_POSITIONS,
  EMPTY_TILE_POSITION,
  PUZZLE_SIZE,
  PUZZLE_SIZE_CLASSES,
} from '@/utils/constants'
import { cn } from '@/utils/cn'

interface PuzzleProps {
  onEmpty?: (index: TilePosition) => void
}

const Puzzle = ({ onEmpty }: PuzzleProps) => {
  const onEmptyClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const { index } = e.currentTarget.dataset
    if (index && onEmpty) {
      onEmpty(parseInt(index) as TilePosition)
    }
  }

  useEffect(() => {
    shuffle()
  }, [])

  return (
    <div className={cn('relative', PUZZLE_SIZE_CLASSES[PUZZLE_SIZE])}>
      {ORDERED_POSITIONS.map((position: number, index: number) => (
        <Tile
          key={position}
          index={index as TilePosition}
          size={(PUZZLE_SIZE / 3) as TileSize}
          position={position as TilePosition}
          isEmpty={position === EMPTY_TILE_POSITION}
          onClick={position === EMPTY_TILE_POSITION ? onEmptyClick : swapTiles}
        />
      ))}
    </div>
  )
}

export default Puzzle
