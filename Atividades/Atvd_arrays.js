//                 0         1           2
let carrinho = ['Mouse', 'Monitor', 'Teclado'];
console.log(carrinho);
console.log(typeof carrinho);

// como acessar um item em um array
console.log(carrinho[0]);


// como modificar o item de um array
carrinho[0] = 'Mouse logitec 800dpi'
console.log(carrinho);

// propriedades de um array
console.log(`Qts de itens no carrinho: ${carrinho.length}`);

console.log(`Ultimo item do array: ${carrinho[carrinho.length - 1]}`);

---------------------------------------------------------

let numeros = [10, 20, 30, 40, 50];

// percorrendo um array
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
// i   numeros[i]          i++
// 0   numeros[0] = 10     1
// 1   numeros[1] = 20     2
// 2   numeros[2] = 30     3
// 3   numeros[3] = 40     4
// 4   numeros[4] = 50     5
// 5   --------------      -


--------------------------------------------------------

let numeros = [10, 20, 30, 40, 50];

for (indice in numeros) {
    console.log(numeros[indice]);
}

-----------------------------------------------------------

// Considere o seguinte array [10, 15, 17, 22, 9, 4]. Escreva um algoritmo que percorra o array e conte a quantidade de números pares nela. (você precisará usar contadores). Ao final exiba essa quantidade.
let itens = [10, 15, 17, 22, 9, 4]
let pares = 0;
for (let i = 0; i < itens.length; i++) {
    if (itens[i] % 2 == 0) {
        pares++;
    }
}
console.log(`Quantidade de pares = ${pares}`);

--------------------------------------------------------------

// Considere o seguinte array de notas [5.5, 6, 4.3, 7, 3.2, 8.2]. Crie um algoritmo que percorra esse array. E caso encontre alguma nota abaixo da média (média = 6), acrescente mais um ponto neste item. Ao final, exiba o array no console.
let notas = [5.5, 6, 4.3, 7, 3.2, 8.2]
console.log(`Notas antes = ${notas}`);
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6){
        notas[i]++;
    }
}
console.log(`Notas depois = ${notas}`);

-----------------------------------------------------------------------

let dadosDoAluno = [];
let nome = prompt('Informe o seu nome: ');

// adicionando um item no array
dadosDoAluno.push(nome);
alert('Dado adicionado com sucesso!');
alert(`Dados do aluno = ${dadosDoAluno}`);

let idade = Number(prompt('Digite a sua idade: '));
// Adicionando mais um item no array
dadosDoAluno.push(idade);
alert('Dado adicionado com sucesso!');
alert(`Dados do aluno = ${dadosDoAluno}`);

let curso = prompt('Digite o seu curso: ');
// Adicionando o curso ao array
dadosDoAluno.push(curso);
alert('Dado adicionado com sucesso!');
alert(`Dados do aluno = ${dadosDoAluno}`);

dadosDoAluno.pop();
alert('Dados removidos com sucesso!');
alert(`Dados do aluno = ${dadosDoAluno}`);
