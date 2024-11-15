import { ReactNode } from 'react'

const Link = ({ href, children }: { href: string; children?: ReactNode }) => (
  <a
    className="text-blue-500 hover:text-blue-700"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children || href}
  </a>
)

export default Link
