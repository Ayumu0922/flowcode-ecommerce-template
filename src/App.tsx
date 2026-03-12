import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ProductGrid } from "@/components/products/ProductGrid"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
