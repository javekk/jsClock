function readTextFile(path){

    var file = new XMLHttpRequest();
    file.open("GET", path, false);
    file.onreadystatechange = function (){

        if((file.readyState === 4) && (file.status === 200 || file.status == 0)){
            var allText = file.responseText;
            alert(allText);
        }
    }
    file.send(null);
}