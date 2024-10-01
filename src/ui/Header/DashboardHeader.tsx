import { Menu } from "lucide-react"
import Button from "../Home/Button"
import { FC } from "react"

interface Props {
  onMenuClick: () => void
}

const DashboardHeader: FC<Props> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-blue-800">Dashboard</h1>
        <div>
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
