import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const saleProducts = products.filter(p => p.originalPrice > p.price * 1.5).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              跨境时尚<br />精选好物
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8">
              来自全球的优质服装，品质生活从这里开始
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-zinc-900 px-8 py-3 font-semibold hover:bg-zinc-100 transition-colors"
            >
              立即选购
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-zinc-900 dark:text-white">热门分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/products?category=女装" className="group relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop"
                alt="女装"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">女装</span>
              </div>
            </Link>
            <Link href="/products?category=男装" className="group relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=400&fit=crop"
                alt="男装"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">男装</span>
              </div>
            </Link>
            <Link href="/products" className="group relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop"
                alt="全部商品"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">全部商品</span>
              </div>
            </Link>
            <Link href="/products?sale=true" className="group relative aspect-square overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=400&fit=crop"
                alt="特价"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">特价</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">精选推荐</h2>
            <Link href="/products" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.originalPrice > product.price * 1.5 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      特价
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-500">¥{product.price}</span>
                  <span className="text-sm text-zinc-400 line-through">¥{product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{product.rating}</span>
                  <span className="text-sm text-zinc-400">({product.reviews})</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">限时特价</h2>
            <Link href="/products?sale=true" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              更多优惠 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {saleProducts.map(product => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <h3 className="font-medium text-zinc-900 dark:text-white mb-1 truncate">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-red-500">¥{product.price}</span>
                  <span className="text-sm text-zinc-400 line-through">¥{product.originalPrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">新用户专享优惠</h2>
          <p className="text-zinc-300 mb-6">首次下单立减 ¥20，全场包邮</p>
          <Link
            href="/products"
            className="inline-block bg-white text-zinc-900 px-8 py-3 font-semibold hover:bg-zinc-100 transition-colors"
          >
            立即领取
          </Link>
        </div>
      </section>
    </div>
  );
}
