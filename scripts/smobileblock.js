let sad_face = document.getElementById('unblock_text');
let download = document.getElementById("download");
let topnav = document.getElementById("topnav");
let popup = document.getElementById("popup");
let gc = document.getElementById("hide");

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
            alert("The download is in the #download channel in the discord!");
            window.open("https://discord.gg/onixclient");
        }
});
