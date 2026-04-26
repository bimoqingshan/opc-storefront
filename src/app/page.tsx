import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/10 rounded-full">
              新品上市
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              发现你的<br />时尚风格
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              精选全球时尚单品，品质生活从这里开始。跨境直邮，送货上门。
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                立即选购
              </Link>
              <Link
                href="/products?category=Tops"
                className="px-8 py-3 border border-white/30 font-semibold rounded-lg hover:bg-white/10 transition"
              >
                浏览分类
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">热门分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "上衣", icon: "👕", href: "/products?category=Tops" },
              { name: "裤装", icon: "👖", href: "/products?category=Bottoms" },
              { name: "连衣裙", icon: "👗", href: "/products?category=Dresses" },
              { name: "配饰", icon: "👜", href: "/products?category=Accessories" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="flex flex-col items-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition hover:scale-105"
              >
                <span className="text-4xl mb-3">{cat.icon}</span>
                <span className="font-medium text-gray-800">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">精选推荐</h2>
            <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-black">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-black">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-white/10 rounded-full">
                本周新品
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">春夏新品系列</h2>
              <p className="text-gray-400 mb-6">
                轻盈面料，舒适剪裁。这个夏天，定义你的时尚态度。
              </p>
              <Link
                href="/products"
                className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                探索新品
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {newArrivals.slice(0, 2).map((product) => (
                <div key={product.id} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "🚚", title: "全球直邮", desc: "覆盖200+国家和地区" },
              { icon: "🔒", title: "安全支付", desc: "支持多种支付方式" },
              { icon: "↩️", title: "轻松退货", desc: "30天无理由退货" },
            ].map((prop) => (
              <div key={prop.title} className="p-6">
                <span className="text-4xl mb-4 block">{prop.icon}</span>
                <h3 className="font-semibold mb-2">{prop.title}</h3>
                <p className="text-gray-500 text-sm">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
