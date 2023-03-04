import { TextField, Typography,Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onInputHandler, submit } from "./authHandlers";


export default function Auth(){
    const [authToggle,updateToggle] = useState(false);
    const [inputController,updateController] = useState({});
    const dispatch = useDispatch();
    return(
            <section className="auth">
                <div className="auth__container">
                    <div className="auth__wrapper">
                        <h1 className="auth__title">Welcome!</h1>
                        <h5 className="auth__subtitle">{authToggle?"registration":"login"}</h5>
                        <form className="auth__from" onSubmit={event=>{submit(event,inputController,authToggle?true:false,dispatch,updateController)}}>
                            <span>
                                <Typography variant="h5">Username:</Typography>
                                <TextField 
                                    label="Login"
                                    name="login"
                                    value={inputController.login}
                                    onInput={(event)=>{onInputHandler(event,updateController)}}
                                    variant="standard" />
                                <Typography variant="h5">Password:</Typography>
                                <TextField 
                                    label="Password"
                                    name="password"
                                    value={inputController.password}
                                    onInput={(event)=>{onInputHandler(event,updateController)}}
                                    variant="standard" />
                            </span>
                            <Button type="submit">Submit</Button>
                        </form>
                        <p className="auth__switch" onClick={()=>updateToggle(!authToggle)}>
                            {!authToggle?"Alredy have an account?":"Dont have any account?"}
                        </p>
                    </div>
                </div>
            </section>
        )
}