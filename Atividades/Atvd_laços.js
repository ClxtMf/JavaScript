/**
 * Laço de repetições 
 * - contador ok
 * - condição ok
 * - incremento ok
  
    for (let i = 0; i < 10; i++) {
    console.log(`Valor de i: ${i}`)
    }

 */

// 1. Faça um programa que leia a nota de N alunos, em seguida exiba a média das notas.

let qtd_notas = Number(prompt('Informe quantas notas você deseja inserir: '));

let soma_notas = 0; // acumulador que somará as notas

for(let i = 0; i < qtd_notas; i++) {
    // pedindo uma nota ao usuário
    let nota = Number(prompt('Digite uma nota: '));

    // guardando as notas em um acumulador
    soma_notas = soma_notas + nota;
}
// realizando a média
let media = soma_notas / qtd_notas;

// exibindo média
console.log(`Média de notas: ${media.toFixed(2)}`)

// 2. Faça um programa que receba 5 números e usando laços de repetição calcule e mostre
// a quantidade de números entre 30 e 90.

// criando um contador para as contas
// os números entre 30 e 90
let qtd_numeros = 0;

for (let i = 0; i < 5; i++){ 
    let num = Number(prompt('Digite um número: '));
    // verificando se o número está dentro do intervalo
    if(num >= 30 && num <= 90) {
        qtd_numeros++;
    }
}
console.log(`Quantidade: ${qtd_numeros}`)

// 3. Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior
// a loja B (faturamento = 54000).  Se o faturamento atingir esse valor mostre na tela uma
// mensagem contendo em quanto foi superado o faturamento.

let faturamento = 0;

for(let i = 0; i < 5; i++) {
    // lendo o valor da compra
    let valor_compra = Number(prompt('Digite o valor da compra: '));

    faturamento = faturamento + valor_compra;
    // faturamento += valor_compra;
}

// verificando se bateu o faturamento da loja b

if(faturamento >= 54000){
    console.log(`Superou em: ${faturamento - 54000}`);
} else{
    console.log('Não superou')
}

// 4. Faça um programa que receba um número e usando laços de repetição calcule e mostre
// a tabuada desse número.

let tabuada = Number(prompt("Digite o valor da tabuada: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X ${tabuada} = ${i * tabuada}`);
}

// 5. Faça um programa para calcular n! (Fatorial de n), 
// sendo que o valor inteiro de n é fornecido pelo usuário. 
// Sabe-se que: N! = 1 * 2 * 3 * … (n – 1) * n 0! = 1, por definição;  

let fat = Number(prompt('Digite o fatorial desejado:'));

// "acumulador" que irá multiplicar os fatoriais
let resultado = 1;

if (fat == 0) {
    console.log('Fatorial é: 1');
}
for (let i = 1; i <= fat; i++) {
    resultado = resultado * i;
}
console.log(`Resultado: ${resultado}`);
