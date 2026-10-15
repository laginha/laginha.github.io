import { type MouseEvent, type ComponentProps, useEffect } from 'react'
import Tile from '@/components/Tile'
import { TilePosition, TileSize } from '@/utils/types'
import { shuffle, swapTiles } from '@/utils/swap'
import {
  ORDERED_POSITIONS,
  EMPTY_TILE_POSITION,
  PUZZLE_SIZE,
  PUZZLE_SIZE_CLASSES,
  TILE_SIZE_CLASSES
} from '@/utils/constants'

import { cn } from '@/utils/cn'

interface PuzzleProps extends ComponentProps<'div'> {
  onEmpty?: (index: TilePosition) => void
}

function Puzzle({ onEmpty, className, ...props }: PuzzleProps) {
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
    <div
      className={cn('relative', PUZZLE_SIZE_CLASSES[PUZZLE_SIZE], className)}
      {...props}
    >
      {ORDERED_POSITIONS.map((position: number, index: number) => (
        <Tile
          key={position}
          data-pos={position}
          data-index={index}
          className={TILE_SIZE_CLASSES[(PUZZLE_SIZE / 3) as TileSize]}
          isEmpty={position === EMPTY_TILE_POSITION}
          onClick={position === EMPTY_TILE_POSITION ? onEmptyClick : swapTiles}
        />
      ))}
    </div>
  )
}

export default Puzzle
