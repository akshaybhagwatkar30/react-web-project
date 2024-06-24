import {Route, Routes} from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"

export default function AllRouter(){
     return <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/login" element={<Login/>} />
      </Routes>
}