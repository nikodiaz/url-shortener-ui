import { Copy } from "lucide-react"

const ShareLink = () => {
  return (
    <main className="flex justify-evenly gap-4 py-8">
      <button
        className="px-2 py-1 w-24 bg-black text-white shadow-md rounded">
        X
      </button>
      <button
        className="px-2 py-1 w-24 bg-blue-800 text-white shadow-md rounded">
        Facebook
      </button>
      <button
        className="px-2 py-1 w-24 bg-green-500 text-white shadow-md rounded">
        WhatsApp
      </button>
      <button
        className="flex items-center gap-2 px-2 py-1 w-24 bg-gray-300 shadow-md rounded">
        Copiar
        <Copy className="w-4 h-4" />
      </button>
    </main>
  )
}

export default ShareLink
