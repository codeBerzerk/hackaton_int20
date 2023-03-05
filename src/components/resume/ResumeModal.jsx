import { Modal } from "@mui/material"
import { useState } from "react";
import Cookies from "universal-cookie/cjs/Cookies";
import { ENDPOINTS } from "../../ENDPOINTS";
import { onInputHandler } from "../auth/authHandlers";
import { ResumeDialog } from "./ResumeDialog";

export default function ResumeModal ({open,close}){
    const [data,updateData] = useState({});
    const [openDialog,closeDialog] = useState(false);
    const coockies = new Cookies();

    return(<>
        <ResumeDialog open={openDialog} close={closeDialog} data={data} updateData={updateData}/>
        <Modal
        open={open}
        onClose={()=>close(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <form className="model__container" onSubmit={(event)=>{
                event.preventDefault();
                fetch(ENDPOINTS.addResume,{
                    method:"POST",
                    mode: "cors",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({data,token:coockies.get("token")}),
                })
            }}>
                <h1 className="model__header">Резюме</h1>
                <div className="model__wrapper" style={{width:"40%"}}>
                        <div className="model__input--container">
                            <span>Ім'я</span>
                            <input required type="text" name="name" value={data.name} onInput={(event)=>{onInputHandler(event,updateData)}}/>
                        </div>
                        <div className="model__input--container">
                            <span>Прізвище</span>
                            <input required type="text" value={data.surname} name="surname" onInput={(event)=>{onInputHandler(event,updateData)}}/>
                        </div>
                </div>
                <div className="model__photo">
                    <div className="model__photo--avatar" style={{backgroundImage:`url(${data.img})`}}>
                    </div>
                        <div className="model__photo--btn" onClick={()=>{closeDialog(true)}}>Додати фото +</div>
                </div>
                <div className="model__input--container" style={{marginTop:"20px"}}>
                    <span>Про себе</span>
                    <textarea required name="description" onInput={(event)=>{onInputHandler(event,updateData)}} value={data.description}></textarea>
                </div>
                <div className="model__input--container" style={{marginTop:"20px"}}>
                        <span>Освіта</span>
                        <input required type="text" style={{width:"90%"}} value={data.education} name="education" onInput={(event)=>{onInputHandler(event,updateData)}}/>
                </div>
                <div className="model__wrapper" style={{width:"90%",marginTop:"20px"}}>
                        <div className="model__input--container" style={{width:"50%"}}>
                            <span>Емейл</span>
                            <input required style={{width:"100%"}} type="email" name="email" value={data.email} onInput={(event)=>{onInputHandler(event,updateData)}}/>
                        </div>
                        <div className="model__input--container" style={{width:"50%"}}>
                            <span>Телефон</span>
                            <input required style={{width:"100%"}} type="number" value={data.number} name="number" onInput={(event)=>{onInputHandler(event,updateData)}}/>
                        </div>
                </div>
                <div className="model__input--container" style={{marginTop:"20px"}}>
                    <span>Навички(через кому)</span>
                    <textarea required name="skills" onInput={(event)=>{onInputHandler(event,updateData)}} value={data.skills}></textarea>
                </div>
                <button type="submit">Додати резюме</button>
            </form>
        </Modal>
        </>)
}