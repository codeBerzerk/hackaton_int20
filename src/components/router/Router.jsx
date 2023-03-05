import Auth from "../auth/Auth";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import ErrorPage from "../error/ErrorPage";
import Home from "../home/Home";
import { Resume } from "../resume/Resume";
import Projects from "../../projects/Projects";
import Requieres from "../requieres/Requieres";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/cv/:name" element={<Resume/>}/>
                <Route path="/projects/:name" element={<Projects/>}/>
                <Route path="/request" element={<Requieres/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}