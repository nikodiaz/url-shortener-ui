import { useState } from "react"
import Home from "./ui/Home/Home"
import { Route, Routes } from "react-router-dom"
import SignUp from "./ui/SignUp/SignUp"
import SignIn from "./ui/SignIn/SignIn"
import MainLayout from "./ui/layouts/MainLayout"
import DashboardLayout from "./ui/layouts/DashboardLayout"
import Dashboard from "./ui/Dashboard/Dashboard"

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
        </Route>
      </Routes>
    </>
  )
}

export default App
