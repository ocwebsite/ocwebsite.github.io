# how to add new module/something
* make a new option: <br>
```html
<option value="newmod">New Module</option>
```
* make a new json file<br>
_name must be same as the value on the option_
newmod.json 
```json
{"name":"New Module",
 "desc":"Module's Description",
 "funcs":[
  {"func":"somefunc(arg1,arg2)",
   "desc":"Describe this function"}
  ]
 }
 ```
 `name`: Module's name<br>
 `desc`: Module's Description<br>
 `funcs`: list of functions or vars or something<br><br>
 `funcs`' object<br>
 `func`: function/var name
 `desc`: description
 
----

you can use html styling on that 