"use client";
import { useState } from "react";
import { ShoppingBag, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#1e40af] text-white shadow-2xl sticky top-0 z-50 text-white shadow-lg bg-linear-65 from-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 3. الأيقونات */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 hover:bg-white/10 rounded-full transition-all">
              <User size={22} />
            </button>
            <button className="relative p-2 hover:bg-white/10 rounded-full transition-all">
              <ShoppingBag size={22} />
              <span className="absolute top-1 right-1 bg-cyan-500 text-blue-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* زر المنيو للموبايل */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 2. الروابط (تظهر في الشاشات الكبيرة) - أصبحت هنا مكان البحث */}
          <div className="hidden md:flex justify-center gap-8">
            {["كل المنتجات", "موبايلات", "لابتوب", "اكسسوارات"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-bold text-white hover:text-cyan-400 transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 1. اللوجو */}
          <div className="text-2xl font-black tracking-tighter flex-shrink-0 cursor-pointer">
            Kenz <span className="text-cyan-400"> </span>
            {/* <img src="img/logo.png" alt="" width={80} /> */}
          </div>
        </div>
      </div>

      {/* 4. القائمة الجانبية للموبايل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-blue-950/95 overflow-hidden"
          >
            <div className="p-6 space-y-4 text-center">
              {["كل المنتجات", "موبايلات", "لابتوب", "اكسسوارات"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-lg font-bold border-b border-white/10 pb-2 hover:text-cyan-400"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
