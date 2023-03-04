import { useParams } from "react-router-dom"
import Navbar from "../uikit/Navbar";
import { SideBar } from "../uikit/SideBar";
import { Cv } from "./Cv";

export const Resume = () => {
    
    const {name} = useParams();

    return(<>
        <Navbar/>
        <div className="resume__separator"/>
        <div className="resume__container">
        <SideBar/>
        <Cv/>
        </div>
    </>)    
}