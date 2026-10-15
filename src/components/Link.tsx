import type { ComponentProps } from 'react'

function Link({ href, children, ...props }: ComponentProps<'a'>) {
  return (
    <a
      className="text-blue-500 hover:text-blue-700"
      target="_blank"
      rel="noreferrer"
      {...props}
    />
  )
}

export default Link
