import { useEffect, useState } from "react"
import { totalLinksByUser } from "../../lib/requests"
import { Share2 } from "lucide-react"
import Tooltip from "../Common/Tooltip/Tooltip"
import Modal from "../Common/Modal/Modal"
import ShareLink from "../Common/Modal/ShareLink"

export interface Link {
  createdAt: string
  expiresAt: string | null
  originalUrl: string
  qrCode: string
  shortUrl: string
  user: string | null
  visits: number
  visitsByDate: any
  _id: string
  __v: number
}

const Links = () => {
  const [links, setLinks] = useState<Link[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [selectedLink, setSelectedLink] = useState<Link | null>(null)

  const openModal = (link: any) => {
    setSelectedLink(link)
    setModal(true)
  }

  const closeModal = () => {
    setSelectedLink(null)
    setModal(false)
  }

  const API = import.meta.env.VITE_API_URL
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
        <div className="place-self-center">Compartir</div>
      </article>
      <article>
        {links.map(link => (
          <div key={link._id} className="grid grid-cols-[1fr_1fr_70px_100px_100px] items-center gap-4 py-4 text-xs">
            <Tooltip text={`${API}/${link.shortUrl}`}>
              <a className="text-blue-600 font-medium"
                href={`${API}/${link.shortUrl}`}
                target="_blank"
              >
                {truncateUrl(`${API}/${link.shortUrl}`, 20)}
              </a>
            </Tooltip>
            <Tooltip text={link.originalUrl}>
              <div>{truncateUrl(link.originalUrl, 30)}</div>
            </Tooltip>
            <div className="place-self-center px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">{link.visits}</div>
            <button
              onClick={() => openModal(link)}
              className="flex items-center justify-evenly p-1 border rounded-md shadow-sm">
              <Share2 className="w-5 h-5" />Compartir
            </button>
          </div>
        ))}
        {
          selectedLink && (
            <Modal close={closeModal} show={modal}>
              <ShareLink qr={selectedLink.qrCode} url={`${API}/${selectedLink.shortUrl}`} />
            </Modal>

          )
        }
      </article>
    </section >
  )
}

export default Links
