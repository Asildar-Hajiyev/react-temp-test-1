import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

function Contact() {
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(null); // Hansı ID-li elementin redaktə olunduğunu saxlayır
  const [arr, setArr] = useState([]);

  function add() {
    if (!text.trim()) return; 
    setArr([...arr, { id: Date.now(), text }]);
    setText('');
  }

  function upd(item) {
    setText(item.text); // Mətni inputa doldurur
    setEdit(item.id);   // Redaktə olunan elementin ID-sini yadda saxlayır
  }

  function updateItem() {
    setArr(
      arr.map(item =>
        item.id === edit ? { ...item, text } : item
      )
    );
    setEdit(null); // Redaktə rejimindən çıxır
    setText('');   // İnputu təmizləyir
  }

  function del(id) {
    // Əgər silinən element hal-hazırda redaktə olunursa, redaktəni ləğv et və inputu təmizlə
    if (id === edit) {
      setEdit(null);
      setText('');
    }
    setArr(arr.filter(item => item.id !== id));
  }

  return (
    <div className="p-6">
      <div className="container mx-auto w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl">
        
        {/* Header/Başlıq */}
        <div className="bg-slate-900 px-6 py-5 text-center">
          <h2 className="text-xl font-bold text-white tracking-wide">To Do List</h2>
          <p className="text-xs text-slate-400 mt-1">Planlarınızı buraya qeyd edin</p>
        </div>

        {/* İnput və Düymə bölməsi */}
        <div className="p-6">
          <div className="flex gap-2">
            <input 
              type="text" 
              onChange={(e) => setText(e.target.value)} 
              value={text} 
              placeholder={edit ? "Tapşırığı yeniləyin..." : "Yeni tapşırıq yazın..."}
              className="flex-1 border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 p-3 rounded-xl text-sm font-medium bg-slate-50 focus:bg-white outline-none transition-all duration-200"
            />
            <button 
              onClick={edit ? updateItem : add} 
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-5 py-3 rounded-xl active:scale-95 transition-all duration-150 shadow-md shadow-slate-900/10"
            >
              {edit ? "Update" : "Add"}
            </button>
          </div>

          <hr className="my-5 border-slate-100" />

          {/* Siyahı bölməsi */}
          <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1 custom-scrollbar">
            {arr.length === 0 ? (
              <p className="text-center text-sm text-slate-400 py-6">Hələ ki, heç bir tapşırıq yoxdur.</p>
            ) : (
              arr.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-100 rounded-xl transition-all duration-200 group">
                  <span className="text-sm font-medium text-slate-700 break-all pr-4">
                    {item.text}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => upd(item)}
                      className="text-slate-400 hover:text-green-700 active:scale-90 transition-all duration-150 p-1 flex items-center justify-center"
                      title="Düzəliş et"
                    >
                      <FaUserEdit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => del(item.id)} 
                      className="text-slate-400 hover:text-red-500 active:scale-90 transition-all duration-150 p-1 flex items-center justify-center"
                      title="Sil"
                    >
                      <IoMdCloseCircleOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;