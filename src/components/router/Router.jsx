import Auth from "../auth/Auth";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";
import Home from "../home/Home";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}