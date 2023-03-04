import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onInputHandler, submit } from "./authHandlers";
import '../../styles/_auth.scss';


export default function Auth(){
    const [authToggle,updateToggle] = useState(false);
    const [inputController,updateController] = useState({});
    const dispatch = useDispatch();

    return(
            <section className="auth">
                        <h5 className="auth__subtitle">{authToggle?"Реєстрація":"Логін"}</h5>
                        <form className="auth__form-container" onSubmit={event=>{submit(event,inputController,authToggle?true:false,dispatch,updateController)}}>
                                <TextField
                                    className="auth__form"
                                    label="Login"
                                    name="login"
                                    value={inputController.login}
                                    onInput={(event)=>{onInputHandler(event,updateController)}}
                                    variant="outlined"/>
                                <TextField
                                    className="auth__form"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={inputController.password}
                                    onInput={(event)=>{onInputHandler(event,updateController)}}
                                    variant="outlined"/>
                            <Button className="auth__submit" type="submit">{authToggle?"Створити акаунт":"увійти"}</Button>
                        </form>
                        <p className="auth__switch" onClick={()=>updateToggle(!authToggle)}>
                            {!authToggle?"Alredy have an account?":"Dont have any account?"}
                        </p>
            </section>
        )
}