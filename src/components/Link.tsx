import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

function Link({ className, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className={cn('link', className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}

export default Link
