import { Link } from "lucide-react"
import Input from "../Common/Input/Input"
import Button from "./Button"
import { FormEvent, useState } from "react"
import { shortenUrl } from "../../lib/requests"
import Clipboard from "./Clipboard"



const Home = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const [qrCode, setQrCode] = useState<string>('')
  const API = import.meta.env.VITE_API_URL

  const handleShorten = (e: FormEvent) => {
    e.preventDefault()
    shortenUrl(originalUrl).then(res => {
      setShortUrl(res.shortUrl)
      setQrCode(res.qrCode)
    })
  }

  return (
    <section id="home" className="max-w-lg space-y-8 mb-12">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Acorta tu URL
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">Ingresa una URL larga para obtener un enlace corto</p>
        <form onSubmit={handleShorten} className="flex flex-col items-center sm:w-96 mt-6 space-y-4">
          <div className="w-full rounded-md shadow-sm">
            <Input placeholder="Ingresa tu URL aquí"
              rounded="top"
              type="url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </div>
          <div className="w-full">
            <Button rounded="rounded-md" color="bg-blue-700" size="full" type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Link className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
              </span>
              Acortar URL
            </Button>
          </div>
        </form>
        {
          shortUrl && (
            <div>
              <Clipboard shortUrl={`${API}/${shortUrl}`} qrCode={qrCode} />
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Home
