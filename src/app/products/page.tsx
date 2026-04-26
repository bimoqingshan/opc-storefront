"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/lib/products";

export default function ProductsPage() {
  const [category, setCategory] = useState<string>("全部");
  const [sortBy, setSortBy] = useState<string>("default");

  const categories = ["全部", "女装", "男装"];

  const filteredProducts = useMemo(() => {
    let filtered = category === "全部" 
      ? [...products] 
      : products.filter(p => p.category === category);
    
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
  }, [category, sortBy]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      {/* Header Banner */}
      <div className="bg-zinc-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-2">全部商品</h1>
          <p className="text-zinc-400">共 {filteredProducts.length} 件商品</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === cat
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
                    : "bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white"
          >
            <option value="default">默认排序</option>
            <option value="price-low">价格: 低→高</option>
            <option value="price-high">价格: 高→低</option>
            <option value="rating">评分最高</option>
          </select>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-lg">该分类暂无商品</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white dark:bg-zinc-800 mb-3 shadow-sm">
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
                <h3 className="font-medium text-zinc-900 dark:text-white mb-1 truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-red-500">¥{product.price}</span>
                  <span className="text-sm text-zinc-400 line-through">¥{product.originalPrice}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{product.rating}</span>
                  <span className="text-sm text-zinc-400">({product.reviews})</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
