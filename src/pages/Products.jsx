import { useEffect, useState } from "react";
import { getData } from "../components/service/api";

function Products() {
  const [mehsul, setMehsul] = useState(null);
  useEffect(() => {
    setInterval(() => {
        getData().then((res) => setMehsul(res));
    }, 1500);
  }, []);
  return (
   
      <div className="grid grid-cols-3 gap-2">
        {/* Əgər mehsul yoxdursa və ya hələ yüklənirsə */}
        {mehsul === null ? (
          // Üç ədəd skeleton kartı yaradırıq (Məhsul kartlarının formasına uyğun)
    [1, 2, 3].map((n) => (
      <div 
        key={n} 
        className="animate-pulse bg-white border border-slate-200 w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden dark:bg-neutral-800 dark:border-neutral-700"
      >
        {/* Şəkil yeri üçün yanıb-sönən boz blok */}
        <div className="aspect-[3/2] w-full bg-slate-200 dark:bg-neutral-700"></div>
        
        <div className="p-4 sm:p-6 space-y-4">
          {/* Başlıq yeri üçün xətt */}
          <div className="h-4 bg-slate-200 dark:bg-neutral-700 rounded w-2/3"></div>
          {/* Təsvir yeri üçün xətlər */}
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 dark:bg-neutral-700 rounded"></div>
            <div className="h-3 bg-slate-200 dark:bg-neutral-700 rounded w-5/6"></div>
          </div>
          {/* Düymə yeri */}
          <div className="h-9 bg-slate-200 dark:bg-neutral-700 rounded w-1/3 mt-6"></div>
        </div>
      </div>))
        ) : (
          // Məhsullar gəldikdən sonra bura işə düşür
          mehsul.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white border border-slate-200 shadow-sm w-full max-w-sm rounded-lg mx-auto mt-6 overflow-hidden dark:bg-neutral-800 dark:border-neutral-700"
              >
                <div className="aspect-[3/2] w-full">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-slate-900 text-base font-semibold dark:text-slate-50">
                    {item.title.slice(0, 25)}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                    {item.description.slice(0, 100)}
                  </p>

                  <a
                    href="#"
                    className="inline-block mt-6 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Read more
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
   
  );
}

export default Products;
