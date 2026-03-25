import HeroBanner from '../components/features/HeroBanner';
import ProductCard from '../components/features/ProductCard';
import CategoryCard from '../components/features/CategoryCard';
import { products } from '../data/products';
import { categoryShowcase } from '../data/categories';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featured = products.filter((p) => p.badge);

  return (
    <>
      <HeroBanner />
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">カテゴリ</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {categoryShowcase.map((c) => <CategoryCard key={c.name} {...c} />)}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">注目アイテム</h2>
            <Link to="/products" className="text-sm text-rose-400 hover:text-rose-300 flex items-center gap-1">すべて見る <ArrowRight className="w-3.5 h-3.5" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
