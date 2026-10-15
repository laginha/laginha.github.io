import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

interface TileProps extends ComponentProps<'div'> {
  isEmpty: boolean
}

function Tile({ isEmpty, className, ...props }: TileProps) {
  return (
    <div
      className={cn(
        'tile absolute border border-white flex cursor-pointer',
        isEmpty ? 'empty z-10' : 'z-20',
        className
      )}
      {...props}
    />
  )
}

export default Tile
