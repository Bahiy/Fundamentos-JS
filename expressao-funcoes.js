// Declaração de função
function minhaFuncao(param) {
    // Bloco de código
}
minhaFuncao("param");

// Expressão de função

const soma = function (num1, num2) { return num1 + num2 };

console.log(soma(3, 2));

// Diferença principal

console.log(apresentar());
// Funciona com Hoisting (gancho, içamento)
function apresentar(){
    return "olá";
}

console.log(somaTeste(3, 2));
// Não funciona se não for de forma de cronológica
const somaTeste = function (num1, num2) { return num1 + num2 };


