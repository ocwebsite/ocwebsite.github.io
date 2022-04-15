let body = document.getElementById("body")
let checkbox = document.getElementById("fontchange")

checkbox.addEventListener("click", () =>{
    if (checkbox.checked)
        body.style.fontFamily = "Times New Roman";
    else
        body.style.fontFamily = "'Roboto', sans-serif"; //more fonts when
});