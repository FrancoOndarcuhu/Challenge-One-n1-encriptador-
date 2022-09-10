var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var botonCopiar = document.querySelector(".botonCopiar");
var botonBorrar = document.querySelector(".botonBorrar");
var mensajeResuelto = document.querySelector(".mensajeResuelto");
var mensaje = document.querySelector(".mensaje");


mensaje.onkeyup = minuscula;

function minuscula(){
    mensaje.value = mensaje.value.toLowerCase();
}




botonEncriptar.onclick = encriptar;


function encriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let mensajeResuelto = document.getElementById("mensajeResuelto");

    mensajeResuelto.style.backgroundImage = "none";
    //document.getElementById("textos").style.color = "rgb(212, 212, 212)";
    mensajeResuelto.textContent = encriptarTexto(mensaje);
}


function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(i = 0; i < texto.length; i++){
        
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;  
}





botonDesencriptar.onclick = desencriptar;

function desencriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let mensajeResuelto = document.getElementById("mensajeResuelto");

    mensajeResuelto.style.backgroundImage = "none";
    //document.getElementById("textos").style.color = "rgb(212, 212, 212)";
    mensajeResuelto.textContent = desencriptarTexto(mensaje);
}



function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(i = 0; i < texto.length; i++){
        
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;  
}




botonCopiar.onclick = copiar;

function copiar(){
    mensajeResuelto.select;
    navigator.clipboard.writeText(mensajeResuelto.textContent);
    alert("¡texto copiado!");
}
