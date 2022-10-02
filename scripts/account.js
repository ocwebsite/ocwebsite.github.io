let fname=document.getElementById("fname");
let input=document.getElementById("myfile");
 
input.addEventListener("change",()=>{
let file=document.querySelector("input[type=file]").files[0];
   fname.textContent=file.name;
   
});

function login(){alert("does nothing");}
function register(){alert("you need to make account");}
