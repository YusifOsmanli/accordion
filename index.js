const accordionitem=document.getElementById("btn")
const accordion=document.querySelector(".accordion_body")
accordionitem.addEventListener("click",()=>{


    accordion.classList.add("accordion_body")
    accordion.style.display="block"
})

const accordionitem1=document.getElementById("btn1")
const accordion1=document.querySelector(".accordion_body1")
accordionitem1.addEventListener("click",()=>{


    accordion1.classList.add("accordion_body1")
    accordion1.style.display="block"
})

const accordionitem2=document.getElementById("btn2")
const accordion2=document.querySelector(".accordion_body2")
accordionitem2.addEventListener("click",()=>{


    accordion2.classList.add("accordion_body2")
    accordion2.style.display="block"
})