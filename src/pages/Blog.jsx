import { useState } from "react";

function Blog() {
   const [count, setCount] = useState(0);
  return (
    <div className="border max-w-[400px] flex items-center flex-col">
      <p>You clicked {count} times</p>
      <button className="border" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button className="border" onClick={() => count<1? 0 : setCount(count - 1)}>
        Click me
      </button>
    </div>
  )
}

export default Blog
