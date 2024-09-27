import { CircleX, Copy, Facebook, Twitter } from "lucide-react"
import ReactDOM from "react-dom"
import { FC, ReactNode, useEffect, useState } from "react"

interface Props {
  show: boolean
  close: () => void
  children: ReactNode
}

const Modal: FC<Props> = ({ show, close, children }) => {
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const modalElement = document.getElementById("modal")
    setModalContainer(modalElement)
  }, [])

  if (!modalContainer) return null

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/35">
          <div className="p-8 rounded-lg bg-white">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Compartir</h2>
              <button onClick={close}>
                <CircleX className="w-5 h-5" />
              </button>
            </header>
            {children}
          </div>
        </div>
      ) : null}
    </>, modalContainer
  )
}

export default Modal
