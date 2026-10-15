import { HTMLAttributes } from 'react'
import { TilePosition, TileSize } from '@/utils/types'
import { TILE_SIZE_CLASSES } from '@/utils/constants'
import { cn } from '@/utils/cn'

interface TileProps extends HTMLAttributes<HTMLDivElement> {
  size: TileSize
  position: TilePosition
  index: TilePosition
  isEmpty: boolean
}

const Tile = ({ size, position, isEmpty, index, ...props }: TileProps) => (
  <div
    data-pos={position}
    data-index={index}
    className={cn(
      'tile absolute border border-white flex cursor-pointer',
      TILE_SIZE_CLASSES[size],
      isEmpty ? 'empty z-10' : 'z-20',
    )}
    {...props}
  />
)

export default Tile
