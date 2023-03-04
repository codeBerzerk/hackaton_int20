const defaultState = {
    name:"roman qwe",
}  

export const user = (state = defaultState,action) => {
    switch (action.type) {
        case "LOAD_USER":{
            return {...action.payload}
        }
        
        default:{
            return state;
        }
    }
}