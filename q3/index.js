const text  = document.querySelector(".text")
const h1Button = document.querySelector(".h1")
const h2Button =  document.querySelector(".h2")
const h3Button = document.querySelector(".h3")

h1Button.addEventListener("click",h1size)
h2Button.addEventListener("click",h2size)
h3Button.addEventListener("click",h3size)

function h1size(){
    text.style.fontSize="32px"
}

function h2size(){
    text.style.fontSize="24px"
}
function h3size(){
    text.style.fontSize="18px"
}