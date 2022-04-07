let popup = document.getElementById("popup")
let topnav = document.getElementById("topnav")
let gc = document.getElementById("grid-container")
let d = document.getElementById("device");
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                popup.style.display="block";
                topnav.style.display="none";
                gc.style.display="none";
            }
            d.innerText = i.test(navigator.userAgent);

const element = document.getElementById('unblock_text')

element.addEventListener("click", () => {
	//alert('Unblocked mode activated');
    //popup.style.display="none";
    //topnav.style.display="";
    //gc.style.display=""
});