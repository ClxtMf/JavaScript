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

/*
function <nome>(<argumentos>) {
    <código>
}

-> chamando uma função
<nome>(<argumentos>);
*/

function autenticar() {
    let usuario = prompt('Digite o seu usuário: ');
    let senha = prompt('Digite a sua senha: ');
    if (usuario == 'admin' && senha == '123') {
        alert('Dados confirmados!');
    }
    else {
        alert('Dados incorretos!');
    }
}
// alterando o endereço
autenticar();

// mudar a foto
autenticar();

// apagar a conta
autenticar();

---------------------------------------------------------------------------------------------

1. Crie uma função que leia a distancia percorrida e o consumo do veiculo. Em seguida calcule quantos lts de gasolina o veiculo gastou na viagem.

function calculoConsumo(){
    let distancia = Number(prompt('Digite a distância percorrida:'));
    let consumo = Number(prompt('Informe o consumo do veiculo:'));

    let consumoTotal = distancia / consumo;
    alert(`Seu veiculo gastou ${consumoTotal}lts`);
}

calculoConsumo();
*****************************************************************************************************
2. Crie uma função que calcula a velocidade média de um veiculo. Para isso leia a distancia e o tempo da viagem. 

function velocidadeMedia() {
    let distancia = Number(prompt('Informe a distância percorrida:'))
    let tempo = Number(prompt('Informe o tempo da viagem: '))

    let velocidadeMedia = distancia / tempo;

    alert(`Velocidade Média: ${velocidadeMedia}km/h`);
}

velocidadeMedia();
***********************************************************************
3. Crie uma função que leia base maior, base menor, altura. E em seguida calcule a área de um trapézio. 
area = (base maior + base menor) * altura / 2

function calcTrapezio() {
    let baseMaior = Number(prompt('Informe a base maior:'));
    let baseMenor = Number(prompt('Digite a base menor:'));
    let altura = Number(prompt('Digite a altura do trapézio:'));

    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
    alert(`Área do trapézio = ${areaTrapezio}`);
}

calcTrapezio();

*********************************************************************

4. Crie uma função que imprima uma sequencia de números de 0 a 50. Utilize o laço for

function contagem() {
    for(let i = 0; i <= 50; i++) {
        console.log(i);
    }
}

contagem();
************************************************************************

// 1. Crie uma função que leia a distancia percorrida e o consumo do veiculo. Em seguida calcule quantos lts de gasolina o veiculo gastou na viagem.
// Criando a função com parâmetros
function calcConsumo(distancia, consumo) { 
    // distancia = 240 consumo = 12
    let consumoTotal = distancia / consumo;
    alert(`Consumo total = ${consumoTotal}lts`);
}

calcConsumo(240, 12);

***********************************************************************************

// 2. Crie uma função que calcula a velocidade média de um veiculo. Para isso leia a distancia e o tempo da viagem. 

function velocidadeMedia(distancia, tempo) {
    let velocidade = distancia / tempo;
    alert(`Velocidade Média: ${velocidade}km/h`);
}

velocidadeMedia(200, 2);

***********************************************************************************

1. Crie uma função que recebe três parâmetros: base maior, base menor, altura. Em seguida calcule e exiba a área do trapézio. 

function calcArea(baseMaior, baseMenor, altura) {
    let areaTrapezio = ((baseMaior + baseMenor) * altura) / 2;
    alert(`Área do trapézio = ${areaTrapezio}`);
}

let base_maior = 8;
let base_menor = 5;
let height = 4;
calcArea(base_maior, base_menor, height);

************************************************
1. Criue uma função que recebe 3 parametros (2 inteiros e um real) em seguida calcule e mostre.
a. O produto (multiplicação) do dobro do primeiro com a metade do segundo
b. A soma do triplo do primeiro com o terceiro
c. O terceiro ao cubo

****************************************************************

// Criando uma função com retorno
function calculoConsumo(distancia, consumo) {
    let consumoTotal = distancia / consumo
    return consumoTotal; // 20
}


