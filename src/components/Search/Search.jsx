import { useState } from "react";
import { IoSearch } from "react-icons/io5";


function Search() {
    const [name,setName] = useState('')
  return (
   <div className="border rounded-lg px-3 py-2 flex items-center gap-2 w-full max-w-md">
      <IoSearch size={20} />
      <input
        type="text"
        value={name}
        onInput={(e)=>setName(e.target.value)}
        placeholder="Axtar..."
        className="w-full focus:outline-none"
      />
      <h2>{name}</h2>
    </div>
  )
}

export default Search
