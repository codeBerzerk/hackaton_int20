import { Backdrop, CircularProgress } from "@mui/material";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ENDPOINTS } from "../../ENDPOINTS";

const cookies = new Cookies();

export const ProtecedRouter = ({Element,Instead}) =>{
    const dispatch = useDispatch();
    const [isAuthorized,setAuthorized] = useState(null);
    console.log(isAuthorized);
    const token = cookies.get("token");
    useEffect(()=>{
        (async () => {
            try{
            const response = await (await fetch(ENDPOINTS.isAuthorized,{
                                        method:"POST",
                                        mode: "cors",
                                        headers:{"Content-Type":"application/json"},
                                        body:JSON.stringify({token})})).json()
                                        setAuthorized(response.success);
            }catch(e){
                dispatch({type:"NEW_NOTIFICATION",payload:{message:"Failed connection to server",variant:"error"}})
                setAuthorized(false);
            }
        })()
    },[])

    useEffect(()=>{
        async function bootstrap(){
            try{
                const data = await (await fetch(ENDPOINTS.getOne,{
                    method:"POST",
                    mode: "cors",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({token:cookies.get("token")}),
                })).json();
                dispatch({type:"LOAD_RESUMES",payload:data.data.resumes[0]})
            }catch(e){
                console.log(e);
            }
        }
        bootstrap();
    }
    ,[])

    if(isAuthorized === null){
        return <Backdrop
                    sx={{ color: '#FFAB07', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
    }

    return(<>{isAuthorized ? <Element/> :<Instead/>}</>);
}