import { useContext } from "react"
import { DATA } from "../Context/DataContext"

function About() {
  const {mehsul} = useContext(DATA)
  return (
    <div className="grid grid-cols-3 gap-4 place-items-center p-4">
    {mehsul.length === 0 ? (<h1>yuklenir</h1>): mehsul.map((item,i)=>
    (
      <div key={i} className="max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col justify-between">
      {/* Şəkil Konteyneri */}
      <div className="relative bg-gray-50 p-8 flex justify-center items-center h-64 select-none">
        <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-full">
          {item.category}
        </span>
        <img 
          className="object-contain h-full w-full hover:scale-105 transition-transform duration-500 ease-out" 
          src={item.image} 
          alt={item.title} 
          loading="lazy"
        />
      </div>

      {/* Məzmun Hissəsi */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Reytinq */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex items-center text-amber-400">
              {/* Sadə SVG Ulduz */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">{item.rating.rate}</span>
            <span className="text-xs text-gray-400">({item.rating.count} rəy)</span>
          </div>

          {/* Başlıq */}
          <h2 className="text-lg font-medium text-gray-900 line-clamp-1 hover:text-gray-700 cursor-pointer transition-colors mb-2">
            {item.title}
          </h2>

          {/* Açıqlama */}
          <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6">
            {item.description}
          </p>
        </div>

        {/* Qiymət və Düymə */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Qiymət</span>
            <span className="text-2xl font-semibold text-gray-950">${item.price}</span>
          </div>
          
          <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-3 rounded-xl transition-all active:scale-[0.98] shadow-sm hover:shadow-md">
            Səbətə at
          </button>
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}

export default About
