import { ENDPOINTS } from "../../ENDPOINTS";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const onInputHandler = (event,update) => {
    update((state) =>{
        state[event.target.name] = event.target.value;
        return {...state}
    })
}

const submit = (event,data,isLogin,dispatch,update,redirect) =>{
    event.preventDefault();
    if(data?.password?.trim().length > 1 && data?.login?.trim().length > 1){
        fetch(ENDPOINTS[`${isLogin?"login":"reg"}`],{
            method:"POST",
            mode: "cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
        }).then(data=>data.json().then(resp=>{
            if(resp.success){
                dispatch({type:"NEW_NOTIFICATION",payload:{message:"Success!",variant:"success"}});
                cookies.set("token",resp.token,{path:"/",maxAge:60*60*24*7})
                redirect(true);
            }else{
                dispatch({type:"NEW_NOTIFICATION",payload:{message:resp.message,variant:"error"}})
            }
        }))
        update({login:"",password:""});
    }else{
        dispatch({type:"NEW_NOTIFICATION",payload:{message:"Wrong input data!",variant:"warning"}})
    }
}


export {
    onInputHandler,
    submit,
};