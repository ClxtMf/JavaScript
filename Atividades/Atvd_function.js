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


// Relembrando aula passada

/**
 * function <nome> (<argumento>){
 *     <código>
 * }
 * 
 * -> chamando função
 * <nome> (<argumento>);
 */


// Alterando endereço
// function autenticar() {
//     let usuario = prompt('Digite o seu usuário: ');
//     let senha = prompt('Digite sua senha: ');

//     if(usuario == 'admin' && senha == '1234') {
//        alert('dados confirmados!!!')
//     } else {
//        alert('Dados incorretos!')
//     }
// }

//Alterando foto
// autenticar()
//Solicitar apagar conta
// autenticar()
//Alterando endereço
// autenticar()


// Aula 05 - 710

// 1. Crie uma função que leia a distancia percorrida e o consumo do veiculo. Em seguida calcule quantos lts de gasolina o veiculo gastou na viagem.

function lts_gasolina() {
    let distancia = Number(prompt('Digite a distancia percorrida pelo carro: '));
    let consumo = Number(prompt('Digite o consumo por km do carro: '));

    let consumoTotal = distancia/consumo;
    alert(`Seu veiculo gastou ${consumoTotal}`);
}
lts_gasolina()

// 2. Crie uma função que calcula a velocidade média de um veiculo. Para isso leia a distancia e o tempo da viagem. 

function velocidadeMedia() {
    let distancia = Number(prompt('Informe a distancia percorrida: '))
    let tempo = Number(prompt('Informe o tempo da viagem: '))

    let velocidaMedia = distancia/tempo;
    alert(`Velocidade média: ${velocidaMedia}km/h`)
}
velocidadeMedia()

// 3. Crie uma função que leia base maior, base menor, altura. E em seguida calcule a área de um trapézio. 
// area = (base maior + base menor) * altura / 2

function calcTrapezio() {
    let baseMaior = Number(prompt('Informe a base maior: '))
    let baseMenor = Number(prompt('Infomer a base menor: '))
    let altura = Number(prompt('Informe a altura do trápezio: '))

    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
    alert(`Área do trapézio = ${areaTrapezio}`);
}
calcTrapezio()

// 4. Crie uma função que imprima uma sequencia de números de 0 a 50. Utilize o laço for

function contagem() {
    for(let i = 0; i <= 50; i++) {
        console.log(i);
    }
}
contagem();




//   parâmetros ou argumentos

// 01 -  parâmetros
function calcConsumo(distancia, consumo) {
    let consumoTotal = distancia/consumo;
    alert(`Consumo total = ${consumoTotal}lts`);
}
calcConsumo(240, 12);

// 02 - parâmetros
function velocidadeMedia(distancia, tempo) {
    let velocidade = distancia / tempo;
    alert(`Velocidade Média: ${velocidade}km/h`);
}
velocidadeMedia(200, 2);

// 03 - parãmetros
function calcTrapezio(baseMaior, baseMenor, altura) {
    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
    alert(`Área do trapézio = ${areaTrapezio}`);
}
calcTrapezio()
