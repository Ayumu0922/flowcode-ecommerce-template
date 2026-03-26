import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore, type CartItem as CartItemType } from '../../store/cartStore';
import { useToast } from '../../components/ui/Toast';
import { useConfirm } from '../../components/ui/ConfirmDialog';

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore();
  const { showToast } = useToast();
  const { confirm } = useConfirm();

  const handleRemove = async () => {
    const ok = await confirm({ title: '商品を削除', message: 'この商品をカートから削除しますか？', confirmLabel: '削除', variant: 'danger' });
    if (!ok) return;
    removeItem(item.productId);
    showToast('商品を削除しました', 'success');
  };

  return (
    <div className="flex items-center gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
      <div className="w-16 h-16 bg-zinc-800/50 rounded-lg flex items-center justify-center text-3xl shrink-0">
        {item.image}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-white truncate">{item.name}</h3>
        <div className="flex items-center gap-2 text-xs text-zinc-500 mt-0.5">
          {item.size && <span>サイズ: {item.size}</span>}
          {item.color && <span>カラー: {item.color}</span>}
        </div>
        <p className="text-sm font-bold text-white mt-1">¥{item.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)}
          className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white">
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="w-8 text-center text-sm text-white">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}
          className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-white">¥{(item.price * item.quantity).toLocaleString()}</p>
        <button onClick={handleRemove} className="text-zinc-500 hover:text-red-400 mt-1">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
