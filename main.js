let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle("move")
}
//Email js
function validate(){
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendbtn = document.querySelector('.send-btn')

    sendbtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(name.value=="" || email.value=="" || msg==""){
            emptyerror();
        }else{
            sendmail(name.value, email.value,msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_axf2tcl","template_rz6zr4e",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "Oh no....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
      
}
function success(){
    swal({
        title: "Email Sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}
// header BAckground change on scroll
let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle("header-active", window.scrollY > 0);
});
//scroll top
let scrollTop = document.querySelector(".scroll-top")

window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});
