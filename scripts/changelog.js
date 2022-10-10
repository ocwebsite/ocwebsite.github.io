function readFile(pathOfFileToReadFrom)
    {
        let request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        let returnValue = request.responseText;

        return returnValue;
    }


let text2 = readFile("./misc/changelog.txt");

let _head = document.getElementById("descr");
let changelogtext = document.getElementById("changelog")

let text = "";
let text3;

text3 = text2.split("[n]")
for (let i=0;i<text3.length;i++){
    text = text + text3[i] + "\n";
}

window.onload = function(){
    changelogtext.innerText = text;
}

_head.onload = function(){
    _head.setAttribute("content", text)
}
