function readFile(pathOfFileToReadFrom)
    {
            var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }
let libdrop=document.getElementById("libraries");
libdrop.addEventListener("change",()=>{
    display(libdrop.value)
});
let tabledrop=document.getElementById("tables");
tabledrop.addEventListener("change",()=>{
    display(libdrop.value)
});

function display(name){
    let p=document.getElementById("title")
    json=JSON.parse(readFile(name+".json"))
    p.innerText=json.title
    let html=""
    html=html+"<br><p>"+json.desc+"</p><br>"
    for (const func of json.funcs) {
        funchtml="<br><code class=\"funcstyle\">"+func.func+"</code><br>\n<p>\t"
        funcdesc=funchtml+func.desc+"</p><br>"
        html=html+funcdesc
    }
    let cont=document.getElementById("content")
    cont.innerHTML=html
    console.log(html)
}
