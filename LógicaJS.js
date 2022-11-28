<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LógicaJS</title>
</head>
<body>
        <!-- Comentários -->
        <script type="text/javascript">
            // Comentário de uma linha
    
            /*
            Comentário de 
            multiplas linhas
            */
    
            //alert('olá mundo');
        </script>
    
        <!-- Váriaveis -->
        <script type="text/javascript"> 
    
            //var valor_1 = 10;
    
            //var nome = 'Infinity';
            
            // Variáveis com var podem ser
            // redeclaradas
            //var nome = 20;
    
            // alert("Nome do aluno: " + nome);
    
            /*
            Variáveis com let não podem
            ser redeclaradas
            mas podem ser acessadas por
            seu nome
            */
            let nome = 'Infinity';
    
            nome = 'Infinity school';
    
            let soma = 5 + 7;
    
            /*
            variáveis com const
            não podem ter seu valor alterado
            */
            const PI = 3.1415;
    
        </script>
    
        <!-- Operadores Lógicos
        +
        -
        /
        *
        **
        %
        ++
        --
        -->
</body>
</html>

----------------------------------------------------------------------------------------------------------
-Html-
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

-JS-

// let or const, ambas não podem ser declaradas.

let nome = 'infinity';

nome = 'infinity school'

// variáveis com const não podem ser ter o seu valor alterado.

const PI = 3.141516 // não pode ter o valor alterado.

/* 
Números inteiros(inteiros, flutuantes)
Texto(strings)
Booleanos(True or False)
*/

// console.log(typeof 1);
// console.log(typeof 1.14);
// console.log(typeof true);
// console.log(typeof 'Infinity')

// let valor = '1.15';
// valor = Number(valor);

// let resultado = valor + 10; //1.1510

// console.log(`O resultado é: ${resultado}`); //1.1510
// console.log('O resultado é: ' + resultado); //1.1510


const opcao = confirm('Deseja alterar os dados? ');
alert(`Opção escolhida ${opcao}`);


const valor1 = Number(prompt('Digte o primeiro valor: '));

const valor2 = Number(prompt('Diigte o segundo valor: '));

let resultado = valor1 + valor2;

alert(`Ò resultado da soma é: ${resultado}`);
