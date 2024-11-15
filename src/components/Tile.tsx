import { HTMLAttributes } from 'react'
import { TilePosition, TileSize } from '@/utils/types'

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
    className={`tile absolute h-${size} w-${size} border border-white flex cursor-pointer ${
      isEmpty ? 'empty z-10' : 'z-20'
    }`}
    {...props}
  />
)

export default Tile
