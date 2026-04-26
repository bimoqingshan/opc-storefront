'use client';

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useTheme } from "@/lib/theme";
import { ShoppingCart, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
            OPC Store
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              首页
            </Link>
            <Link href="/products" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              全部商品
            </Link>
            <Link href="/products?category=女装" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              女装
            </Link>
            <Link href="/products?category=男装" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              男装
            </Link>
          </div>

          {/* Cart & Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Cart */}
            <Link href="/cart" className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                首页
              </Link>
              <Link href="/products" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                全部商品
              </Link>
              <Link href="/products?category=女装" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                女装
              </Link>
              <Link href="/products?category=男装" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                男装
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
