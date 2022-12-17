// 1. Escreva uma função que lê dois números e informa a soma dos dois
function questao1() {
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Diigte o segundo número: '));

    let resultado = num1 + num2;

    console.log(`O resultado da soma é: ${resultado}`)
}
questao1()

// 2. Escreva uma função que lê dois números e informe qual é o maior ou se eles são iguais

function questao2() {
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Diigte o segundo número: '));

    if (num1 > num2) {
       console.log(num1) 
    } else if (num2 > num1) {
        console.log(num2)
    } else {
        console.log('Os valores são iguais')
    }
}
questao2()

// 3. Escreva uma função que lê um número e informa se ele é par ou ímpar

function questao3() {
    let num = Number(prompt('Digite um número: '))

    if (numero % 2 == 0) {
        console.log('Par')
    } else {
        console.log('impar')
    }
}
questao3()

// 4. Escreva uma função que lê o salário de um funcionário e informa o mesmo salário com um 
// aumento de 15%

function questao4() {
    let salario = Number(prompt('Digite o seu salário: '));

    salario = salario * 1.5;

    console.log(salario);
}
questao4()

// 5. Escreva uma função que imprima todos os números 
// inteiros de 0 a 100.

function questao5() {
    for(let i = 0; i <= 100; i++) {
        console.log(i)
    }
}
questao5()
