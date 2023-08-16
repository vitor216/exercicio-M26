function Multiplica (num1: number, num2: number) {
    const resultado: number = num1 * num2;
    return resultado;
}

function ExibirNome (nome: string) {
    const GardarNome: string = "Olá "+nome;
    return GardarNome;
}

const numeros: number = Multiplica (3, 3);
const PrimeiroNome: string = ExibirNome ("vitor");
const SegundoNome: string = ExibirNome ("Nicolas");
console.log(numeros);
console.log(PrimeiroNome);
console.log(SegundoNome);