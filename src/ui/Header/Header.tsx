import { Languages } from "lucide-react"
import Button from "../Home/Button"
import { FC } from "react"

interface Props {
  toggleLang: () => void
}

const Header: FC<Props> = ({ toggleLang }) => {
  return (
    <header className="py-6 px-4 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">URL Shortener</h1>
        <Button onClick={toggleLang} size="icon" color="bg-white" rounded="rounded-full"><Languages className="text-blue-600" /></Button>
      </div>
    </header>
  )
}

export default Header
