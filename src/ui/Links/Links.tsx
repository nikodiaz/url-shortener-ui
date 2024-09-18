import { useEffect, useState } from "react"
import { totalLinksByUser } from "../../lib/requests"
import { QrCode, Share2 } from "lucide-react"
import Tooltip from "../Tooltip/Tooltip"

const Links = () => {
  const [links, setLinks] = useState([])

  const truncateUrl = (url: string, maxLength: number) => {
    if (url.length <= maxLength) return url
    return url.substring(0, maxLength).concat("...")
  }


  useEffect(() => {
    totalLinksByUser().then(res => {
      setLinks(res.links)
    })
  }, [])
  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <article className="grid grid-cols-[1fr_1fr_70px_100px_100px] gap-4 pb-3 border-b font-medium text-gray-500">
        <div>URL Corta</div>
        <div>URL Original</div>
        <div className="place-self-center">Visitas</div>
        <div className="place-self-center">Código QR</div>
        <div className="place-self-center">Compartir</div>
      </article>
      <article>
        {links.map(link => (
          <div className="grid grid-cols-[1fr_1fr_70px_100px_100px] items-center gap-4 py-4 text-xs">
            <Tooltip text={link.shortUrl}>
              <a className="text-blue-600 font-medium"
                href={link.shortUrl}
                target="_blank"
              >
                {truncateUrl(link.shortUrl, 20)}
              </a>
            </Tooltip>
            <Tooltip text={link.originalUrl}>
              <div>{truncateUrl(link.originalUrl, 25)}</div>
            </Tooltip>
            <div className="place-self-center px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">{link.visits}</div>
            <button className="flex items-center justify-evenly p-1 border rounded-md shadow-sm">
              <QrCode className="w-5 h-5" />Ver QR
            </button>
            <button className="flex items-center justify-evenly p-1 border rounded-md shadow-sm">
              <Share2 className="w-5 h-5" />Compartir
            </button>
          </div>
        ))}
      </article>
    </section >
  )
}

export default Links
