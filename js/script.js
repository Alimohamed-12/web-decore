let sign=document.querySelector("#sign")
let getfirstname=localStorage.getItem("firstName")
const logout = document.querySelector('#logout')
const getName = () =>{
    if(getfirstname){
        sign.textContent = `${getfirstname}`
    }else{
        sign.textContent = `Sign in`
    }
}
getName();


logout.addEventListener('click',()=>{
    if(getfirstname){
        localStorage.clear();
        getName()
    }
})