import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import ProductCard from '../components/features/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return <div className="py-24 text-center"><p className="text-zinc-500">商品が見つかりません</p></div>;
  }

  const related = products.filter((p) => p.id !== id && p.category === product.category).slice(0, 4);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <PageTransition>
    <div className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> 商品一覧
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl h-80 flex items-center justify-center text-8xl">
            {product.image}
          </div>
          <div>
            <p className="text-xs text-zinc-500 mb-1">{product.category}</p>
            <h1 className="text-2xl font-bold text-foreground mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm text-zinc-400">{product.rating} ({product.reviews}件のレビュー)</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">¥{product.price.toLocaleString()}</span>
              {product.originalPrice && <span className="text-lg text-zinc-500 line-through">¥{product.originalPrice.toLocaleString()}</span>}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">{product.description}</p>
            {product.sizes.length > 0 && (
              <div className="mb-4">
                <label className="text-sm text-zinc-300 block mb-2">サイズ</label>
                <div className="flex gap-2">
                  {product.sizes.map((s) => (
                    <button key={s} onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 rounded-lg text-sm border transition-colors ${selectedSize === s ? 'bg-accent-500/10 border-accent-500/50 text-accent-400' : 'border-zinc-700 text-zinc-400 hover:border-zinc-600'}`}
                    >{s}</button>
                  ))}
                </div>
              </div>
            )}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-sm text-zinc-300 block mb-2">カラー</label>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button key={c.name} onClick={() => setSelectedColor(c.name)} title={c.name}
                      className={`w-9 h-9 rounded-full border-2 transition-all ${selectedColor === c.name ? 'border-white scale-110' : 'border-zinc-700'}`}
                      style={{ backgroundColor: c.hex }} />
                  ))}
                </div>
              </div>
            )}
            <button onClick={handleAdd}
              className={`w-full py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
                added ? 'bg-emerald-600 text-on-accent' : 'bg-accent-600 hover:bg-accent-500 text-on-accent'
              }`}
            >
              {added ? <><Check className="w-5 h-5" /> カートに追加しました</> : <><ShoppingCart className="w-5 h-5" /> カートに追加</>}
            </button>
          </div>
        </motion.div>
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-foreground mb-6">関連商品</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
    </PageTransition>
  );
}
