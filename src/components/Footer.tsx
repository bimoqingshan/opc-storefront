import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">OPC Store</h3>
            <p className="text-sm">跨境时尚电商精选，品质生活从这里开始。</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">首页</Link></li>
              <li><Link href="/products" className="hover:text-white">全部商品</Link></li>
              <li><Link href="/cart" className="hover:text-white">购物车</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">分类</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=女装" className="hover:text-white">女装</Link></li>
              <li><Link href="/products?category=男装" className="hover:text-white">男装</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">客户服务</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white cursor-pointer">联系我们</span></li>
              <li><span className="hover:text-white cursor-pointer">配送说明</span></li>
              <li><span className="hover:text-white cursor-pointer">退换政策</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-sm text-center">
          <p>© 2024 OPC Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
