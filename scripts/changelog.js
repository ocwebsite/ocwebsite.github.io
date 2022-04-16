function readFile(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

var text = readFile("./misc/changelog.txt");

var des = document.getElementById("descr");

alert(text)
des.setAttribute("content", text)
