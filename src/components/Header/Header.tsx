const Header = () => {
  return (
    <header className="py-6 px-4 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">URL Shortener</h1>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a></li>
            <li><a href="#about" className="text-blue-600 hover:text-blue-800 transition-colors">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
