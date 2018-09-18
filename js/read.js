
var jsonObject;

function readTextFile(path){

    var file = new XMLHttpRequest();
    file.open("GET", path, false);
    file.onreadystatechange = function (){

        if((file.readyState === 4) && (file.status === 200 || file.status == 0)){
            var TEXT = file.responseText;
            jsonObject = JSON.parse(TEXT);
        }
    }

    file.send(null);
}


function getSetValue(key){
    return jsonObject[key];
}