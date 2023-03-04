import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ENDPOINTS } from "../../ENDPOINTS";


export const ProtecedRouter = ({Element,Instead}) =>{
    const dispatch = useDispatch();
    const [isAuthorized,setAuthorized] = useState(null);
    const token = "";
    useEffect(()=>{
        (async () => {
            try{
            const response = await (await fetch(ENDPOINTS.isAuthorized,{
                                        method:"POST",
                                        headers:{"Content-Type":"application/json"},
                                        body:JSON.stringify({token})})).json()
                                        setAuthorized(response.succes);
            }catch(e){
                dispatch({type:"NEW_NOTIFICATION",payload:{message:"Failed connection to server",variant:"error"}})
                setAuthorized(true);
            }
        })()
    },[dispatch])
    if(isAuthorized === null){
        return <Backdrop
                    sx={{ color: '#FFAB07', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
    }

    return(<>{isAuthorized ? <Element/> :<Instead/>}</>);
}