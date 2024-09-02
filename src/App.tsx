import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

function App() {


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-100 to-blue-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <Home />
      </main>
    </div>
  )
}

export default App
