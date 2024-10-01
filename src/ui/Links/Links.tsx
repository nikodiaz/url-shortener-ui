import { useEffect, useState } from "react"
import { totalLinksByUser } from "../../lib/requests"
import { Share2, ExternalLink, Info } from "lucide-react"
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
  const [detailsModal, setDetailsModal] = useState<boolean>(false)

  const openModal = (link: Link) => {
    setSelectedLink(link)
    setModal(true)
  }

  const closeModal = () => {
    setSelectedLink(null)
    setModal(false)
  }

  const openDetailsModal = (link: Link) => {
    setSelectedLink(link)
    setDetailsModal(true)
  }

  const closeDetailsModal = () => {
    setSelectedLink(null)
    setDetailsModal(false)
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 hidden md:table-header-group">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">URL Corta</th>
              <th scope="col" className="px-6 py-3 text-left">URL Original</th>
              <th scope="col" className="px-6 py-3 text-center">Visitas</th>
              <th scope="col" className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {links.map(link => (
              <tr key={link._id} className="bg-white border-b md:hover:bg-gray-50 block md:table-row mb-4 md:mb-0">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-between md:table-cell">
                  <span className="md:hidden font-bold">URL Corta:</span>
                  <Tooltip text={`${API}/${link.shortUrl}`}>
                    <a className="flex items-center text-blue-600 hover:underline"
                      href={`${API}/${link.shortUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {truncateUrl(`${API}/${link.shortUrl}`, 20)}
                      <ExternalLink className="inline-block w-4 h-4 ml-1" />
                    </a>
                  </Tooltip>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <Tooltip text={link.originalUrl}>
                    <div>{truncateUrl(link.originalUrl, 30)}</div>
                  </Tooltip>
                </td>
                <td className="px-6 py-4 text-center flex items-center justify-between md:table-cell">
                  <span className="md:hidden font-bold">Visitas:</span>
                  <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">{link.visits}</span>
                </td>
                <td className="px-6 py-4 text-center flex items-center justify-between md:table-cell">
                  <span className="md:hidden font-bold">Acciones:</span>
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => openModal(link)}
                      className="flex items-center justify-center p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="sr-only md:not-sr-only md:ml-2">Compartir</span>
                    </button>
                    <button
                      onClick={() => openDetailsModal(link)}
                      className="md:hidden flex items-center justify-center p-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                    >
                      <Info className="w-4 h-4" />
                      <span className="sr-only">Detalles</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedLink && (
        <Modal close={closeModal} show={modal}>
          <ShareLink qr={selectedLink.qrCode} url={`${API}/${selectedLink.shortUrl}`} />
        </Modal>
      )}

      {selectedLink && (
        <Modal close={closeDetailsModal} show={detailsModal}>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Detalles del enlace</h2>
            <p><strong>URL Original:</strong> {selectedLink.originalUrl}</p>
            <p><strong>Fecha de creación:</strong> {new Date(selectedLink.createdAt).toLocaleString().split(",")[0]}</p>
            <p><strong>Visitas:</strong> <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-medium">{selectedLink.visits}</span></p>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default Links
