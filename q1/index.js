const inputNumber =  document.querySelectorAll(".input")
const addButton = document.querySelector(".add")
const subButton = document.querySelector(".sub")
const divButton = document.querySelector(".divide")
const MultButton = document.querySelector(".mul")
const output = document.querySelector(".output")

addButton.addEventListener("click",add)
subButton.addEventListener("click",sub)
divButton.addEventListener("click",divide)
MultButton.addEventListener("click",mult)

function add(){
    output.innerText = Number(inputNumber[0].value) + Number(inputNumber[1].value)
  
}
function sub(){
    output.innerText = Number(inputNumber[0].value) - Number(inputNumber[1].value)
}
function divide(){
    output.innerText = Number(inputNumber[0].value) / Number(inputNumber[1].value)
}
function mult(){
    output.innerText = Number(inputNumber[0].value) * Number(inputNumber[1].value)
}
