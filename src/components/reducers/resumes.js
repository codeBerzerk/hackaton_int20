const defaultState = {
    resumes:[],
    current:{
        name:"roman",
        isMentor:"",
        surname:"qwer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Id optio enim distinctio officia velit iure possimus molestiae totam. Reiciendis commodi ea dolorem soluta totam.",
        education:"Education",
        email:"email@email.js",
        img:"https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
        number:"+3809123123131",
        skills:["js","node","sho?.js"],
        projects:[{name:"asdasd"}]
    },
}  

export const resumes = (state = defaultState,action) => {
    switch (action.type) {
        case "LOAD_RESUMES":{
            return {...action.payload}
        }
        default:{
            return state;
        }
    }
}