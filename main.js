window.onload=function(){

document.getElementById("dateien").addEventListener("change", dateiausgabe, false);

function dateiausgabe(ereignis){
    var dateien = ereignis.target.files;

    for (var i = 0, datei; datei = dateien[i]; i++) {
        //console.log(ereignis.target.value);
        var element = document.createElement("li");
        var info = document.createTextNode(datei.name + " (" + datei.type + ")," + datei.size + " Bytes");
        element.appendChild(info);
        document.getElementById("dateiliste").appendChild(element);
    }
}

}