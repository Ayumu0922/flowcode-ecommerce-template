import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, Menu, X, Sun, Moon, Download, Upload } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useTheme } from '../../hooks/useTheme';
import { useToast } from '../ui/Toast';
import ThemeColorPicker from '../ui/ThemeColorPicker';
import { useRef } from 'react';

const links = [
  { to: '/', label: 'ホーム' },
  { to: '/products', label: '商品一覧' },
];

export default function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = localStorage.getItem('cart-storage');
    if (!data) { showToast('エクスポートするデータがありません', 'warning'); return; }
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cart-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('データをエクスポートしました', 'success');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        JSON.parse(ev.target?.result as string);
        localStorage.setItem('cart-storage', ev.target?.result as string);
        showToast('データをインポートしました。リロードします...', 'success');
        setTimeout(() => window.location.reload(), 1000);
      } catch { showToast('無効なファイル形式です', 'error'); }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <header data-fc-id="Header-root" className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-accent-500" />
          <span className="text-lg font-bold text-white">ShopMall</span>
        </NavLink>
        <nav data-fc-id="Header-nav-desktop" className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-white'}`
            }>{label}</NavLink>
          ))}
          <button onClick={handleExport} className="p-2 text-zinc-400 hover:text-white transition-colors" title="エクスポート">
            <Download className="w-4 h-4" />
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="p-2 text-zinc-400 hover:text-white transition-colors" title="インポート">
            <Upload className="w-4 h-4" />
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
          <ThemeColorPicker />
          <button onClick={toggleTheme} className="p-2 text-zinc-400 hover:text-white transition-colors" title="テーマ切替">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/cart" className="relative ml-2 p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-[#fff] text-[10px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/cart" className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-600 text-[#fff] text-[10px] font-bold rounded-full flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-zinc-400 hover:text-white">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div data-fc-id="Header-mobile-menu" className="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-accent-400 bg-accent-500/10' : 'text-zinc-400 hover:text-white'}`
            }>{label}</NavLink>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/50">
            <button onClick={() => { handleExport(); setMenuOpen(false); }} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white">
              <Download className="w-4 h-4" /> エクスポート
            </button>
            <button onClick={() => { fileInputRef.current?.click(); }} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white">
              <Upload className="w-4 h-4" /> インポート
            </button>
          </div>
          <ThemeColorPicker />
          <button onClick={() => { toggleTheme(); setMenuOpen(false); }} className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-400 hover:text-white">
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === 'dark' ? 'ライトモード' : 'ダークモード'}
          </button>
        </div>
      )}
    </header>
  );
}
