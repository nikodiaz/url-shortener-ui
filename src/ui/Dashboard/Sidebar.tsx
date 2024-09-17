import { Link } from 'react-router-dom'
import { BarChart2, Link as LinkIcon, LogOut } from "lucide-react"

interface Props {
  open: boolean
  onClose: () => void
}

const Sidebar = ({ open, onClose }: Props) => {
  return (
    <aside className={`bg-white w-64 shadow-md transform ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static top-0 left-0 bottom-0 z-50`}>
      <nav className="h-full flex flex-col justify-between p-4">
        <div className="space-y-4">
          <Link to="/dashboard" onClick={onClose}>
            <button
              className='flex items-center py-2 px-4 w-full text-white rounded-md bg-[#353535]'
            >
              <BarChart2 className="mr-3 h-5 w-5" />
              Dashboard
            </button>
          </Link>
          <Link to="/dashboard/my-links" onClick={onClose}>
            <button
              className='flex items-center py-2 px-4 w-full text-white rounded-md bg-[#353535] mt-4'
            >
              <LinkIcon className="mr-3 h-5 w-5" />
              My Links
            </button>
          </Link>
        </div>
        <Link to="/logout" onClick={onClose}>
          <button
            className='flex items-center py-2 px-4 w-full text-white rounded-md bg-[#353535]'
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </Link>
      </nav>
    </aside >
  )
}

export default Sidebar
