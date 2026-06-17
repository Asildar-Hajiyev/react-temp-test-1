import { Link } from "react-router-dom";
import Search from "./components/Search/Search";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Header() {
  const [open, setOpen] = useState(false);
  return (
   <div>
  <nav className="w-full bg-white border-b border-slate-300 min-h-[68px] z-20 flex items-center py-3 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 w-full">
      
      {/* ÜST SƏTİR (Mobildə hər şey yan-yana düzgün qalır) */}
      <div className="flex items-center justify-between w-full md:w-auto gap-4 flex-1">
        
        {/* SOL: Burger və Loqo */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1 shrink-0"
          >
            <HiBars3 className="text-2xl" />
          </button>
          
          <Link to="/" className="text-xl sm:text-2xl text-blue-400 font-semibold truncate whitespace-nowrap">
            Brend To Ecommerce
          </Link>
        </div>

        {/* SAĞ: İkonlar (Mobildə bura gəlir ki, loqo ilə eyni sətirdə olsun) */}
        <div className="flex items-center gap-4 shrink-0 md:hidden">
          <div className="flex flex-col items-center justify-center cursor-pointer text-slate-900 hover:text-blue-700">
            <div className="relative">
              <CiHeart className="text-2xl" />
              <span className="absolute -top-1 -right-1.5 rounded-full bg-red-500 px-1 text-[10px] text-white font-medium">2</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center cursor-pointer text-slate-900 hover:text-blue-700">
            <div className="relative">
              <CiShoppingCart className="text-2xl" />
              <span className="absolute -top-1 -right-1.5 rounded-full bg-red-500 px-1 text-[10px] text-white font-medium">3</span>
            </div>
          </div>
        </div>

      </div>

      {/* ORTA: Desktop Menyu (Böyük ekranlarda görünür) */}
      <div id="collapseMenu" className="hidden lg:block outline-none mx-auto">
        <ul className="flex gap-8 font-semibold text-sm text-slate-900 lg:flex-row">
          <li><Link to="/" className="hover:text-blue-700 rounded">Home</Link></li>
          <li><Link to="/blog" className="hover:text-blue-700 rounded">Blog</Link></li>
          <li><Link to="/about" className="hover:text-blue-700 rounded">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700 rounded">Contact</Link></li>
          <li><Link to="/todo" className="hover:text-blue-700 rounded">To Do</Link></li>
          <li><Link to="/products" className="hover:text-blue-700 rounded">Products</Link></li>
          <li><Link to="/user" className="hover:text-blue-700 rounded">User</Link></li>
        </ul>
      </div>

      {/* SAĞ SƏTİR: Search və Böyük Ekran İkonları */}
      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto shrink-0">
        
        {/* Search inputu mobildə tam enəcək (w-full), böyük ekranda isə öz ölçüsündə qalacaq */}
        <div className="w-full md:w-auto">
          <Search />
        </div>

        {/* Masaüstü İkonlar (Böyük ekranda görünür, mobildə gizlənir) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-center justify-center cursor-pointer text-[13px] font-semibold text-slate-900 hover:text-blue-700">
            <div className="relative">
              <CiHeart className="text-3xl" />
              <span className="absolute -top-0.5 -right-2 rounded-full bg-red-500 px-1 text-xs text-white font-medium">2</span>
            </div>
            <span>Wishlist</span>
          </div>

          <div className="flex flex-col items-center justify-center cursor-pointer text-[13px] font-semibold text-slate-900 hover:text-blue-700">
            <div className="relative">
              <CiShoppingCart className="text-3xl" />
              <span className="absolute -top-0.5 -right-2 rounded-full bg-red-500 px-1 text-xs text-white font-medium">3</span>
            </div>
            <span>Cart</span>
          </div>
        </div>

      </div>

      {/* MOBİL SIDEBAR MENYU */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setOpen(false)}>
          <div className="bg-orange-400 w-full max-w-[300px] sm:max-w-[400px] h-full p-6 shadow-xl flex flex-col justify-between" onClick={(e)=> e.stopPropagation()}>
            <div>
              <div className="flex items-center justify-between border-b border-orange-500 pb-4 mb-4">
                <span className="text-white font-bold text-lg">Menyu</span>
                <div className="cursor-pointer text-white" onClick={() => setOpen(false)}>
                  <IoClose className="text-3xl" />
                </div>
              </div>
              <ul className="flex flex-col gap-5 text-white font-medium text-lg">
                <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/blog">Blog</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </div>
  </nav>
</div>
  );
}

export default Header;
