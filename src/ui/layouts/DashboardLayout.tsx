import { Outlet } from "react-router-dom"
import DashboardHeader from "../Header/DashboardHeader"
import { useState } from "react"
import Sidebar from "../Dashboard/Sidebar"


const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(true)

  const toggleMenuOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-blue-100">
      <DashboardHeader onMenuClick={toggleMenuOpen} />
      <div className="flex-grow flex overflow-hidden">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
