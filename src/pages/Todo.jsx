import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("salam");

  function add() {
    if (input.trim()) {
      setTodo([...todo, input.trim()]);
      setInput("");
    }
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          {/* Başlıq */}
          <h1 className="text-xl font-semibold text-slate-800 mb-6 text-center tracking-tight">
            Tapşırıqlar
          </h1>

          {/* Giriş sahəsi və Düymə */}
          <div className="flex gap-2 mb-6">
            <input
              className="flex-1 border border-slate-200 focus:border-slate-400 focus:outline-none px-3 py-2 rounded-lg text-sm transition-colors text-slate-700 bg-slate-50/50"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && add()}
              placeholder="Yeni tapşırıq..."
            />
            <button
              onClick={add}
              className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
            >
              Əlavə et
            </button>
          </div>

          {/* Tapşırıq Siyahısı */}
          <div className="space-y-2">
            {todo.map((item, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-50 px-3 py-2.5 rounded-lg border border-slate-100">
                <p className="text-slate-600 text-sm">{item}</p>
                <button onClick={()=>setTodo(todo.filter((_,index)=> index !== i))} className="text-slate-400 hover:text-red-500 text-xs font-medium transition-colors p-1 cursor-pointer">
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
