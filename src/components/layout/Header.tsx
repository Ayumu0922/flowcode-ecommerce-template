import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/products', label: '商品一覧' },
];

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-rose-500" />
          <span className="text-lg font-bold text-white">ShopMall</span>
        </NavLink>
        <nav className="flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-rose-400 bg-rose-500/10' : 'text-zinc-400 hover:text-white'}`
            }>{label}</NavLink>
          ))}
          <Link to="/cart" className="relative ml-2 p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
