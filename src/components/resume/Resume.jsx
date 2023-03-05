import Navbar from "../uikit/Navbar";
import { SideBar } from "../uikit/SideBar";
import { Cv } from "./Cv";

export const Resume = () => {
    
    return(<>
        <Navbar/>
        <div className="resume__separator"/>
        <div className="resume__container">
        <SideBar/>
        <Cv/>
        </div>
    </>)    
}