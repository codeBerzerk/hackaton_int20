import moment from "moment/moment";
import { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai";
import ResumeModal from "../resume/ResumeModal";


export const SideBar = () => {
    
    const resumes = [{name:"Resume1",date:moment().format("MMM Do YY")}]
    const [isOpen,setOpen] = useState(false);
    
    return(<>
        <ResumeModal open={isOpen} close={setOpen}/>
        <section className="sidebar">
            <h1 className="sidebar__title">Мої резюме</h1>
            {resumes.map(resume=>{
                return <div key={resume} className="sidebar__item">
                    <div className="sidebar__container">
                        <span>{resume.name}</span>    
                        <div className="sidebar__item--date">{resume.date}</div>
                    </div>
                    <div className="sidebar__btn">Подивитись резюме</div>
                </div>  
            })}
            <h1 className="sidebar__title">Додати резюме</h1>
            <div className="sidebar__add" onClick={()=>{setOpen(true)}}><AiOutlinePlus/></div>

        </section>
    </>)
}