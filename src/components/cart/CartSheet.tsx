import { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/cart"
import { formatPrice } from "@/lib/utils"

interface CartSheetProps {
  children: ReactNode
}

export function CartSheet({ children }: CartSheetProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore()

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            カート ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">カートは空です</p>
            <p className="text-sm text-muted-foreground mt-1">
              商品を追加してください
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-3 rounded-lg bg-accent/50"
                  >
                    <div className="w-20 h-20 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                      <div className="text-4xl">{item.image}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">合計</span>
                <span className="text-xl font-bold">{formatPrice(totalPrice())}</span>
              </div>
              <Button className="w-full" size="lg">
                レジに進む
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                カートを空にする
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
