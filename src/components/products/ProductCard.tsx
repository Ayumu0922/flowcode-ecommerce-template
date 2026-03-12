import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative aspect-square rounded-xl bg-muted overflow-hidden mb-4">
        {/* Product Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-8xl">
          {product.image}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.id <= 2 && <Badge variant="new">NEW</Badge>}
          {product.id === 3 && <Badge variant="sale">SALE</Badge>}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick Add Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Button
            className="w-full"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            カートに追加
          </Button>
        </motion.div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-medium mb-1 group-hover:underline cursor-pointer">
          {product.name}
        </h3>
        <p className="font-semibold">{formatPrice(product.price)}</p>
      </div>
    </motion.div>
  )
}
