function readFile(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }


var text2 = readFile("./misc/changelog.txt");

var head = document.getElementById("header");
var changelogtext = document.getElementsByClassName("changelog");

var text = "";
var text3;

text3 = text2.split("[n]")
for (let i=0;i<text3.length;i++){
    text = text + text3[i] + "\n";
}

document.head.innerHTML = '<title>Onix Client</title> <link rel="stylesheet" href="styles/style_main.css"> <link rel="stylesheet" href="styles/dropdown.css"><meta content="Onix Client Changelog" property="og:title"><meta content="Onix Client" property="og:site_name"><meta id="descr" content="'+text+'" property="og:description"><meta content="https://ocwebsite.github.io/changelog" property="og:url"><meta content="https://ocwebsite.github.io/assets/banner.jpg" property="og:image"><meta content="summary_large_image" name="twitter:card"><meta content="#008FC1" data-react-helmet="true" name="theme-color">'

if (changelogtext == null){
    alert("FFFFFFFFFFFFFFF")
}

window.onload = function(){
changelogtext[0].textContent = text;
}

alert(text)

