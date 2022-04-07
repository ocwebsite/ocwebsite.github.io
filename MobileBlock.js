let blocked = true;

let popup = document.getElementById("popup")
            let topnav = document.getElementById("topnav")
            let gc = document.getElementById("grid-container")
            if (blocked && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            {
                popup.style.display="block";
                topnav.style.display="none";
                gc.style.display="none";
            }

const element = document.getElementById('unblock_text')

element.addEventListener("click", () => {
	//alert('Unblocked mode activated');
    blocked = false;
    popup.style.display="none";
    topnav.style.display="";
    gc.style.display=""
});