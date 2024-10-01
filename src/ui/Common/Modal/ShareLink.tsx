import { Copy, Download } from "lucide-react"
import { useState } from "react"
import QRCode from "./QRCode"

const ShareLink = ({ url, qr }: { url: string, qr: string }) => {
  const [copied, setCopied] = useState<boolean>(false)

  const options = [
    { name: "X", bg: "bg-gray-900", hover: "hover: bg-black" },
    { name: "Facebook", bg: "bg-[#4267b2]", hover: "hover: bg-[#365899]" },
    { name: "WhatsApp", bg: "bg-[#25d366]", hover: "hover: bg-[#12cc72]" },
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
    <main className="flex flex-col justify-evenly gap-4 py-8">
      <div className="flex items-center justify-evenly gap-4">
        {options.map((option: { name: string, bg: string, hover: string }) => (
          <button
            key={option.name}
            onClick={() => handleShare(option.name)}
            className={`flex items-center justify-center px-4 py-2 min-w-24 ${option.bg} ${option.hover} text-white rounded-lg transition-colors duration-300`}
          >
            {option.name}
          </button>
        ))}
        <button
          onClick={handleCopy}
          className="relative flex items-center gap-2 px-4 py-2 min-w-24 bg-gray-300 shadow-md rounded">
          <span className={`absolute -top-8 right-5 p-1 ${copied ? 'inline-block' : 'hidden'} text-xs text-white font-thin bg-[#353535] rounded-sm`}>
            ¡Copiado!
          </span>
          Copiar
          <Copy className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <QRCode qrCode={qr} />

        <div className="flex gap-2">
          <button
            onClick={handleDownloadQR}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
          >
            Descargar QR
            <Download className="w-4 h-4" />
          </button>

        </div>
      </div>
    </main >
  )
}

export default ShareLink
