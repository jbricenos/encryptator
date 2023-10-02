function encrypt(){

    var texto = document.getElementById('textoEncriptado').value
    .toLocaleLowerCase();

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById('inputTexto').innerHTML = 
    textoEncriptado;

    document.getElementById('botonCopiar').style.display 
    = "show";
    document.getElementById('botonCopiar').style.display 
    = "inherit";
}


function decrypt(){

    var texto = document.getElementById('textoEncriptado').value
    .toLocaleLowerCase();

    var textoDesencriptado = texto.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById('inputTexto').innerHTML = 
    textoDesencriptado;
}

function textCopy(){
    var content = document.querySelector('#inputTexto');
    content.select();
    document.execCommand("copy");
}




