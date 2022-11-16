import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/exercOne/App";
import Two from "./pages/exercTwo/";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/two' element={<Two/>} />
            </Routes>
        </BrowserRouter>
    )
}