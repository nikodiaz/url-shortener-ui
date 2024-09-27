import { useState } from "react"
import Home from "./ui/Home/Home"
import { Route, Routes } from "react-router-dom"
import SignUp from "./ui/Auth/SignUp/SignUp"
import SignIn from "./ui/Auth/SignIn/SignIn"
import MainLayout from "./ui/layouts/MainLayout"
import DashboardLayout from "./ui/layouts/DashboardLayout"
import Dashboard from "./ui/Dashboard/Dashboard"
import Links from "./ui/Links/Links"
import Shortener from "./ui/Shortener/Shortener"

export type Language = 'en' | 'es'

function App() {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  return (
    <>
      <Routes>
        <Route element={<MainLayout lang={lang} toggleLanguage={toggleLanguage} />}>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<DashboardLayout toggleLanguage={toggleLanguage} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/my-links" element={<Links />} />
          <Route path="/dashboard/shortener" element={<Shortener />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
