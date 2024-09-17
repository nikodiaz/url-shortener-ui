import { Languages, Menu } from "lucide-react"
import Button from "../Home/Button"
import { FC } from "react"

interface Props {
  toggleLanguage: () => void
  onMenuClick: () => void
}

const DashboardHeader: FC<Props> = ({ toggleLanguage, onMenuClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-blue-800">Dashboard</h1>
        <div>
          <Button
            size="icon"
            color="bg-white"
            rounded="full"
            onClick={toggleLanguage}
          >
            <Languages className="h-5 w-5 text-blue-700" />
            <span className="sr-only">Cambiar idioma</span>
          </Button>
          <div className="inline-block sm:hidden">
            <Button
              size="icon"
              color="bg-white"
              rounded="full"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5 text-blue-700" />
              <span className="sr-only">Abrir menú</span>
            </Button>

          </div>
        </div>
      </div>
    </header>
  )
}

export default DashboardHeader
