import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | ReactNode
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="relative group py-2 w-full bg-blue-700 text-white rounded-md"
      {...props}>
      {children}
    </button>
  )
}

export default Button
