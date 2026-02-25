"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import { ShoppingBag } from "lucide-react";
import { products } from "./ProductData";
import Swiper from "./SwipereSction";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // تصفية المنتجات حسب التصنيف فقط
  const filteredProducts = selectedCategory === "الكل" 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white font-sans" dir="rtl">
      <Navbar /> 
      <Swiper />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-8 border-r-4 border-cyan-500 pr-4">
          أحدث المنتجات
        </h2>
{/* text-white shadow-lg bg-linear-65 from-purple-500 to-pink-500 */}
        {/* أزرار الفلترة - هي اللي العميل هيكتشف بيها المنتجات */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 ">
          {["الكل", "حذاء رجالي", "حذاء حريمي", "شباشب"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === cat 
                  ? "bg-purple-500 text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* شبكة المنتجات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 md:h-52 w-full rounded-xl overflow-hidden mb-4 ">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-grow text-right mb-4">
                <h3 className="font-bold text-black text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <span className="text-[#1e3a8a] text-xl font-black block mb-4">{product.price} جنيه</span>
                <a href={`https://wa.me/201069540646?text=${encodeURIComponent(`أهلاً، أريد طلب: ${product.name},${product.image},${product.price}`)}`} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg active:scale-95 transition-all">
                    <ShoppingBag size={18} /> اطلب الآن
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}