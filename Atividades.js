//introdução as atividades...

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS ATVD</title>
</head>
<body>
    <script type="text/javascript">
        const user = prompt('Digite seu usuário: ')

        const senha = prompt('Digite sua senha: ')

        const texto = user === 'admin' && senha === 'infinity' ?
        'Você está autenticado' : 'Dados incorretos';

        alert(texto);
    </script>
</body>
</html>

---------------------------------------------------------------------------------------------------------------
-html-

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS aula 02</title>
    <script src="script.js"></script>
</head>
<body>
    
</body>
</html>

-javascript-

//Recebendo o salário digitado pelo usuário
const salario = Number(prompt('Digite o seu salário: '));

//Aplicando o aumento de 20% ao salário
let novo_salario = salario * 1.2;

//Exibindo o novo salário
alert(`Seu novo salário: ${novo_salario}`);

//Leia três notas, calcule sua média e a exiba para o usuário

//lendo as três notas
const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const nota3 = Number(prompt('Digite a terceira nota: '));

//calculando a média
let media = (nota1 + nota2 + nota3) / 3;

//exibindo a média
alert(`Sua média é: ${media.toFixed(2)}`);

//Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)
area = lado ** 2

//lendo o valor do lado
const lado = Number(prompt('Digite o valor do lado do quadrado: '));

//calculando a área
let area = lado ** 2;

//exibindo a área
alert(`Área do quadrado é: ${area}`);

//Leia base e altura de um triângulo e calcule sua área

//lendo base e altura
const base = Number(prompt('Digite o valor da base: '));
const altura = Number(prompt('Digite o valor da altura: '));

//calculando a área
let area = (base * altura) / 2

//exibindo a área
alert(`Área do triângulo: ${area.toFixed(2)}`);


//Leia o raio de um círculo e calcule sua área

//declarando pi
const pi = 3.14;
//lendo o raio
const diametro = Number(prompt('Digite o valor do diâmetro: '));
raio = diâmetro / 2;

// //calculando a área
let area = pi * (raio ** 2);

//exibindo a área
alert(`Área do círculo: ${area.toFixed(2)}`);


//Programa de escola (ganho de pontos)

let nota = Number(prompt('Digite sua nota: '));
const faltas = Number(prompt('Digite seu número de faltas: '));

if (faltas <= 2) {
    alert('Oba!!! Você ganhou um ponto.')
    nota = nota + 1;
    //nota += 1;
    //nota++;
}
alert(`Sua nota final é: ${nota.toFixed(2)}`);


