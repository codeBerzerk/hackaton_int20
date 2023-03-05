const defaultState = {
    resumes:[],
    current:{}
}  

export const resumes = (state = defaultState,action) => {
    switch (action.type) {
        case "LOAD_RESUMES":{
            return {...state,current:action.payload}
        }
        default:{
            return state;
        }
    }
}