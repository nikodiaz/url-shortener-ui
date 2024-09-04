import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | ReactNode
  size: 'full' | 'icon'
  color: string
  rounded: string
}

const Button: FC<Props> = ({ size, color, rounded, children, ...props }) => {
  return (
    <button
      className={`relative group ${rounded} p-2 ${size === 'full' ? 'w-full' : ''} ${color} text-white`}
      {...props}>
      {children}
    </button>
  )
}

export default Button
