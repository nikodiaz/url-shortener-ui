import { useState } from "react"
import Header from "./ui/Header/Header"
import Home from "./ui/Home/Home"

export type Language = 'en' | 'es'

function App() {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-blue-100">
      <Header toggleLang={toggleLanguage} />
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <Home lang={lang} />
      </main>
    </div>
  )
}

export default App
