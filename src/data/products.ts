export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  { id: '1', name: 'ミニマルバックパック', price: 12800, description: '耐水素材を使用した軽量バックパック。ノートPC収納ポケット付き。通勤・通学に最適なシンプルデザイン。', category: 'バッグ', sizes: ['S', 'M', 'L'], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'ネイビー', hex: '#1e3a5f' }], rating: 4.8, reviews: 124, image: '🎒', badge: '人気' },
  { id: '2', name: 'ワイヤレスヘッドホン', price: 24800, originalPrice: 29800, description: 'アクティブノイズキャンセリング搭載。40時間連続再生。快適な装着感で長時間のリスニングに最適。', category: 'オーディオ', sizes: [], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'シルバー', hex: '#c0c0c0' }, { name: 'ホワイト', hex: '#f5f5f5' }], rating: 4.6, reviews: 89, image: '🎧', badge: 'セール' },
  { id: '3', name: 'レザーウォレット', price: 8900, description: '本革使用のコンパクトウォレット。RFID防止機能付き。カード6枚、紙幣、小銭入れ収納可能。', category: 'アクセサリー', sizes: [], colors: [{ name: 'ブラウン', hex: '#8B4513' }, { name: 'ブラック', hex: '#1a1a1a' }], rating: 4.9, reviews: 203, image: '👛' },
  { id: '4', name: 'スマートウォッチ', price: 34800, description: '健康管理機能搭載。心拍数、血中酸素、睡眠トラッキング。5ATM防水。', category: 'ウェアラブル', sizes: ['40mm', '44mm'], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'シルバー', hex: '#c0c0c0' }, { name: 'ゴールド', hex: '#FFD700' }], rating: 4.5, reviews: 167, image: '⌚', badge: '新着' },
  { id: '5', name: 'デスクライト', price: 6800, description: '5段階調光・3色温度調整。目に優しいLED。USB充電ポート搭載。', category: 'インテリア', sizes: [], colors: [{ name: 'ホワイト', hex: '#f5f5f5' }, { name: 'ブラック', hex: '#1a1a1a' }], rating: 4.7, reviews: 56, image: '💡' },
  { id: '6', name: 'メカニカルキーボード', price: 15800, description: 'Cherry MXスイッチ搭載。RGBバックライト。プログラマブルキー対応。', category: 'PC周辺機器', sizes: ['65%', 'TKL', 'フルサイズ'], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'ホワイト', hex: '#f5f5f5' }], rating: 4.8, reviews: 312, image: '⌨️', badge: '人気' },
  { id: '7', name: 'コーヒータンブラー', price: 3400, description: '真空断熱構造で6時間保温。漏れ防止設計。480ml容量。', category: 'キッチン', sizes: ['350ml', '480ml'], colors: [{ name: 'マットブラック', hex: '#2d2d2d' }, { name: 'オリーブ', hex: '#556B2F' }, { name: 'ネイビー', hex: '#1e3a5f' }], rating: 4.4, reviews: 78, image: '☕' },
  { id: '8', name: 'ヨガマット', price: 4200, description: '厚さ6mm。滑り止め加工。軽量で持ち運びやすいキャリーストラップ付き。', category: 'フィットネス', sizes: [], colors: [{ name: 'パープル', hex: '#6B21A8' }, { name: 'ピンク', hex: '#EC4899' }, { name: 'グレー', hex: '#6B7280' }], rating: 4.3, reviews: 45, image: '🧘' },
  { id: '9', name: 'ポータブル充電器', price: 5800, description: '20000mAh大容量。USB-C/A対応。2台同時充電可能。急速充電対応。', category: 'PC周辺機器', sizes: [], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'ホワイト', hex: '#f5f5f5' }], rating: 4.6, reviews: 198, image: '🔋' },
  { id: '10', name: 'ランニングシューズ', price: 13200, originalPrice: 16500, description: '軽量クッション搭載。通気性メッシュアッパー。初心者からベテランまで対応。', category: 'フィットネス', sizes: ['24.0', '25.0', '26.0', '27.0', '28.0'], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'ブルー', hex: '#2563EB' }, { name: 'レッド', hex: '#DC2626' }], rating: 4.7, reviews: 256, image: '👟', badge: 'セール' },
  { id: '11', name: 'ノートブック5冊セット', price: 2400, description: 'A5サイズ。ドット方眼。80ページ。上質紙使用。バレットジャーナルに最適。', category: 'アクセサリー', sizes: ['A5', 'B5'], colors: [{ name: 'アソート', hex: '#6B7280' }], rating: 4.5, reviews: 92, image: '📓' },
  { id: '12', name: 'Bluetoothスピーカー', price: 9800, description: 'IPX7防水。12時間連続再生。コンパクトながらパワフルなサウンド。', category: 'オーディオ', sizes: [], colors: [{ name: 'ブラック', hex: '#1a1a1a' }, { name: 'ティール', hex: '#0D9488' }, { name: 'オレンジ', hex: '#EA580C' }], rating: 4.4, reviews: 134, image: '🔊' },
];

export const productCategories = [...new Set(products.map((p) => p.category))];
