import { Copy } from "lucide-react"
import Button from "./Button"
import { FC } from "react"

interface Props {
  shortUrl: string
}

const Clipboard: FC<Props> = ({ shortUrl }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
      <h3 className="text-lg font-medium text-gray-900">Your shortened URL:</h3>
      <div className="flex items-center justify-between">
        <a href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >{shortUrl}</a>
        <Button color="bg-pink-100" rounded="rounded-full" size="icon"><Copy className="text-pink-600" /></Button>
      </div>
    </div>
  )
}

export default Clipboard
