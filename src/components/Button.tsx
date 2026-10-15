import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

function Button({ className, ...props }: ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'border border-solid border-gray-200 bg-white text-gray-400 p-2 cursor-pointer hover:bg-gray-100 hover:border-white uppercase',
        className
      )}
      {...props}
    />
  )
}

export default Button
