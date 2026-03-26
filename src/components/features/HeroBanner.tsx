import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/10 via-transparent to-transparent" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center relative">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 text-accent-400 text-sm font-medium mb-6">春の新作コレクション</span>
        <h1 className="text-5xl font-black text-white mb-4">上質な暮らしを、<br />あなたの手に。</h1>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">厳選されたアイテムで、毎日をもっと豊かに。</p>
        <Link to="/products" className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">
          商品を見る <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
