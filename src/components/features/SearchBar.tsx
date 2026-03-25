import { Search } from 'lucide-react';

interface Props { value: string; onChange: (v: string) => void; }

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="商品を検索..."
        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50" />
    </div>
  );
}
