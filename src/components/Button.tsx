import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={cn(
      'border border-solid border-gray-200 bg-white text-gray-400 p-2 cursor-pointer hover:bg-gray-100 hover:border-white uppercase',
      className,
    )}
    {...props}
  />
)
export default Button
