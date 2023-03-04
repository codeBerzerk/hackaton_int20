import { Chip } from "@mui/material";
import { useSelector } from "react-redux"

export const Cv = () => {
    const resumes = useSelector(state=>state.resumes);
    return<section className="cv">
        <div className="cv__header">
            <div className="cv__avatar" style={{backgroundImage:`url(${resumes.current.img})`}}>
            </div>
            <div className="cv__container">
                <h1 className="cv__title">Мій Профіль</h1>
                <h3 className="cv__name">{resumes.current.name} {resumes.current.surname}</h3>
                <p className="cv__description">{resumes.current.description}</p>
            </div> 
        </div>
        <div className="cv__plates">
            <div>
                <h3>Освіта</h3>
                <p>{resumes.current.education}</p>
            </div>
            <div>
                <h3>Навички</h3>
                <p>{resumes.current.skills.map(e=>{
                    return <Chip style={{marginRight:"5px"}} label={e} key={e} />
                })}</p>
            </div>
            <div>
                <h3>Емейл</h3>
                <p>{resumes.current.email}</p>
                <h3>Телефон</h3>
                <p>{resumes.current.number}</p>
            </div>
        </div>
    </section>
}