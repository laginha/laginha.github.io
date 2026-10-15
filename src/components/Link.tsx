import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

function Link({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn('text-blue-600 hover:text-blue-800', className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
