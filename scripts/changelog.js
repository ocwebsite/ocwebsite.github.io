function FileHelper()
{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
}

var text = FileHelper.readStringFromFileAtPath("./misc/changelog.txt");

var des = document.getElementById("descr");

des.setAttribute("content", text)