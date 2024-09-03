import { Link } from "lucide-react"
import Input from "../Input/Input"
import Button from "./Button"
import { FormEvent, useState } from "react"
import { shortenUrl } from "../../lib/requests"

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')

  const handleShorten = (e: FormEvent) => {
    e.preventDefault()
    shortenUrl(originalUrl).then(res => console.log(res))
  }

  return (
    <section id="home" className="max-w-md w-full space-y-8 mb-12">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Shorten your URL
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">Enter a long URL to get a short link</p>
        <form onSubmit={handleShorten} className="flex flex-col items-center mt-6 space-y-4">
          <div className="w-full rounded-md shadow-sm">
            <Input value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
          </div>
          <div className="w-full">
            <Button type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Link className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
              </span>
              Shorten URL
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Home
