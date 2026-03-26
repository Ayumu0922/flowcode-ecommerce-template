import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useTheme, accentColors } from '../../hooks/useTheme';
import SettingsDropdown from '../ui/SettingsDropdown';

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/products', label: '商品一覧' },
];

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();

  return (
    <header data-fc-id="Header-root" className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-accent-500" />
          <span className="text-lg font-bold text-foreground">ShopMall</span>
        </NavLink>
        <nav data-fc-id="Header-nav-desktop" className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-foreground'}`
            }>{label}</NavLink>
          ))}
          <SettingsDropdown storageKey="cart-storage" exportFileName="cart-data" />
          <Link to="/cart" className="relative ml-1 p-2 text-zinc-400 hover:text-foreground transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-on-accent text-[10px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/cart" className="relative p-2 text-zinc-400 hover:text-foreground transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-on-accent text-[10px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-zinc-400 hover:text-foreground">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div data-fc-id="Header-mobile-menu" className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-foreground'}`
            }>{label}</NavLink>
          ))}
          <div className="pt-2 border-t border-zinc-800/50 space-y-3">
            <div>
              <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2 px-4">カラー</p>
              <div className="flex flex-wrap gap-1.5 px-4">
                {accentColors.map((c) => (
                  <button key={c.name} onClick={() => setAccentColor(c.name)} title={c.label}
                    className={`w-5 h-5 rounded-full transition-all ${accentColor === c.name ? 'ring-2 ring-offset-1 ring-offset-zinc-900 ring-foreground scale-110' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                    style={{ backgroundColor: c.swatch }} />
                ))}
              </div>
            </div>
            <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-foreground w-full">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
