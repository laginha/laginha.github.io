import {
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
  useEffect
} from 'react'

import Tile from '@/components/Tile'
import { cn } from '@/utils/cn'
import {
  EMPTY_TILE_POSITION,
  ORDERED_POSITIONS,
  PUZZLE_SIZE,
  PUZZLE_SIZE_CLASSES,
  TILE_SIZE_CLASSES
} from '@/utils/constants'
import { shuffle, swapTiles } from '@/utils/swap'
import type { TilePosition, TileSize } from '@/utils/types'

interface PuzzleProps extends ComponentProps<'div'> {
  icons: string[]
  onEmpty?: (index: TilePosition) => void
}

function Puzzle({ icons, onEmpty, className, style, ...props }: PuzzleProps) {
  // The empty tile picks its icon by data-index (see index.css), which swap.ts
  // changes outside React, so expose each icon as a --icon-N custom property
  const iconVariables = Object.fromEntries(
    icons.map((icon, index) => [
      `--icon-${index}`,
      `url(${JSON.stringify(icon)})`
    ])
  ) as CSSProperties

  const onEmptyClick = (e: MouseEvent<HTMLButtonElement>) => {
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
      role="group"
      aria-label="Sliding puzzle"
      className={cn('relative', PUZZLE_SIZE_CLASSES[PUZZLE_SIZE], className)}
      style={{ ...iconVariables, ...style }}
      {...props}
    >
      {ORDERED_POSITIONS.map((position: number, index: number) => (
        <Tile
          key={position}
          data-pos={position}
          data-index={index}
          className={TILE_SIZE_CLASSES[(PUZZLE_SIZE / 3) as TileSize]}
          isEmpty={position === EMPTY_TILE_POSITION}
          aria-label={
            position === EMPTY_TILE_POSITION
              ? 'Learn more about me'
              : `Move piece ${position}`
          }
          onClick={position === EMPTY_TILE_POSITION ? onEmptyClick : swapTiles}
        />
      ))}
    </div>
  )
}

export default Puzzle
