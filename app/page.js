'use client';

import { useState } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { emoji: '👕', name: 'ファッション', count: '234 items' },
    { emoji: '💻', name: '電子機器', count: '156 items' },
    { emoji: '🏠', name: 'ホーム', count: '98 items' },
    { emoji: '🎮', name: 'ゲーム', count: '67 items' },
  ];

  const products = [
    { emoji: '👟', name: 'スニーカー', price: '¥12,800' },
    { emoji: '⌚', name: 'スマートウォッチ', price: '¥34,800' },
    { emoji: '🎧', name: 'ワイヤレスイヤホン', price: '¥19,800' },
    { emoji: '👜', name: 'レザーバッグ', price: '¥28,500' },
    { emoji: '📱', name: 'スマホケース', price: '¥2,980' },
    { emoji: '🕶️', name: 'サングラス', price: '¥8,900' },
    { emoji: '🧢', name: 'キャップ', price: '¥4,500' },
    { emoji: '💍', name: 'アクセサリー', price: '¥6,800' },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <header className="header">
        <div className="logo">🛍️ Store</div>
        <nav className="nav">
          <a href="#">ホーム</a>
          <a href="#">商品</a>
          <a href="#">カテゴリ</a>
          <a href="#">セール</a>
        </nav>
        <div className="header-actions">
          <span>🔍</span>
          <span className="cart-btn">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </span>
        </div>
      </header>

      <section className="hero">
        <h1>新生活応援セール</h1>
        <p>人気アイテムが最大50%OFF</p>
        <a href="#" className="hero-btn">今すぐチェック</a>
      </section>

      <section className="categories">
        <h2 className="section-title">カテゴリ</h2>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <div className="emoji">{cat.emoji}</div>
              <h3>{cat.name}</h3>
              <p>{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products">
        <h2 className="section-title">人気商品</h2>
        <div className="product-grid">
          {products.map((product, i) => (
            <div key={i} className="product-card">
              <div className="product-image">{product.emoji}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">{product.price}</div>
                <button className="add-to-cart" onClick={addToCart}>
                  カートに追加
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>🛍️ Store</h4>
            <p>高品質な商品を<br />お手頃価格で</p>
          </div>
          <div>
            <h4>ショップ</h4>
            <a href="#">すべての商品</a><br />
            <a href="#">新着</a><br />
            <a href="#">セール</a>
          </div>
          <div>
            <h4>サポート</h4>
            <a href="#">お問い合わせ</a><br />
            <a href="#">よくある質問</a><br />
            <a href="#">返品について</a>
          </div>
          <div>
            <h4>SNS</h4>
            <a href="#">Twitter</a><br />
            <a href="#">Instagram</a><br />
            <a href="#">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2024 Store. All rights reserved.
        </div>
      </footer>
    </>
  );
}
