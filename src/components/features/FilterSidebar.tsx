import { productCategories } from '../../data/products';

interface Props {
  selectedCategory: string | null;
  onCategoryChange: (c: string | null) => void;
  sortBy: string;
  onSortChange: (s: string) => void;
}

export default function FilterSidebar({ selectedCategory, onCategoryChange, sortBy, onSortChange }: Props) {
  return (
    <div className="w-56 shrink-0 space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">カテゴリ</h3>
        <div className="space-y-1">
          <button onClick={() => onCategoryChange(null)}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory ? 'bg-accent-500/10 text-accent-400' : 'text-zinc-400 hover:text-foreground'}`}
          >すべて</button>
          {productCategories.map((c) => (
            <button key={c} onClick={() => onCategoryChange(c)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === c ? 'bg-accent-500/10 text-accent-400' : 'text-zinc-400 hover:text-foreground'}`}
            >{c}</button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-3">並び替え</h3>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-500/50"
        >
          <option value="default">おすすめ</option>
          <option value="price-asc">価格: 安い順</option>
          <option value="price-desc">価格: 高い順</option>
          <option value="rating">評価順</option>
        </select>
      </div>
    </div>
  );
}
