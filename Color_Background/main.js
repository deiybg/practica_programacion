const colors = ["red","black","green","RGB(141, 26, 26)","RGB(11, 149, 112)","#670b95","#6e950b"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const getRandomNumber = () =>{
   return Math.floor(Math.random() * colors.length);
   
   }
   
btn.addEventListener("click", ()=>{
    const randomNumber = getRandomNumber(); 
    const selectedColor = colors[randomNumber];
    document.body.style.backgroundColor = selectedColor;
color.textContent = selectedColor;
    
});




