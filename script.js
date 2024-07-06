// script.js

// Función para encriptar texto utilizando el cifrado César
function encryptText() {
    const inputText = document.getElementById('input-text').value;
    const shift = 3; // Número de posiciones a desplazar en el cifrado César
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        // Verificar si el carácter es una letra
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);

            // Letras mayúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        encryptedText += char;
    }

    document.getElementById('output-text').value = encryptedText;
}

// Función para desencriptar texto utilizando el cifrado César
function decryptText() {
    const inputText = document.getElementById('output-text').value;
    const shift = 3; // Número de posiciones a desplazar en el cifrado César
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        // Verificar si el carácter es una letra
        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);

            // Letras mayúsculas
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            }
            // Letras minúsculas
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }

        decryptedText += char;
    }

    document.getElementById('output-text').value = decryptedText;
}

// Función para copiar el texto resultante al portapapeles
function copyText() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}