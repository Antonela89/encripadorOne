var text = document.getElementById("input");
var transcripcion = document.getElementById("transcripcion");

const contenedorImg = document.getElementById("contenedor-img");
const contenedorTexto = document.getElementById("contenedor-transcripcion");

function validacion(text) {
    const expresion = /[^a-zA-Z0-9\s\!]|[A-Z]/g;
    return expresion.test(text.value);
}

function encriptar(text, transcripcion) {
    let esValido = validacion(text);
    if (esValido) {
        alert(`El encriptador sólo acepta palabras minúsculas. 
Por favor ingrese un texto válido`)
    } else {
        contenedorImg.style.opacity = "0";
        contenedorTexto.style.opacity = "1";
        contenedorTexto.style.zIndex = "1"
        let arrayText = text.value.split("");
        let newText = "";

        for(let i = 0; i < arrayText.length; i++) {
        if (arrayText[i] == "a") {
            arrayText[i] = "ai"
        } else if (arrayText[i] == "e") {
            arrayText[i] = "enter"
        } else if (arrayText[i] == "i") {
            arrayText[i] = "imes";
        } else if (arrayText[i] == "o") {
            arrayText[i] = "ober";
        } else if (arrayText[i] == "u") {
            arrayText[i] = "ufat";
        }
        }
    newText = (arrayText.join()).replaceAll(",","");
    transcripcion.value = newText;
    }
}

function desencriptar(text, transcripcion) {
    let esValido = validacion(text);
    let texto = text.value;

    if (esValido) {
        alert(`El encriptador sólo acepta palabras minúsculas. 
Por favor ingrese un texto válido`)
    } else {

        contenedorImg.style.opacity = "0";
        contenedorTexto.style.opacity = "1";

        if (texto.includes("ai")) {
            texto = texto.replaceAll("ai","a");
        }
        if (texto.includes("enter")) {
            texto = texto.replaceAll("enter","e");
        }
        if (texto.includes("imes")) {
            texto = texto.replaceAll("imes","i");
        }
        if (texto.includes("ober")) {
            texto = texto.replaceAll("ober","o");
        }
        if (texto.includes("ufat")) {
            texto = texto.replaceAll("ufat","u");
        }

        transcripcion.value = texto; 
    }
}

// function copiar() {
//     let transcripcion = document.getElementById("transcripcion");

//     transcripcion.select();
//     document.execCommand('copy'); // obsoleto

//     alert("¡Texto copiado!")
// }

function copiar(text, transcripcion) {
    transcripcion.select();
    
    navigator.clipboard.writeText(transcripcion.value).then(() => {
    alert("¡Texto copiado!");
    text.value = transcripcion.value;
    transcripcion.value = "";
    })
    .catch(() => {
    alert("Algo salió mal... Intente nuevamente");
    });
}

function limpiar(text, transcripcion) {
    text.value = "";
    transcripcion.value = "";
    contenedorTexto.style.opacity = "0";
    contenedorImg.style.opacity = "1";
}
