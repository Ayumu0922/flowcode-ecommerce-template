import { Link } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import EmptyState from '../components/ui/EmptyState';
import { useCartStore } from '../store/cartStore';
import CartItem from '../components/features/CartItem';
import { useToast } from '../components/ui/Toast';
import { useConfirm } from '../components/ui/ConfirmDialog';

export default function CartPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const { showToast } = useToast();
  const { confirm } = useConfirm();

  const handleClearCart = async () => {
    const ok = await confirm({ title: 'カートを空にする', message: 'カートの商品をすべて削除しますか？', confirmLabel: '削除', variant: 'danger' });
    if (!ok) return;
    clearCart();
    showToast('カートを空にしました', 'success');
  };

  if (items.length === 0) {
    return (
      <PageTransition>
      <EmptyState icon={ShoppingCart} title="カートは空です" description="商品を追加してお買い物を始めましょう" action={<Link to="/products" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white text-sm font-medium rounded-lg transition-colors">商品を見る</Link>} />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-6">
          <ArrowLeft className="w-4 h-4" /> 買い物を続ける
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6">カート ({items.length}アイテム)</h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 mb-6">
          {items.map((item) => <CartItem key={item.productId} item={item} />)}
        </motion.div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">小計</span>
            <span className="text-white">¥{totalPrice().toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">配送料</span>
            <span className="text-white">{totalPrice() >= 5000 ? '無料' : '¥500'}</span>
          </div>
          <div className="border-t border-zinc-800 pt-3 flex justify-between">
            <span className="text-base font-semibold text-white">合計</span>
            <span className="text-xl font-bold text-white">¥{(totalPrice() + (totalPrice() >= 5000 ? 0 : 500)).toLocaleString()}</span>
          </div>
          <button className="w-full bg-accent-600 hover:bg-accent-500 text-white py-3.5 rounded-xl font-semibold transition-colors mt-2">
            レジに進む
          </button>
          <button onClick={handleClearCart} className="w-full text-sm text-zinc-500 hover:text-zinc-300 py-2 transition-colors">
            カートを空にする
          </button>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
