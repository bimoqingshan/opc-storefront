'use client';

import { useCart } from '@/lib/cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <Link href="/products" className="text-blue-600 hover:underline">
              Browse products →
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4 bg-white p-4 rounded-lg shadow">
              <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover rounded" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-500">Size: {item.size} | Color: {item.color}</p>
                <p className="font-bold mt-1">${item.product.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.product.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  −
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.product.id, item.size, item.color)}
                  className="px-2 py-1 text-red-500 hover:bg-red-50 rounded"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-xl border-t pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="block w-full mt-6 bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
