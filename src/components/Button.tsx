import { ButtonHTMLAttributes } from 'react'

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`border border-solid bg-white text-gray-400 p-2 cursor-pointer hover:bg-gray-100 hover:border-white uppercase ${className}`}
    {...props}
  />
)
export default Button
