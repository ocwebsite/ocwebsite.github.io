let popup = document.getElementById("popup")
let topnav = document.getElementById("topnav")
let gc = document.getElementById("grid-container")
let d = document.getElementById("device");
let sad_face = document.getElementById('unblock_text');

            if (!navigator.userAgent.includes("Windows"))
            {
                popup.style.display="block";
                topnav.style.display="none";
                gc.style.display="none";
            }            

sad_face.addEventListener("click", () => {
	//alert('Unblocked mode activated');
    popup.style.display="none";
    topnav.style.display="";
    gc.style.display="";
});