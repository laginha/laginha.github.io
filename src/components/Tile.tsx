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
        'tile absolute left-0 top-0 size-(--tile) border border-white flex cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-black',
        isEmpty ? 'empty z-10' : 'z-20',
        className
      )}
      {...props}
    />
  )
}

export default Tile
