let firstname=document.querySelector("#firstname");
let lastname=document.querySelector("#lastname")
let email=document.querySelector("#email");
let pasword=document.querySelector("#pasword")

let btn=document.querySelector(".regsubmit")

btn.addEventListener("click",function(e){
    e.preventDefault()
    if (firstname.value === "" || lastname.value ==="" || email.value=== "" ||pasword.value===""  )
    {
        alert("please fill data")
    }
    else{
        localStorage.setItem("firstName",firstname.value);
        localStorage.setItem("Email",email.value);
        localStorage.setItem("Password",pasword.value)

        setTimeout(()=>{
            window.location= "login.html"
        })
    }
})

