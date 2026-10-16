import type { ComponentProps, ReactNode } from 'react'

import Link from '@/components/Link'
import { cn } from '@/utils/cn'

interface TopicProps extends ComponentProps<'div'> {
  tags: string[]
}

export function Topic({ tags, children, className, ...props }: TopicProps) {
  return (
    <div className={cn('flex flex-col gap-4 text-left', className)} {...props}>
      {children}
      <ul className="text-blue-600 flex flex-wrap gap-x-2 justify-end">
        {tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
    </div>
  )
}

interface ProjectProps {
  jobTitle: string
  href: string
  children: ReactNode
}

export function Project({ jobTitle, href, children }: ProjectProps) {
  return (
    <ListItem>
      <p>
        {jobTitle} at <Link href={href}>{href}</Link>
      </p>
      <p className="text-sm text-gray-600">{children}</p>
    </ListItem>
  )
}

export function ListItem({ children }: { children: ReactNode }) {
  return <li className="mt-2 ml-4 list-disc">{children}</li>
}
