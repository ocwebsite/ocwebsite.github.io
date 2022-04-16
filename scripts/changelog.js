function readFile(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

    var text2 = readFile("./misc/changelog.txt");

function getLog(){
var text = readFile("./misc/changelog.txt");

var des = document.getElementById("descr");

des.setAttribute("content", text)
}
alert(text2)

