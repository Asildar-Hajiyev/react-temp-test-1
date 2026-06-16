import product from "../Data/product.json"
function Home() {
  function addbasket (id){
    let Cart  = []
    Cart.push(id)
    console.log(Cart)
  }
  return (
    <div>
         <section className="mt-6 px-4 md:px-8" >
   <div className="mx-auto max-w-4xl lg:max-w-7xl">

      <h2 id="products-heading" className="text-2xl font-bold text-slate-900 mb-8">
        Mehsullar
      </h2>

      <ul className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 lg:grid-cols-4">

         {product.map((item,i)=>{
   return   <li   key={i}
         
            className="bg-white flex flex-col rounded-md border border-slate-200 shadow-sm relative">

            <div 
               className="rounded-md block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
               <img src={item.image} className='w-[300px]' alt="Lexicon Luxe t-shirt"
                  className="w-full aspect-[18/24] object-cover object-top" />

               <div className="p-4">
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
                     {item.title}
                  </h3>
                  <p className="text-base mt-2 font-semibold text-slate-700">
                     ${item.price}
                  </p>
               </div>
            </div>

            <div className="p-4 pt-0">
               <button onClick={()=>addbasket(item.id)} type="button" aria-label="Add Lexicon Luxe to cart"
                  className="w-full cursor-pointer text-sm px-3.5 py-2 font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  Add to cart
               </button>
            </div>
         </li>
    })}
      </ul>
   </div>
</section>
    
     </div>
  )
}

export default Home
