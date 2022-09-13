const elements= document.querySelectorAll(".element");
let count=0;

setInterval(()=>{
count++;
let currentE=document.querySelector(".current");
currentE.classList.remove("current");
if(count>=elements.length){
    elements[0].classList.add("current")
    count=0;
  }else{
    currentE.nextElementSibling.classList.add("current")
  }

 
},2000)