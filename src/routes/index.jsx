import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Stock } from "../pages/Stock"
import { Financial } from "../pages/Financial"

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Stock/>}/>
                <Route path="/financeiro" element={<Financial/>}/>
                <Route path="*"  element={<Navigate to={"/"}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}