import { Copy } from "lucide-react"
import Button from "./Button"
import { FC, useState } from "react"

interface Props {
  shortUrl: string
  qrCode: string
}

const Clipboard: FC<Props> = ({ shortUrl, qrCode }) => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopied = async () => {
    await navigator.clipboard.writeText(shortUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
      <h3 className="text-lg font-medium text-gray-900">Your shortened URL:</h3>
      <div className="flex items-center justify-between">
        <a href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >{shortUrl}</a>
        <Button onClick={handleCopied}
          color="bg-pink-100"
          rounded="rounded-full"
          size="icon">
          <span className={`absolute -top-8 -right-2 p-1 ${copied ? 'inline-block' : 'hidden'} text-xs font-thin bg-[#353535] rounded-sm`}>
            ¡Copied!
          </span>
          <Copy className="text-pink-600" />
        </Button>
      </div>
      <img className="mx-auto" src={qrCode} alt="QR Code" />
    </div>
  )
}

export default Clipboard
