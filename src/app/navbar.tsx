import Translatedlinks from "./translatedlinks"

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-light">Chef's Buffalo Burger</h1>
          <Translatedlinks />
        </div>
      </div>
    </nav>
  )
}
