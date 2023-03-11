// // Como criar um objeto
let aluno = {
    // Como criar um item
    // chave:valor
    matricula: 10,
    nome: 'Márcio Calisto',
    curso: 'Full Stack',
    nota: 10,
    dizerOla: function () {
        console.log('Olá :)');
    }
};

console.log(typeof aluno);
console.log(aluno.matricula);
console.log(aluno.nota);
// Como chamar a função
aluno.dizerOla();

// Criando uma nova prioridade
// Chamando faltas
aluno.faltas = 5;
console.log(aluno.faltas);

//////////////////////////////////////////

/*
1. Leia código, nome e preço de um produto
2. Em seguida crie um objeto com esses três dados que você leu
3. Ao final do programa exiba o objeto
 */

let produto = {
    codigo: prompt('Digite o código do produto: '),
    nome: prompt('Digite o nome do produto: '),
    preco: prompt('Digite o preço do produto: ')

};

console.log(produto)

//////////////////////////////////////////

let pessoa = {
    nome: 'Márcio',
    profissao: 'Garoto de programa',
    idade: 17
};

console.log(pessoa.nome);
pessoa.nome = 'Márcio Calisto';
console.log(pessoa.nome);

// Criando uma nova propriedade
pessoa.linguagem = 'Python';
console.log(pessoa.linguagem);

delete pessoa.linguagem
console.log(pessoa);

//////////////////////////////////////////

let onibus = {
    rodas: 8,
    limiteP: 40,
    portas: 2
};

console.log(onibus);

//////////////////////////////////////////

let objA = {
    propriedade1: 'valor1',
    propriedade2: 'valor2'
};

let objB = {
    propriedade3: 'valor3'
};

// Copiando propriedades de um objeto para o outro
// função assign
Object.assign(objA,objB);
console.log(objA);

//////////////////////////////////////////

let aluno2 = {
    matricula: 1,
    nome: 'Márcio Calisto',
    curso: 'Dev Full Stack'
};

// Criando os objetos que vão conter as disciplinas por cursos
let DevFullStack = {
    disciplinas: ['Lógica', 'POO', 'Prog. Web']
};

let design = {
    disciplinas: ['Teoria das cores', 'Vetores', 'Photoshop']
};

// Verificando o curso do aluno
if (aluno.curso == 'Dev Full Stack') {
    Object.assign(aluno, DevFullStack);
} else { Object.assign(aluno, design);
};

console.log(aluno2);

// Como visualizar todas as cahves de um objeto
console.log(Object.keys(aluno2));

for (let i = 0; i < Object.keys(aluno2).length; i++) {
    console.log(Objectcc.keys(aluno)[i]);
}

//////////////////////////////////////////

// Crie um objeto chamado 'Produto' com as seguintes propriedades:
// - Nome (string)
// - Preço (number)
// - Disponivel (Boolean) 

// Add os valores que desejar, em seguida crie uma função que será responsavel por alterar a disponibilidade do produto.

let produto2 = {
    nome : 'Mouse',
    preco : 49.90,
    disponivel : true,
    alterardisponibilidade : function () {
        produto2.disponivel = !produto2.disponivel;
    }
}

function alterarDisponibilidade () {
    produto2.disponivel = !produto2.disponivel;
}

//////////////////////////////////////////

const aluno3 = {
    nome: 'Márcio Calisto',
    profissao:'Garoto de programa',
    idade: 17
};

// Desestruturando o objeto
let {nome, profissao, idade} = aluno;

console.log(nome);

//////////////////////////////////////////

// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
// Os métodos só devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console;

const calculadora = {
    somar: function(a, b) {
        return a + b;
    },

    subtrair: function(a, b) {
        return a - b;
    },

    multiplicar: function(a, b) {
        return a * b;
    },

    dividir: function(a, b) {
        return a / b;
    }
};

console.log(calculadora.somar(5, 10));
console.log(calculadora.subtrair(5, 10));
console.log(calculadora.multiplicar(5, 10));
console.log(calculadora.dividir(5, 10));
