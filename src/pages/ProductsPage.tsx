import { useState } from 'react';
import PageTransition from '../components/ui/PageTransition';
import { products } from '../data/products';
import ProductGrid from '../components/features/ProductGrid';
import SearchBar from '../components/features/SearchBar';
import FilterSidebar from '../components/features/FilterSidebar';

export default function ProductsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('default');

  let filtered = products
    .filter((p) => !category || p.category === category)
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <PageTransition>
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">商品一覧</h1>
        <div className="mb-6"><SearchBar value={search} onChange={setSearch} /></div>
        <div className="flex gap-8">
          <FilterSidebar selectedCategory={category} onCategoryChange={setCategory} sortBy={sortBy} onSortChange={setSortBy} />
          <div className="flex-1"><ProductGrid products={filtered} /></div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
