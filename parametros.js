// Parametros de função

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(23, 24));

// Parametros x Argumentos

// Ordem dos Parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e eu tenho ${idade}`
}

// Cuidados com a ordem dos parametros
console.log(nomeIdade(21, "victor"));

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2
}

console.log(multiplica(soma(2,), soma(34, 2)))