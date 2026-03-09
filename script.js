const btn = document.querySelector(".dropbtn")
const menu = document.querySelector(".dropdown-content")

btn.addEventListener("click",(e)=>{
    e.stopPropagation();

    menu.classList.toggle("show")
})
document.addEventListener("click",()=>{
    menu.classList.remove("show")
    
})