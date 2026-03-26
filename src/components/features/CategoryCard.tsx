import { Link } from 'react-router-dom';

interface Props { name: string; icon: string; count: number; }

export default function CategoryCard({ name, icon, count }: Props) {
  return (
    <Link to={`/products?category=${encodeURIComponent(name)}`}
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 text-center hover:border-zinc-700 transition-colors group"
    >
      <span className="text-3xl block mb-2">{icon}</span>
      <p className="text-sm font-semibold text-foreground group-hover:text-accent-400 transition-colors">{name}</p>
      <p className="text-xs text-zinc-500 mt-0.5">{count}アイテム</p>
    </Link>
  );
}
