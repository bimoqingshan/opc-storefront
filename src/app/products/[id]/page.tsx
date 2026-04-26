'use client';

import { useState, useMemo } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { useCart } from '@/lib/cart';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = useMemo(() => products.find(p => p.id === id), [id]);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Product not found</h1>
          <Link href="/products" className="text-blue-600 hover:underline dark:text-blue-400">Back to products →</Link>
        </div>
      </div>
    );
  }

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Blue'];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-gray-900 dark:hover:text-white">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </nav>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            {product.originalPrice > product.price && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-500">{'★'.repeat(Math.round(product.rating))}</div>
              <span className="text-gray-500 dark:text-gray-400">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                        : 'border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-zinc-500'
                    }`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button key={color} onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                        : 'border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-zinc-500'
                    }`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} disabled={added}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
              }`}>
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>

            {/* Product Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-700 space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex justify-between">
                <span>SKU</span><span className="text-gray-900 dark:text-white">OPC-{product.id.toString().padStart(6, '0')}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span><span className="text-gray-900 dark:text-white">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(rp => (
                <Link key={rp.id} href={`/products/${rp.id}`} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100 dark:border-zinc-800">
                  <div className="relative aspect-[3/4]">
                    <Image src={rp.image} alt={rp.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white truncate">{rp.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-bold text-gray-900 dark:text-white">${rp.price}</span>
                      {rp.originalPrice > rp.price && (
                        <span className="text-sm text-gray-400 line-through">${rp.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
