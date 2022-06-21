let sad_face = document.getElementById('unblock_text');
let download = document.getElementById("download");
let topnav = document.getElementById("topnav");
let popup = document.getElementById("popup");
let gc = document.getElementById("flexable");
let title = document.getElementById("title_big_body");

sad_face.addEventListener("click", () => {
    popup.style.display="none";
    topnav.style.display="";
    gc.style.display="";
    title.style.display="";
});

download.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
        popup.style.display="block";
        topnav.style.display="none";
        gc.style.display="none";
        title_big_body.style.display = "none";
        }   else    {
            alert("The download is in the #download channel in the discord!");
            window.open("https://discord.gg/onixclient");
        }
});
download2.addEventListener("click", () =>{
    if (!navigator.userAgent.includes("Windows")){
    popup.style.display="block";
    topnav.style.display="none";
    gc.style.display="none";
    title_big_body.style.display = "none";
    }   else    {
        alert("The download is in the #download channel in the discord!");
        window.open("https://discord.gg/onixclient");
    }
});
