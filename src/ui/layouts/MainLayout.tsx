import { Outlet } from "react-router-dom";
import MainHeader from "../Header/MainHeader";
import { Language } from "../../App";
import { FC } from "react";

interface Props {
  lang: Language
  toggleLanguage: () => void
}

const MainLayout: FC<Props> = ({ lang, toggleLanguage }) => {


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-blue-100">
      <MainHeader toggleLang={toggleLanguage} />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
