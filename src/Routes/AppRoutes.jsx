import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Blog from "../pages/Blog"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Todo from "../pages/Todo"
import Products from "../pages/Products"
import Users from "../pages/Users"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/todo" element={<Todo />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/user" element={<Users />}/>
    </Routes>
  )
}

export default AppRoutes
