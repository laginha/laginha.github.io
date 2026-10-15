import {
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
  useEffect,
  useId
} from 'react'

import Tile from '@/components/Tile'
import { cn } from '@/utils/cn'
import { EMPTY_TILE_POSITION, ORDERED_POSITIONS } from '@/utils/constants'
import {
  pictureVariables,
  shuffle,
  slideWithArrowKey,
  swapTiles,
  tileLabel,
  tileVariables
} from '@/utils/swap'

interface PuzzleProps extends ComponentProps<'div'> {
  icons: string[]
  onEmptyTileClick?: (index: number) => void
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
      onEmptyTileClick(Number(index))
    }
  }

  const instructionsId = useId()

  useEffect(() => shuffle(), [])

  return (
    <div
      role="group"
      aria-label="Sliding puzzle"
      aria-describedby={instructionsId}
      onKeyDown={slideWithArrowKey}
      className={cn('relative size-(--puzzle)', className)}
      style={{ ...iconVariables, ...style }}
      {...props}
    >
      {ORDERED_POSITIONS.map((position, index) => (
        <Tile
          key={position}
          data-index={index}
          data-position={position}
          style={
            {
              ...pictureVariables(position),
              ...tileVariables(index)
            } as CSSProperties
          }
          isEmpty={position === EMPTY_TILE_POSITION}
          aria-label={tileLabel(position, index)}
          onClick={position === EMPTY_TILE_POSITION ? onEmptyClick : swapTiles}
        />
      ))}
      <p id={instructionsId} className="sr-only">
        Pieces are numbered by where they belong in the picture, left to right
        and top to bottom, with the empty slot at the top left. Use the arrow
        keys to slide a piece into the empty slot.
      </p>
      <p className="sr-only" aria-live="polite" data-puzzle-status />
    </div>
  )
}

export default Puzzle
