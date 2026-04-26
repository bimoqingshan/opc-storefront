'use client';

import { useCart } from '@/lib/cart';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your cart is empty</h1>
          <Link href="/products" className="text-blue-600 hover:underline dark:text-blue-400">
            Browse products →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Shopping Cart</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
              <div className="w-24 h-24 bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Size: {item.size} | Color: {item.color}</p>
                <p className="font-bold mt-1 text-gray-900 dark:text-white">${item.product.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                  className="w-8 h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white transition"
                >
                  −
                </button>
                <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                  className="w-8 h-8 bg-gray-100 dark:bg-zinc-800 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-900 dark:text-white transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.product.id, item.size, item.color)}
                  className="w-8 h-8 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
          <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-400">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-600 dark:text-gray-400">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl text-gray-900 dark:text-white border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full mt-6 bg-black dark:bg-white text-white dark:text-black text-center py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
