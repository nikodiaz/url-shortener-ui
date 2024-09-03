import { FC, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const Input: FC<Props> = () => {
  return (
    <input
      type="url"
      required
      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:border-blue-500 focus:z-10 sm:text-sm"
      placeholder="Enter your URL here" />
  )
}

export default Input
