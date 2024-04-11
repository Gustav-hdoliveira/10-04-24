const readlineSync = require('readline-sync');
let numero
let soma = 0
while (numero !== 0) {
    numero = number(readlineSync.question("Digite o numero: "));
    soma += numero
}
console.log(soma)