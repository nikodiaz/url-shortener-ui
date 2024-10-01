import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-blue-100">
      <MainHeader />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
