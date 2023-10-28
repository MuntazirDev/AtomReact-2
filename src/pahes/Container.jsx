import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "../compant/PageNotFound";


export default function Container(){
    return(
       <div className=" containr"> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
       </div>
    )
}