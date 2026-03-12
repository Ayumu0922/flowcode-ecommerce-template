import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              新コレクション 2024
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              シンプルで
              <br />
              タイムレスな
              <br />
              スタイル
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              厳選された素材と職人技が生み出す、
              毎日を特別にするアイテムをお届けします。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
                コレクションを見る
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                今季のおすすめ
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-[200px]"
              >
                🛍️
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border"
            >
              <p className="text-sm text-muted-foreground">今週の売上</p>
              <p className="text-2xl font-bold">+247件</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg border"
            >
              <p className="text-sm text-muted-foreground">送料無料</p>
              <p className="text-lg font-bold">¥10,000以上</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
