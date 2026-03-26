import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '../../data/products';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
      <Link to={`/products/${product.id}`} className="block bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors group">
        <div className="relative h-48 bg-zinc-800/50 flex items-center justify-center text-5xl">
          {product.image}
          {product.badge && (
            <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
              product.badge === 'セール' ? 'bg-red-500 text-on-accent' : product.badge === '新着' ? 'bg-blue-500 text-on-accent' : 'bg-amber-500 text-black'
            }`}>{product.badge}</span>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs text-zinc-500 mb-1">{product.category}</p>
          <h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent-400 transition-colors">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs text-zinc-400">{product.rating} ({product.reviews})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-foreground">¥{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through">¥{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
