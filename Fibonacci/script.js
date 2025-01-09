// Fibonacci
function isFibonacci(f) {

    let a = 0
    let b = 1

    while (b < f) {
        let temp = a + b
        a = b
        b = temp
    }

    if (b === f || f === 0) {
        return true
    } else {
        return false
    }

}

const numero = 21;

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
// resultado que obtive no terminal => 21 pertence à sequência de Fibonacci.
