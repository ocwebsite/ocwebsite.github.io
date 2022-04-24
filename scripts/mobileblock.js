let sad_face = document.getElementById('unblock_text');
let download = document.getElementById("download");
let gc = document.getElementById("grid-container");
let topnav = document.getElementById("topnav");
let popup = document.getElementById("popup");

sad_face.addEventListener("click", () => {
    popup.style.display="none";
    topnav.style.display="";
    gc.style.display="";
});

download.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
        popup.style.display="block";
        topnav.style.display="none";
        gc.style.display="none";
        }   else    {
            alert("By downloading this file you agree to license!");
            window.open("https://github.com/notcarlton/OnixLauncher/releases/latest/download/OnixLauncher.exe");
        }
});
download2.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
    popup.style.display="block";
    topnav.style.display="none";
    gc.style.display="none";
    }   else    {
        alert("By downloading this file you agree to license!");
        window.open("https://github.com/notcarlton/OnixLauncher/releases/latest/download/OnixLauncher.exe");
    }
});