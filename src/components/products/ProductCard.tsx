import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, ShoppingBag, Eye, Star, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore, type Product } from "@/store/cart"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product)
    setTimeout(() => setIsAdding(false), 600)
  }

  const rating = 4 + Math.random()
  const reviews = Math.floor(50 + Math.random() * 200)
  const originalPrice = product.id === 3 ? Math.floor(product.price * 1.3) : null

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        className="group"
      >
        <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden mb-4 product-image-container">
          {/* Product Image Placeholder with animation */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-8xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {product.image}
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.id <= 2 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.1 }}
              >
                <Badge variant="new" className="flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  NEW
                </Badge>
              </motion.div>
            )}
            {product.id === 3 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: index * 0.1 }}
              >
                <Badge variant="sale" className="sale-badge">
                  -30%
                </Badge>
              </motion.div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Button
                variant="secondary"
                size="icon"
                className="backdrop-blur-sm bg-white/80 dark:bg-black/80 shadow-lg hover:scale-110 transition-transform"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart
                  className={`h-4 w-4 transition-colors ${
                    isWishlisted ? "fill-red-500 text-red-500" : ""
                  }`}
                />
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Button
                variant="secondary"
                size="icon"
                className="backdrop-blur-sm bg-white/80 dark:bg-black/80 shadow-lg hover:scale-110 transition-transform"
                onClick={() => setShowQuickView(true)}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Quick Add Button */}
          <motion.div
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          >
            <Button
              className={`w-full backdrop-blur-sm shadow-lg transition-all duration-300 ${
                isAdding ? "bg-green-500 hover:bg-green-500" : ""
              }`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              <AnimatePresence mode="wait">
                {isAdding ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    追加しました！
                  </motion.div>
                ) : (
                  <motion.div
                    key="add"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="flex items-center"
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    カートに追加
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="font-medium group-hover:text-primary cursor-pointer transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-3 w-3 ${
                    star <= Math.round(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg">{formatPrice(product.price)}</p>
            {originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {showQuickView && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setShowQuickView(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-muted flex items-center justify-center text-[120px]">
                  {product.image}
                </div>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {reviews} reviews
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-1">
                    高品質な素材を使用した、長く愛用できる一着です。シンプルなデザインでどんなスタイルにも合わせやすい万能アイテム。
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <p className="text-3xl font-bold">{formatPrice(product.price)}</p>
                    {originalPrice && (
                      <p className="text-lg text-muted-foreground line-through">
                        {formatPrice(originalPrice)}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1" onClick={handleAddToCart}>
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      カートに追加
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isWishlisted ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
