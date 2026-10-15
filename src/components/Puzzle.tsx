import {
  type ComponentProps,
  type CSSProperties,
  type KeyboardEvent,
  useId
} from 'react'

import Tile from '@/components/Tile'
import { isArrowKey, tileForArrowKey } from '@/utils/arrowKeys'
import { cn } from '@/utils/cn'
import { GRID_SIZE } from '@/utils/constants'
import { type Board, EMPTY_TILE_HOME_SLOT } from '@/utils/puzzle'

interface PuzzleProps extends ComponentProps<'div'> {
  board: Board
  icons: string[]
  onSlide: (homeSlot: number) => void
  onEmptyTileClick?: (currentSlot: number) => void
}

const tileStyle = (homeSlot: number, currentSlot: number) =>
  ({
    '--current-column': currentSlot % GRID_SIZE,
    '--current-row': Math.floor(currentSlot / GRID_SIZE),
    '--home-column': homeSlot % GRID_SIZE,
    '--home-row': Math.floor(homeSlot / GRID_SIZE)
  }) as CSSProperties

function Puzzle({
  board,
  icons,
  onSlide,
  onEmptyTileClick,
  className,
  style,
  ...props
}: PuzzleProps) {
  const instructionsId = useId()

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isArrowKey(e.key)) return
    e.preventDefault()
    const homeSlot = tileForArrowKey(board, e.key)
    if (homeSlot !== undefined) onSlide(homeSlot)
  }

  return (
    <div
      role="group"
      aria-label="Sliding puzzle"
      aria-describedby={instructionsId}
      onKeyDown={onKeyDown}
      className={cn('puzzle relative size-(--puzzle)', className)}
      style={{ '--grid': GRID_SIZE, ...style } as CSSProperties}
      {...props}
    >
      {board.map((currentSlot, homeSlot) => {
        const isEmpty = homeSlot === EMPTY_TILE_HOME_SLOT
        const icon = icons[currentSlot]
        return (
          <Tile
            key={homeSlot}
            isEmpty={isEmpty}
            style={
              {
                ...tileStyle(homeSlot, currentSlot),
                ...(isEmpty &&
                  icon && { '--icon': `url(${JSON.stringify(icon)})` })
              } as CSSProperties
            }
            onClick={() =>
              isEmpty ? onEmptyTileClick?.(currentSlot) : onSlide(homeSlot)
            }
          />
        )
      })}
      <p id={instructionsId} className="sr-only">
        Use the arrow keys to slide a piece into the empty slot.
      </p>
    </div>
  )
}

export default Puzzle
