let popup = document.getElementById("popup")
let nav = document.getElementById("nav")
let gc = document.getElementById("grid-container")
let d = document.getElementById("device");
let sad_face = document.getElementById('unblock_text');
let download = document.getElementById("download");
let download2 = document.getElementById("download2");

sad_face.addEventListener("click", () => {
	//alert('Unblocked mode activated');
    popup.style.display="none";
    nav.style.display="";
    gc.style.display="";
});
download.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
        popup.style.display="block";
        nav.style.display="none";
        gc.style.display="none";
        }   else    {
            window.open("https://github.com/notcarlton/OnixLauncher/releases/latest/download/OnixLauncher.exe");
        }
});
download2.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
    popup.style.display="block";
    nav.style.display="none";
    gc.style.display="none";
    }   else    {
        window.open("https://github.com/notcarlton/OnixLauncher/releases/latest/download/OnixLauncher.exe");
    }
});