import { useState } from "react"
import { motion } from "framer-motion"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard"
import type { Product } from "@/store/cart"

const products: Product[] = [
  { id: 1, name: "クラシックTシャツ", price: 4980, image: "👕", category: "トップス", description: "" },
  { id: 2, name: "デニムジャケット", price: 12800, image: "🧥", category: "アウター", description: "" },
  { id: 3, name: "スニーカー", price: 9800, image: "👟", category: "シューズ", description: "" },
  { id: 4, name: "レザーバッグ", price: 15800, image: "👜", category: "バッグ", description: "" },
  { id: 5, name: "ニットセーター", price: 7980, image: "🧶", category: "トップス", description: "" },
  { id: 6, name: "チノパンツ", price: 6980, image: "👖", category: "ボトムス", description: "" },
  { id: 7, name: "キャップ", price: 3980, image: "🧢", category: "アクセサリー", description: "" },
  { id: 8, name: "サングラス", price: 8980, image: "🕶️", category: "アクセサリー", description: "" },
]

const categories = ["すべて", "トップス", "ボトムス", "アウター", "シューズ", "バッグ", "アクセサリー"]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")

  const filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">全商品</h2>
            <p className="text-muted-foreground">{filteredProducts.length}件の商品</p>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            フィルター
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="shrink-0"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
