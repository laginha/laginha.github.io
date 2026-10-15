import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

function Link({ className, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn('text-blue-500 hover:text-blue-700', className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  )
}

export default Link
