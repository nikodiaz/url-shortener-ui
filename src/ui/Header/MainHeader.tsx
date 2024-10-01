import { Link } from "react-router-dom"

const MainHeader = () => {
  return (
    <header className="fixed left-0 right-0 top-0 py-4 px-4 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">URL Shortener</h1>
        <div className="flex items-center gap-4 text-blue-600 font-semibold">
          <Link to="/signin" >Inicia sesión</Link>
          |
          <Link to="/signup" >Registrate</Link>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
