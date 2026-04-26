'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredProducts = [
    { id: 1, name: 'Basic Essential Sweaters', price: 29.99, originalPrice: 49.99, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80', category: '女装' },
    { id: 2, name: 'Vintage Denim Jackets', price: 89.99, originalPrice: 129.99, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', category: '男装' },
    { id: 3, name: 'Summer Floral Dresses', price: 39.99, originalPrice: 59.99, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80', category: '女装' },
    { id: 4, name: 'Casual Slim Fit Pants', price: 34.99, originalPrice: 54.99, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80', category: '男装' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black dark:bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              跨境时尚<br />品质生活
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              精选全球时尚单品，工厂直发，价格超值
            </p>
            <div className="flex gap-4">
              <Link href="/products" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                立即选购
              </Link>
              <Link href="/products?category=女装" className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                女装专区
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">热门分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: '女装', icon: '👗', desc: '连衣裙、上衣、外套' },
              { name: '男装', icon: '👔', desc: 'T恤、衬衫、裤装' },
              { name: '配饰', icon: '👜', desc: '包包、首饰、围巾' },
              { name: '运动', icon: '🏃', desc: '运动服、健身装备' },
            ].map(cat => (
              <Link key={cat.name} href={`/products?category=${cat.name}`}
                className="group bg-gray-50 dark:bg-zinc-800 rounded-2xl p-6 hover:shadow-lg transition border border-gray-100 dark:border-zinc-700">
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">精选推荐</h2>
            <Link href="/products" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <Link key={product.id} href={`/products/${product.id}`}
                className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100 dark:border-zinc-800">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  {product.originalPrice > product.price && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white truncate mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">新用户首单立减$10</h2>
          <p className="text-lg opacity-90 mb-6">使用优惠码 WELCOME10 结账时自动抵扣</p>
          <Link href="/products" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            立即开始购物
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✈️', title: '全球包邮', desc: '订单满$50即享免费国际配送' },
              { icon: '🔒', title: '安全支付', desc: 'PayPal/信用卡，多种支付方式' },
              { icon: '↩️', title: '轻松退货', desc: '15天无理由退货保障' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
