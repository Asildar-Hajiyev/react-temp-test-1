import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <nav
            className="flex py-2 px-4 md:px-8 bg-white border-b border-slate-300 min-h-[68px] relative z-20"
            aria-label="Main navigation">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 w-full">
                <div id="collapseMenu"
                    className="hidden lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none">

                  

                    <ul
                        className="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6 lg:ml-12">
                        <li>
                        <Link to="/"
                            className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                            aria-current="page">Home</Link>
                        </li>
                        <li>
                        <Link to="/blog"
                            className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Blog</Link>
                        </li>
                        <li>
                        <Link to="/about"
                            className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">About</Link>
                        </li>
                        <li>
                        <Link to="/contact"
                            className="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="border">
                    <input type="text"  className="focus:outline-none px-2" />
                </div>
                <div className="flex items-center gap-4 ml-auto">

                    <div className="flex items-center gap-4 pr-2">
                        <a href="#"
                        className="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-slate-900 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer fill-current inline w-5 h-5" viewBox="0 0 64 64"
                                aria-hidden="true">
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000" />
                            </svg>
                            <span
                                className="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">2</span>
                        </div>
                        <span>Wishlist</span>
                        </a>

                        <a href="#"
                        className="flex flex-col items-center justify-center gap-0.5 text-[13px] font-semibold text-slate-900 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer fill-current inline w-5 h-5" viewBox="0 0 489 489"
                                aria-hidden="true">
                                <path
                                    d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                                    data-original="#000000" />
                            </svg>
                            <span
                                className="absolute left-auto -ml-1 -top-0.5 rounded-full bg-red-500 px-1 py-0 text-xs text-white font-medium">3</span>
                        </div>
                        <span>Cart</span>
                        </a>
                    </div>
                    <button type="button" aria-controls="collapseMenu" aria-expanded="false" aria-haspopup="true" id="toggleOpen"
                        className="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-7 fill-slate-900" aria-hidden="true" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path 
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                           ></path>
                        </svg>
                    </button>
                </div>
            </div>
            </nav>
      
    </div>
  )
}

export default Header
