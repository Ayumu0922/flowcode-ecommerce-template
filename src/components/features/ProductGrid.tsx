import type { Product } from '../../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) return <p className="text-center text-zinc-500 py-12">商品が見つかりません</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
    </div>
  );
}
