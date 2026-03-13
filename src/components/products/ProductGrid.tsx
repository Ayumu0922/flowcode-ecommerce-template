import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid3X3, LayoutGrid, SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  { id: 9, name: "ウールコート", price: 24800, image: "🧥", category: "アウター", description: "" },
  { id: 10, name: "スウェットパーカー", price: 8980, image: "👕", category: "トップス", description: "" },
  { id: 11, name: "ローファー", price: 14800, image: "👞", category: "シューズ", description: "" },
  { id: 12, name: "トートバッグ", price: 9800, image: "👜", category: "バッグ", description: "" },
]

const categories = ["すべて", "トップス", "ボトムス", "アウター", "シューズ", "バッグ", "アクセサリー"]

const sortOptions = [
  { value: "newest", label: "新着順" },
  { value: "price-low", label: "価格: 安い順" },
  { value: "price-high", label: "価格: 高い順" },
  { value: "popular", label: "人気順" },
]

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [gridCols, setGridCols] = useState<3 | 4>(4)
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  let filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
  }

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">全商品</h2>
            <p className="text-muted-foreground">
              <motion.span
                key={filteredProducts.length}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                {filteredProducts.length}
              </motion.span>
              件の商品
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Grid Toggle */}
            <div className="hidden md:flex items-center border rounded-lg p-1">
              <Button
                variant={gridCols === 3 ? "default" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setGridCols(3)}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={gridCols === 4 ? "default" : "ghost"}
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setGridCols(4)}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-10 px-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="relative"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              フィルター
              {selectedCategory !== "すべて" && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
                  1
                </Badge>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="p-6 bg-card rounded-xl border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">フィルター</h3>
                  {selectedCategory !== "すべて" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory("すべて")}
                    >
                      <X className="h-4 w-4 mr-1" />
                      リセット
                    </Button>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.div
                      key={category}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="transition-all"
                      >
                        {category}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Pills (always visible) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 transition-all ${
                  selectedCategory === category
                    ? "shadow-lg shadow-primary/25"
                    : ""
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          layout
          className={`grid grid-cols-2 gap-6 ${
            gridCols === 3 ? "md:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              該当する商品が見つかりませんでした
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSelectedCategory("すべて")}
            >
              すべての商品を見る
            </Button>
          </motion.div>
        )}

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="px-8">
            もっと見る
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
