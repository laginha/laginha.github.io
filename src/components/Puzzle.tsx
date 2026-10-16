import {
  type ComponentProps,
  type CSSProperties,
  type KeyboardEvent,
  useId
} from 'react'

import Tile from '@/components/Tile'
import { isArrowKey, tileForArrowKey } from '@/utils/arrowKeys'
import { cn } from '@/utils/cn'
import {
  type Board,
  EMPTY_TILE_HOME_SLOT,
  gridSize,
  toCoords
} from '@/utils/puzzle'

interface PuzzleProps extends ComponentProps<'div'> {
  board: Board
  topics: { icon: string; title: string }[]
  onSlide: (homeSlot: number) => void
  onEmptyTileClick?: (currentSlot: number) => void
}

function tileStyle(
  homeSlot: number,
  currentSlot: number,
  size: number
): CSSProperties {
  const current = toCoords(currentSlot, size)
  const home = toCoords(homeSlot, size)
  return {
    '--current-column': current.column,
    '--current-row': current.row,
    '--home-column': home.column,
    '--home-row': home.row
  }
}

function Puzzle({
  board,
  topics,
  onSlide,
  onEmptyTileClick,
  className,
  style,
  ...props
}: PuzzleProps) {
  const instructionsId = useId()
  const size = gridSize(board)

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
      style={{ '--grid': size, ...style }}
      {...props}
    >
      {board.map((currentSlot, homeSlot) => {
        const isEmpty = homeSlot === EMPTY_TILE_HOME_SLOT
        const topic = topics[currentSlot]
        const icon = topic?.icon
        return (
          <Tile
            key={homeSlot}
            isEmpty={isEmpty}
            aria-label={
              isEmpty ? `Open: ${topic?.title ?? ''}` : `Piece ${homeSlot}`
            }
            tabIndex={isEmpty ? 0 : -1}
            style={{
              ...tileStyle(homeSlot, currentSlot, size),
              ...(isEmpty &&
                icon && { '--icon': `url(${JSON.stringify(icon)})` })
            }}
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
