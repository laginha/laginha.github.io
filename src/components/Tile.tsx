import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

interface TileProps extends ComponentProps<'button'> {
  isEmpty: boolean
}

function Tile({ isEmpty, className, ...props }: TileProps) {
  return (
    <button
      type="button"
      className={cn(
        'tile absolute size-(--tile) border border-white flex cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-blue-500',
        isEmpty ? 'empty z-10' : 'z-20',
        className
      )}
      {...props}
    />
  )
}

export default Tile
