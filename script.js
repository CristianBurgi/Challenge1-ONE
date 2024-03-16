var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var botonLimpiar=document.querySelector(".btn-limpiar");
let munieco = document.querySelector(".contenedor-munieco");
let h3 = document.querySelector(".contenedor-h3");
let parrafo = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");
let area = document.querySelector(".area");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
botonLimpiar.onclick= limpiarTexto;

function encriptar(){
   ocultarElementos();
   resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarElementos();
    resultado.textContent = desencriptarTexto(recuperarTexto());

}
function copiarTexto() {
   

    // Copia el valor del elemento resultado al área de texto
    area.value = resultado.textContent;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => {
            // Mostrar un mensaje de éxito
            window.alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}
function limpiarTexto(){
    resultado.textContent = "";
    area.value = "";
    mostrarElementos();
}


function ocultarElementos(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function mostrarElementos(){
    munieco.classList.remove("ocultar");
    h3.classList.remove("ocultar");
    parrafo.classList.remove("ocultar");
}


/*function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        
        if (texto[i] == "a"){
            textoFinal += "ai" ;
        }else if (texto[i] == "e"){
            textoFinal += "enter" ;
        }else if (texto[i] == "i"){
            textoFinal += "imes" ;
        }else if (texto[i] == "o"){
            textoFinal += "ober" ;
        }else if (texto[i] == "u"){
            textoFinal += "ufat" ;
        }
        else {
            textoFinal += texto[i];
        }
        
    };
    
    return textoFinal;
}
*/
function encriptarTexto(mensaje) {
    var texto = mensaje.trim();
    if (/[A-ZáéíóúÁÉÍÓÚ]/.test(texto)) {
        window.alert("El texto debe estar en minúsculas y sin acentos.");
        return "El texto debe estar en minúsculas y sin acentos.";
    }
    var textoFinal = "";
    
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
      
        // Reemplazar según las reglas
        if (char === "a") {
            textoFinal += "ai";
        } else if (char === "e") {
            textoFinal += "enter";
        } else if (char === "i") {
            textoFinal += "imes";
        } else if (char === "o") {
            textoFinal += "ober";
        } else if (char === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += char;
        }
    }

    
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            i++;
            textoFinal += "a" ;
        }else if (texto[i] == "e"){
            i+=4;
            textoFinal += "e" ;
        }else if (texto[i] == "i"){
            i+=3;
            textoFinal += "i" ;
        }else if (texto[i] == "o"){
            i+=3;
            textoFinal += "o" ;
        }else if (texto[i] == "u"){
            i+=3;
            textoFinal += "u" ;
        }
        else {
            textoFinal += texto[i];
        }
        
    };
    
    return textoFinal;
}
        


