const host = "https://force-start-nest.herokuapp.com";
export const ENDPOINTS = {
    login:`${host}/auth/login`,
    reg:`${host}/auth/register`,
    isAuthorized:`${host}/auth/authorized`,
    addResume:`${host}/resume/addResume`,
    getOne:`${host}/resume/getOne`,
}