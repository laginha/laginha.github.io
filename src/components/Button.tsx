import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

function Button({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      type="button"
      className={cn(
        'border border-solid border-zinc-200 bg-white text-zinc-600 p-2 cursor-pointer hover:bg-zinc-100 hover:border-white uppercase',
        className
      )}
      {...props}
    />
  )
}

export default Button
