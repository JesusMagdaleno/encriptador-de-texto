const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
function btn_encriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btn_desencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptar){
    let matrizReglas = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizReglas.length; i++){
        if (stringEncriptar.includes(matrizReglas[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizReglas[i][0],matrizReglas[i][1]);
            
        }

    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizReglas = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizReglas.length; i++){
        if (stringDesencriptar.includes(matrizReglas[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizReglas[i][1],matrizReglas[i][0]);
            
        }

    }
    return stringDesencriptar;
}

function copiar() {
    const textoCopiar = document.querySelector(".mensaje");
    textoCopiar.select();
    document.execCommand('copy');
    
    
}