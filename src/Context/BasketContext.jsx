import { createContext, useState } from "react"

export const BASKET = createContext([])

function BasketContext({children}) {
  const [sebet,setSebet] = useState([])
  function addbasket(id,title,price,image,category){
    console.log('mehsul',id,title,price,image,category)
    setSebet([...sebet,{id,title,price,image,category}])
  }

  return (
    <>
    <BASKET.Provider value={{addbasket,sebet}} >
        {children}
    </BASKET.Provider>
      
    </>
  )
}

export default BasketContext
