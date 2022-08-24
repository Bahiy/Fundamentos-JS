function apresentar(nome) {
    return `Meu nome é ${nome}`;
};

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(soma(2,4));

// Arrow Function com + de 1 linnha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return `Somente numeros de 1 a 9`;
    } else {
        return num1 + num2;
    }
}

// Hoisting: Arrow Function se comporta como expressão