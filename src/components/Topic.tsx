import type { ComponentProps } from 'react'

import { cn } from '@/utils/cn'

interface TopicProps extends ComponentProps<'div'> {
  tags: string[]
}

function Topic({ tags, children, className, ...props }: TopicProps) {
  return (
    <div className={cn('flex flex-col gap-4 text-left', className)} {...props}>
      {children}
      <ul className="text-gray-500 flex flex-wrap gap-x-2 justify-end">
        {tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </div>
  )
}

export default Topic
