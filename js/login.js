let firstname=document.querySelector("#firstname");
let email=document.querySelector("#email");
let pasword=document.querySelector("#pasword")

let getfirstname=localStorage.getItem("firstName")
let  getpasword=localStorage.getItem("Password")
let getemail=localStorage.getItem("Email")

let btn=document.querySelector(".regsubmit")

btn.addEventListener("click",function(e){
    e.preventDefault()
    if (email.value=== "" || pasword.value==="" )
    {
        alert("fill this data")
    }
    else{
        if ((getemail && getemail.trim() === email.value) &&(getpasword && getpasword.trim() === pasword.value))
        {
            setTimeout(()=>{
                window.location="index.html"
            },1500)
        }
        else{
            alert("pasword or email is incorect")
        }
    }
})