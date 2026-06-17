import { useEffect, useState } from "react";
import { getUser } from "../components/service/api";


function Users() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((res) => setUser(res));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
      {user?.map((item, i) => {
        return (
          <div class="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div class="bg-gradient-to-br from-slate-800 to-indigo-900 p-5 text-white">
              <div class="flex items-center space-x-3.5">
                <div class="w-12 h-12 bg-white/10 backdrop-blur-md text-white rounded-xl flex items-center justify-center font-bold text-lg border border-white/20 uppercase tracking-wider shadow-inner">
                  LG
                </div>
                <div class="min-w-0">
                  <h2
                    class="text-lg font-bold tracking-tight truncate"
                    title="Leanne Graham"
                  >
                    {item.name}
                  </h2>
                  <p class="text-indigo-200 text-xs truncate">{item.username}</p>
                </div>
              </div>
            </div>

            <div class="p-5 flex flex-col justify-between flex-1 space-y-5">
              <div class="space-y-4">
                <div>
                  <div class="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">
                    ŞİRKƏT
                  </div>
                  <p class="text-sm font-semibold text-gray-800 truncate">
                    {item.company.name}
                  
                  </p>
                  <p class="text-xs text-gray-500 italic line-clamp-1">
                  {item.company.catchPhrase}
                  </p>
                </div>

                <div class="space-y-2.5 pt-2 border-t border-gray-50">
                  <div class="flex items-center space-x-2.5 text-gray-600 min-w-0">
                    <svg
                      class="w-4 h-4 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:Sincere@april.biz"
                      class="text-xs hover:text-indigo-600 transition-colors truncate"
                    >
                      {item.email}
                    </a>
                  </div>

                  <div class="flex items-center space-x-2.5 text-gray-600 min-w-0">
                    <svg
                      class="w-4 h-4 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span class="text-xs truncate">{item.phone}</span>
                  </div>

                  <div class="flex items-start space-x-2.5 text-gray-600 min-w-0">
                    <svg
                      class="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div class="text-xs truncate">
                      <span class="font-medium text-gray-700">{item.city}</span>
                      , <span class="text-gray-400">{item.street}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-2">
                <a
                  href={item.website}
                  target="_blank"
                  class="w-full inline-flex items-center justify-center px-4 py-2 bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 font-medium text-xs rounded-xl transition-colors duration-200 border border-slate-100 hover:border-indigo-100"
                >
                  Vebsayta keçid
                  <svg
                    class="w-3.5 h-3.5 ml-1.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
