// components/ProductCard.jsx

export default function ProductCard({ name, price, image }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:border-gray-200">
      <div className="bg-[#f9f9f9] aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-contain w-48 h-48 group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <h3 className="font-medium text-gray-900 text-sm mb-1">{name}</h3>
      <p className="text-gray-400 text-xs mb-3">Premium Quality</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-900">${price}</span>
        <button className="bg-black text-white px-5 py-2 rounded-lg text-xs font-medium hover:bg-gray-800 active:scale-95 transition-all">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}