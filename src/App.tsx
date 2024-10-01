import Home from "./ui/Home/Home"
import { Route, Routes } from "react-router-dom"
import SignUp from "./ui/Auth/SignUp/SignUp"
import SignIn from "./ui/Auth/SignIn/SignIn"
import MainLayout from "./ui/layouts/MainLayout"
import DashboardLayout from "./ui/layouts/DashboardLayout"
import Dashboard from "./ui/Dashboard/Dashboard"
import Links from "./ui/Links/Links"
import Shortener from "./ui/Shortener/Shortener"


function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-links" element={<Links />} />
          <Route path="/dashboard/shortener" element={<Shortener />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
