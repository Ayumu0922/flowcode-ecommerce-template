import { Instagram, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { label: "新着商品", href: "#" },
    { label: "ベストセラー", href: "#" },
    { label: "セール", href: "#" },
    { label: "全商品", href: "#" },
  ],
  help: [
    { label: "お問い合わせ", href: "#" },
    { label: "配送について", href: "#" },
    { label: "返品・交換", href: "#" },
    { label: "サイズガイド", href: "#" },
  ],
  company: [
    { label: "会社概要", href: "#" },
    { label: "採用情報", href: "#" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">FLOWSTORE</h3>
            <p className="text-sm text-muted-foreground mb-4">
              厳選されたアイテムで、あなたのスタイルを彩ります。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">ショップ</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">ヘルプ</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FLOWSTORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
