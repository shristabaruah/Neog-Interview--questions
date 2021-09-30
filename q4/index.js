const textarea =document.querySelector(".text")
const greenButton = document.querySelector(".green")
const blueButton = document.querySelector(".blue")
const redButton = document.querySelector(".red")

greenButton.addEventListener("click",green)
redButton.addEventListener("click",red)
blueButton.addEventListener("click",blue)

function green(){
    textarea.style.color="green";
    
}
function red(){
    textarea.style.color="red";
    
}
function blue(){
    textarea.style.color="blue";
    
}