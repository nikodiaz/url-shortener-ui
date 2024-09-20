import { Copy, Link, QrCode, Share2 } from "lucide-react"
import Cookies from "js-cookie"
import Input from "../Input/Input"
import { shortenUrl } from "../../lib/requests"
import { FormEvent, useState } from "react"

const Shortener = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const [qrCode, setQrCode] = useState<string>('')
  const API = import.meta.env.VITE_API_URL
  const token = Cookies.get("UserToken")

  const handleShorten = (e: FormEvent) => {
    e.preventDefault()
    shortenUrl(originalUrl, token).then(res => {
      setShortUrl(res.shortUrl)
      console.log(res)
      setQrCode(res.qrCode)
    })
  }
  return (
    <section className="flex flex-col gap-4">
      <form onSubmit={handleShorten} className="flex flex-col gap-4 p-8 bg-white rounded-md shadow-md">
        <Input
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          rounded="full"
          placeholder="Ingresa la URL larga" />
        <button className="flex items-center justify-center gap-4 p-2 text-white font-semibold bg-blue-700 rounded-md shadow-md">
          <Link className="w-5 h-5" />Acortar URL
        </button>
      </form>

      {shortUrl && (
        <div className="flex flex-col gap-4 p-8 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold">¡URL corta creada!</h2>
          <div className="flex items-center gap-4">

            <Input value={`${API}/${shortUrl}`} rounded="full" readOnly />
            <button className="flex items-center justify-center gap-4 p-2 min-w-48 text-white font-semibold bg-blue-700 rounded-md shadow-md">
              <Copy className="w-5 h-5" />Copiar URL
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 text-base font-medium">
            <button className="flex items-center justify-evenly gap-2 p-2 border rounded-md shadow-sm">
              <QrCode className="w-5 h-5" />Ver QR
            </button>
            <button className="flex items-center justify-evenly gap-2 p-2 border rounded-md shadow-sm">
              <Share2 className="w-5 h-5" />Compartir
            </button>

          </div>
        </div>

      )}
    </section>
  )
}

export default Shortener
