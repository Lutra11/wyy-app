import login from ".."
export function getLogin(data){
    return login({
        method:"GET",
        url:"xwkp/login"
    })
}
