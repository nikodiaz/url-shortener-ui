import { Copy, Download } from "lucide-react"
import { useState } from "react"
import QRCode from "./QRCode"

const ShareLink = ({ url, qr }: { url: string, qr: string }) => {
  const [copied, setCopied] = useState<boolean>(false)

  const options = [
    { name: "X", bg: "bg-gray-900", hover: "hover:bg-black" },
    { name: "Facebook", bg: "bg-[#4267b2]", hover: "hover:bg-[#365899]" },
    { name: "WhatsApp", bg: "bg-[#25d366]", hover: "hover:bg-[#12cc72]" },
  ]

  const handleShare = (platform: string) => {
    let shareUrl = ""
    const text = `Mira este enlace: ${url}`

    switch (platform) {
      case "X":
        shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`
        break
      case "Facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "WhatsApp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
        break
    }

    window.open(shareUrl, "_blank")
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadQR = () => {
    const link = document.createElement('a')
    link.href = `${qr}`
    link.download = 'qr-code.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="flex flex-col justify-evenly gap-6 py-4 px-2 sm:py-8 sm:px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {options.map((option: { name: string, bg: string, hover: string }) => (
          <button
            key={option.name}
            onClick={() => handleShare(option.name)}
            className={`flex items-center justify-center min-w-24 px-4 py-2 w-full sm:w-auto ${option.bg} ${option.hover} text-white rounded-lg transition-colors duration-300`}
          >
            {option.name}
          </button>
        ))}
        <button
          onClick={handleCopy}
          className="relative flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-auto bg-gray-300 hover:bg-gray-400 shadow-md rounded-lg transition-colors duration-300"
        >
          <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 p-1 ${copied ? 'inline-block' : 'hidden'} text-xs text-white font-thin bg-[#353535] rounded-sm whitespace-nowrap`}>
            ¡Copiado!
          </span>
          Copiar
          <Copy className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-[250px] mx-auto">
          <QRCode qrCode={qr} />
        </div>

        <button
          onClick={handleDownloadQR}
          className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
        >
          Descargar QR
          <Download className="w-4 h-4" />
        </button>
      </div>

      <div className="text-center text-sm text-gray-600 mt-4">
        <p>Enlace corto: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{url}</a></p>
      </div>
    </main>
  )
}

export default ShareLink
