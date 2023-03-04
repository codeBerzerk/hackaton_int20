import { ENDPOINTS } from "../../ENDPOINTS";

const onInputHandler = (event,update) => {
    update((state) =>{
        state[event.target.name] = event.target.value;
        return {...state}
    })
}

const submit = (event,data,isLogin,dispatch,update) =>{
    event.preventDefault();
    if(data?.password?.trim().length > 7 && data?.login?.trim().length > 3){
        fetch(ENDPOINTS[`${isLogin?"login":"reg"}`],{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data),
        })
        update({login:"",password:""});
    }else{
        dispatch({type:"NEW_NOTIFICATION",payload:{message:"Wrong input data!",variant:"warning"}})
    }
}


export {
    onInputHandler,
    submit,
};