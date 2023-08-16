"use strict";
function Multiplica(num1, num2) {
    const resultado = num1 * num2;
    return resultado;
}
function ExibirNome(nome) {
    const GardarNome = "Olá " + nome;
    return GardarNome;
}
const numeros = Multiplica(3, 3);
const PrimeiroNome = ExibirNome("vitor");
const SegundoNome = ExibirNome("Nicolas");
console.log(numeros);
console.log(PrimeiroNome);
console.log(SegundoNome);
