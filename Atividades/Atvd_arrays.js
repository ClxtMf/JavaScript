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

---------------------------------------------------------
    
    function qst1 (preco1, preco2, preco3) {

    let precos = [preco1, preco2, preco3];
    precos[1] = precos[1] * 0.9;
    
    console.log(precos)
}

qst1(123, 150, 40);

----------------------------------------------------------
let carrinho = ['Monitor', 'Mouse', 'Teclado']

for (let i = 0; i < carrinho.length; i++) { // i = 0 1 2 3
    if (carrinho[1] == 'Monitor') {
        console.log('tem monitor no carrinho')
    } 
    console.log(carrinho[i]); // carrinho[0] carrinho [1] carrinho[2]
}

-------------------------------------------------------------
    
let array = [10, 2, 3, 5, 7, 18, 21, 22, 26]

let qtdPares = 0;
for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
        qtdPares++;
    }
}

console.log(`Quantidade de pares: ${qtdPares}`);

--------------------------------------------------------------

let array = [10, 20, 30, 40, 50];
console.log(array);

// como add um item ao final do array
array.push(60);
console.lof(array)

// como remover o ultimo item do array
array.pop();
console.log(array);

-----------------------------------------------------------------
    
let array = [10, 20, 30, 40, 50];
console.log(array);

// como add o primeiro item do array
array.unshift(15);
console.log(array);

// como remover o primeiro item do array
array.shift();
console.log(array);

----------------------------------------------------------------

let array = [10, 20, 30, 40, 50];
console.log(array);

// como add em qualquer posição possível do array
// modos
// 0-> inserir
// 1-> apagar
// splice (indice, <modo>, <valor>)
array.splice(2, 0, 333)
console.log(array);

// como excluir em qualquer posição possivel
array.splice(4, 1);
console.log(array);
