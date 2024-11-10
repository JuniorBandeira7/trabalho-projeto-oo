import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Stock } from "../pages/Stock"
import { Financial } from "../pages/Financial"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/stock" element={<Stock/>}/>
                <Route path="/financial" element={<Financial/>}/>
                <Route path="*"  element={<Navigate to={"/"}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}