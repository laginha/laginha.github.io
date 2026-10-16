import type { ReactNode } from 'react'

import Link from '@/components/Link'

interface ProjectProps {
  jobTitle: string
  href: string
  children: ReactNode
}

function Project({ jobTitle, href, children }: ProjectProps) {
  return (
    <li className="bullet">
      <p>
        {jobTitle} at <Link href={href}>{href}</Link>
      </p>
      <p className="text-sm text-gray-600">{children}</p>
    </li>
  )
}

export default Project
