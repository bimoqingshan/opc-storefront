"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getProductById, products } from "@/lib/products";
import { useCart } from "@/lib/cart";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  
  const product = getProductById(params.id as string);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">商品未找到</h1>
          <button 
            onClick={() => router.push("/products")}
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            返回商品列表
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("请选择尺码和颜色");
      return;
    }
    addItem(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-black">首页</a>
          <span className="mx-2">/</span>
          <a href="/products" className="hover:text-black">商品列表</a>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-4">
              <Image
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === idx ? "border-black" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-400 ml-1">({product.reviews} reviews)</span>
              </div>
              {product.inStock && (
                <span className="text-green-600 text-sm">有货</span>
              )}
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
              <span className="text-red-500 font-medium">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">颜色: {selectedColor || "请选择"}</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition ${
                      selectedColor === color 
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-medium mb-3">尺码: {selectedSize || "请选择"}</h3>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition ${
                      selectedSize === size 
                        ? "border-black bg-black text-white" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition ${
                added 
                  ? "bg-green-500 text-white" 
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {added ? "✓ 已加入购物车" : "加入购物车"}
            </button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
              {[
                { icon: "🚚", text: "全球直邮" },
                { icon: "🔒", text: "安全支付" },
                { icon: "↩️", text: "30天退货" },
              ].map(f => (
                <div key={f.text} className="text-center">
                  <span className="text-2xl">{f.icon}</span>
                  <p className="text-xs text-gray-500 mt-1">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-6">同类推荐</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <a
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate">{p.name}</h3>
                    <span className="font-bold">${p.price}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
