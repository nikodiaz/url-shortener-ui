import { FC, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  rounded: "top" | "bottom" | "full" | "none"
}

const ROUND = {
  top: "rounded-t-md",
  bottom: "rounded-b-md",
  full: "rounded-md",
  none: "rounded-none"
}

const Input: FC<Props> = ({ rounded = "none", ...props }) => {
  const roundClass = ROUND[rounded]
  return (
    <input
      required
      className={`${roundClass} appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500 focus:z-10 sm:text-sm`}
      {...props}
    />

  )
}

export default Input
