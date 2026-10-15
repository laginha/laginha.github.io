import {
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
  useEffect
} from 'react'

import Tile from '@/components/Tile'
import { cn } from '@/utils/cn'
import { EMPTY_TILE_POSITION, ORDERED_POSITIONS } from '@/utils/constants'
import {
  pictureVariables,
  shuffle,
  swapTiles,
  tileVariables
} from '@/utils/swap'
import type { TilePosition } from '@/utils/types'

interface PuzzleProps extends ComponentProps<'div'> {
  icons: string[]
  onEmptyTileClick?: (index: TilePosition) => void
}

function Puzzle({
  icons,
  onEmptyTileClick,
  className,
  style,
  ...props
}: PuzzleProps) {
  // swap.ts moves tiles outside React, so the empty tile can't get its icon as
  // a prop. Expose each icon as --icon-N and let tileVariables pick one
  const iconVariables = Object.fromEntries(
    icons.map((icon, index) => [
      `--icon-${index}`,
      `url(${JSON.stringify(icon)})`
    ])
  ) as CSSProperties

  const onEmptyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { index } = e.currentTarget.dataset
    if (index && onEmptyTileClick) {
      onEmptyTileClick(Number(index) as TilePosition)
    }
  }

  useEffect(() => shuffle(), [])

  return (
    <div
      role="group"
      aria-label="Sliding puzzle"
      className={cn('relative size-(--puzzle)', className)}
      style={{ ...iconVariables, ...style }}
      {...props}
    >
      {ORDERED_POSITIONS.map((position, index) => (
        <Tile
          key={position}
          data-index={index}
          style={
            {
              ...pictureVariables(position),
              ...tileVariables(index)
            } as CSSProperties
          }
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
