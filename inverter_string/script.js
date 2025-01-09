
// Inverter_string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Testando o programa
const texto = "Front-End";
console.log(reverseString(texto));
// Saida que obtive "dnE-tnorF"