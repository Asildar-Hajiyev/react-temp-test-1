import { createContext, useEffect, useState } from "react"
import { getData } from "../components/service/api"

export const DATA = createContext([])

function DataContext({children}) {
    const [mehsul,setMehsul] = useState([])
    useEffect(()=>{
        getData().then(res=>setMehsul(res))
    },[])
  return (
    <>
    <DATA.Provider value={{mehsul}}>
        {children}
    </DATA.Provider>
      
    </>
  )
}

export default DataContext
