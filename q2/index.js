const textArea = document.querySelector(".text")
const increaseButton =  document.querySelector(".increase")
const decreaseButton = document.querySelector(".decrease")

let FontSize=32;
 increaseButton.addEventListener("click",increase)
 decreaseButton.addEventListener("click",decrease)

 function increase(){
     FontSize+=2;
     textArea.style.fontSize=`${FontSize}px`
    
 }
 function decrease(){
    FontSize-=2;
    textArea.style.fontSize=`${FontSize}px`
}