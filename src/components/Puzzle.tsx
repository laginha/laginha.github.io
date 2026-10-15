import {
  type ComponentProps,
  type CSSProperties,
  type MouseEvent,
  useEffect,
  useId
} from 'react'

import Tile from '@/components/Tile'
import { cn } from '@/utils/cn'
import { EMPTY_TILE_HOME_SLOT, GRID_SIZE, SLOTS } from '@/utils/constants'
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
  onEmptyTileClick?: (currentSlot: number) => void
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
    const { currentSlot } = e.currentTarget.dataset
    if (currentSlot && onEmptyTileClick) {
      onEmptyTileClick(Number(currentSlot))
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
      className={cn('puzzle relative size-(--puzzle)', className)}
      style={
        { '--grid': GRID_SIZE, ...iconVariables, ...style } as CSSProperties
      }
      {...props}
    >
      {/* Tiles render in their home slots; shuffle() then moves them */}
      {SLOTS.map((homeSlot) => (
        <Tile
          key={homeSlot}
          data-current-slot={homeSlot}
          data-home-slot={homeSlot}
          style={
            {
              ...pictureVariables(homeSlot),
              ...tileVariables(homeSlot)
            } as CSSProperties
          }
          isEmpty={homeSlot === EMPTY_TILE_HOME_SLOT}
          aria-label={tileLabel(homeSlot, homeSlot)}
          onClick={homeSlot === EMPTY_TILE_HOME_SLOT ? onEmptyClick : swapTiles}
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