let consumoViagem = calculoConsumo(240, 12); // 20
alert(consumoViagem);
*******************************************************************

// Crie uma função que recebe duas notas por parâmetro e retorne aprovado se a média for maior que 6 e recuperação senão.

// function calcularMedia(nota1, nota2) {
//     let media = (nota1 + nota2) / 2;
//     if (media >= 6) {
//         return 'aprovado';
//     }
//     else {
//         return 'recuperação';
//     }
// }
// let resultado = calcularMedia(6, 6);
// alert(resultado);

// Crie uma função que recebe três números como parâmetro e retorne o maior deles
// function verificaMaior(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return num1;
//     } else if (num2 > num1 && num2 > num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// let maiorNumero = verificaMaior(10, 2, 7);
// alert(maiorNumero);

// Crie uma função que recebe a idade e um booleano indicando se o usuário tem cnh. Se o usuário possuir cnh e for maior de idade retorne “voce pode dirigir” senão, retorne "você não pode dirigir.

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        return "Pode dirigir";
    }
    else {
        return "Você não pode dirigir";
    }
}
let habilitado = podeDirigir(18, true);
alert(habilitado);
*************************************************************************************


// const areaQuadrado = (lado) => {
//     return lado ** 2;
// }

// // chamando uma arrow function

// alert(areaQuadrado(5));

// const areaTriangulo = (base, altura) => {
//     let area = base * altura / 2;
//     return area;
// }

// alert(areaTriangulo(5, 8));

// funções de escopo simples não precisam de return nem chaves
const areaQuadrado = (lado) => lado ** 2;
alert(areaQuadrado(5));
----------------------------------------------------------------------------------------------
1. Crie uma função que leia a distancia percorrida e o consumo do veiculo. Em seguida calcule quantos lts de gasolina o veiculo gastou na viagem. Utilize arrow function

const calculoConsumo = (distancia, consumo) => {
    return distancia / consumo;
}
alert(calculoConsumo(240, 12));

*********************************************************************************
2. Crie uma função que calcula a velocidade média de um veiculo. Para isso leia a distancia e o tempo da viagem. Utilize arrow function

const calculoVelocidade = (distancia, tempo) => {
    return distancia / tempo;
}

alert(calculoVelocidade(200, 2));

------------------------------------------------------------------------------------

// const areaQuadrado = (lado) => {
//     area = lado ** 2;
//     return area
// };

// function areaQ(lado) {
//     let area = lado ** 2;
//     return area;
// };

// let areaQuad = areaQ(5);
// console.log(areaQuad);




// 1. Crie uma arrow function que recebe o tempo e a velocidade media percorrida por parâmetro. 
// Em seguida calcule o consumo de combustivel realizado nessa viagem, levando em consideração 
// que o veiculo faz 12km/l. Retorne este resultado e exiba no console ou no alert.

const consumoCombustivel = (tempo, velocidadeMedia) => {
    let distancia = tempo * velocidadeMedia;
    let qtdlitros = distancia / 12;
    return qtdlitros;
};

alert(consumoCombustivel(2, 200))

// 2. Dois carros partiram do mesmo ponto ao mesmo tempo, onde o carro x estava a 90km/h e o carro y estava a 60km/h. 
// Após uma hora de viagem o carro x estava 30km de distancia a frente, ou seja. O carro x se distanciava 1km a cada 2min. 
// Crie uma arrow function que recebea distancia em km e retorne quantos minutos demorou para ele chegar a essa distancia 

const calculoMinutos = (distancia) => {
    let tempo = distancia * 2;
    return tempo;
}

console.log(`Tempo necessário = ${calculoMinutos(120)} minutos`);


// DESAFIO 

// Crie uma arrow function que recebe um valor por parâmetro e retorne a quantidade de notas de 
// 100, 50, 20, 10, 5, 1 necessárias para gerar esse valor. 

// Math.floor(<divisão>)
