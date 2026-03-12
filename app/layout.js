import './globals.css';

export const metadata = {
  title: 'E-Commerce Store',
  description: 'モダンなECサイトテンプレート',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
