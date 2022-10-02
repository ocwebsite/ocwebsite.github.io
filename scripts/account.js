let fname=document.getElementById("fname");
let input=document.getElementById("myfile");
 
input.addEventListener("change",()=>{
let file=document.querySelector("input[type=file]").files[0];
   fname.innerText=file.name;
}));

