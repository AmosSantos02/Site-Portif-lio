// Desafio 1 – Nome completo com saudação
// Peça o primeiro nome e o sobrenome do usuário usando prompt().
// Depois, exiba no console a seguinte mensagem:
// Olá, [NOME COMPLETO]! Seja bem-vindo(a)!
let botao = document.querySelectorAll("button");

function desafioNomeCompleto() {
    let nome = prompt("Digite abaixo o seu NOME COMPLETO");

    console.log("Olá, " + nome + " ! Seja bem-vindo(a)!");
}

// Desafio 2 - culadora de Pares e Ímpares
// Você deve criar uma função em JavaScript que receba um número inteiro positivo e retorne:
// Quantos números pares existem de 1 até esse número (inclusive).
// Quantos números ímpares existem no mesmo intervalo.
function contarParesImpares(numeroQuantosPares) {
    let pares = 0;
    let impares = 0;

    for (let i = 1; i <= numeroQuantosPares; i++) {
        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    return { pares: pares, impares: impares };
}
function iniciarContagemParesImpares() {
    alert("A execução dessa função, mostrará a você a quantidade de números pares e ímpares que tem o número que você colocar a seguir, vamos lá?");
    let numeroQuantosPares = parseInt(prompt("Digite aqui um número para calcularmos"));
    let resultadoContagemParesImpares = contarParesImpares(numeroQuantosPares);
    alert(`Pares = ${resultadoContagemParesImpares.pares} | Impares = ${resultadoContagemParesImpares.impares}`);
}

// Desafio 3 – Calculadora simples
// Peça dois números via prompt().
// Peça também uma operação matemática (+, -, *, /).
// Faça a operação correspondente e mostre o resultado com alert().
function desafioCalculadora() {
    let resultado;
    let numero1 = prompt("Coloque aqui o primeiro número.");
    let operador = prompt("Que tipo de operação você quer fazer? (+, -, *, /)");
    let numero2 = prompt("Coloque aqui o segundo número.");
    if (operador === "-") {
        resultado = parseInt(numero1) - parseInt(numero2);
    } else {
        if (operador === "+") {
            resultado = parseInt(numero1) + parseInt(numero2);
        }
        if (operador === "*") {
            resultado = parseInt(numero1) * parseInt(numero2);
        }
        if (operador === "/") {
            resultado = parseInt(numero1) / parseInt(numero2);
        }
    }
    alert(resultado);
    console.log(resultado);
}

// Desafio 4 – Conversor de minutos para horas e minutos
// Peça uma quantidade de minutos via prompt().
// Converta o total em horas e minutos (exemplo: 135 minutos = 2 horas e 15 minutos).
// Mostre o resultado no console com console.log().
function desafioConversorHoras() {
    let selecionarMinutos = prompt("Coloque aqui a quantidade de minutos");
    let minutos = selecionarMinutos % 60;
    let palavraMinuto = minutos > 1 ? "minutos" : "minuto";
    let horas = Math.floor(selecionarMinutos / 60);
    alert(`${horas} horas e ${minutos} ${palavraMinuto}`);
    console.log(`${horas} horas e ${minutos} ${palavraMinuto}`);
}

// Desafio 5 – Par ou Ímpar (versão com operador %)
// Peça um número com prompt()
// Verifique se o número é par ou ímpar usando numero % 2
// Mostre o resultado com alert() ou console.log()
function desafioParImpar() {
    let pedirNumero = prompt("Digite aqui um número.");
    if (pedirNumero % 2 == 0) {
        alert(`O número escolhido (${pedirNumero}) é um número PAR`);
    } else {
        alert(`O número escolhido (${pedirNumero}) é um número ÍMPAR`);
    }
}

// Desafio 6 – Divisível por 3
// Peça um número com prompt()
// Verifique se ele é divisível por 3 usando numero % 3 === 0
// Mostre o resultado com alert() ou console.log()
function iniciarDivisivel3() {
    pedirNumero = prompt("Digite aqui um número.");
    if (pedirNumero % 3 == 0) {
        alert(`O número ${pedirNumero} é divisível por 3`);
    } else {
        alert(`O número ${pedirNumero} não é divisível por 3`);
    }
}

// Desafio 7 – Divisível por 5 e por 2
// Peça um número com prompt()
// Verifique se ele é divisível por 5 E por 2 ao mesmo tempo
// Use numero % 5 === 0 && numero % 2 === 0
// Mostre o resultado com alert() ou console.log()
function iniciarDivisivel2E5() {
    pedirNumero = prompt("Digite aqui um número.");
    divisor2 = pedirNumero / 2;
    divisor5 = pedirNumero / 5;
    if (pedirNumero % 2 === 0 && pedirNumero % 5 == 0) {
        alert(`O número ${pedirNumero} é divisível por 2 (${divisor2}) e 5 (${divisor5})`);
        console.log(`O número ${pedirNumero} é divisível por 2 (${divisor2}) e 5 (${divisor5})`);
    } else {
        alert(`O número ${pedirNumero} não é divisível por 2 e 5`);
        console.log(`O número ${pedirNumero} não é divisível por 2 e 5`);
    }
}

// Desafio 8 – Mostrar o resto de uma divisão
// Objetivo:
// Peça dois números ao usuário com prompt().
// Calcule e mostre o resto da divisão do primeiro número pelo segundo usando %.
function iniciarResto() {
    alert("Aqui mostraremos o RESTO de uma divisão!");
    let numero1 = prompt(`Para inciar, digite aqui o primeiro número.`);
    let numero2 = prompt(`Agora, digite aqui o segundo número.`);
    let resto = numero1 % numero2;
    console.log(`O resto da divisão de ${numero1} por ${numero2} é ${resto}`);
    alert(`O resto da divisão de ${numero1} por ${numero2} é ${resto}`);
}

// Desafio 9 – Dobro de um número
// Crie uma função que receba um número como parâmetro
// Retorne o dobro desse número
// Exiba o resultado com alert() e console.log()
function iniciarDobro() {
    alert("Aqui calcularemos o dobro do número que você colocar!");
    let numero = prompt("Digite aqui um número para vermos o DOBRO dele.");
    let resultadoDobro = numero * 2;
    alert(`O dobro de ${numero} é ${resultadoDobro}`);
    console.log(`O dobro de ${numero} é ${resultadoDobro}`);
}

// Desafio 10 – Verifica maioridade
// Crie uma função que receba a idade como parâmetro
// Retorne true se for maior ou igual a 18
// Retorne false se for menor que 18
// Exiba o resultado com alert() ou console.log()
function validarMaioridade() {
    let idade = parseInt(prompt("Digite aqui a sua idade."));
    if (idade >= 18) {
        alert(`Devido ter ${idade} anos, você pode comprar bebida alcólica!`);
        console.log(`Devido ter ${idade} anos, você pode comprar bebida alcólica!`);
    } else {
        alert(`Você não pode comprar bebida alcólica, devido sua idade ser menor que 18 anos!`);
        console.log(`Você não pode comprar bebida alcólica, devido sua idade ser menor que 18 anos!`);
    }
}

// Desafio 11 – Multiplica dois números
// Crie uma função que receba dois números como parâmetros
// Retorne o resultado da multiplicação entre eles
// Mostre o resultado com alert() ou console.log()
function iniciarMultiplicacao() {
    let numero1 = parseInt(prompt("Digite aqui um número"));
    let numero2 = parseInt(prompt("Digite aqui outro número"));
    let resultado = numero1 * numero2;
    alert(`A multiplicação de ${numero1} por ${numero2} é ${resultado}`);
}

// Desafio 12 – Nome completo
// Crie uma função que receba dois parâmetros: nome e sobrenome
// Retorne uma string com o nome completo formatado
// Exemplo: "Seu nome completo é: João Silva"
// Exiba o resultado com alert() ou console.log()
function iniciarNomeCompleto() {
    let nome = prompt("Digite abaixo o seu nome (se houver, pode colocar seu nome composto também).");
    let sobrenome = prompt("Digite abaixo o seu sobrenome.");
    alert(`Seu nome completo é ${nome} ${sobrenome}`);
}

// Desafio 13 – Triplo de um número
// Crie uma função que receba um número como parâmetro
// Retorne o triplo desse número
// Mostre o resultado com alert() ou console.log()
function triploDeNumero() {
    let numeroEscolhido3 = prompt("Digite um número.");
    let resultado = numeroEscolhido3 * 3;
    alert(`O triplo de ${numeroEscolhido3} é ${resultado}`);
    console.log(`O triplo de ${numeroEscolhido3} é ${resultado}`);
    return resultado;
}

// Desafio 14 – Soma de dois números
// Peça dois números com prompt()
// Crie uma função que receba os dois como parâmetros
// Retorne a soma entre eles
// Mostre o resultado com alert() ou console.log()
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnSoma").addEventListener("click", iniciarSoma);
    function iniciarSoma() {
        let n1 = parseInt(prompt("Digite aqui o Primeiro número."));
        let n2 = parseInt(prompt("Digite aqui o Primeiro número."));
        let resultadoSomaDoisNumeros = somaDoisNumeros(n1, n2);

        alert(`O resultado da soma do número ${n1} com o número ${n2} é de ${resultadoSomaDoisNumeros}`);
        console.log(`O resultado da soma do número ${n1} com o número ${n2} é de ${resultadoSomaDoisNumeros}`);
        return resultadoSomaDoisNumeros;
    }

    function somaDoisNumeros(n1, n2) {
        return n1 + n2;
    }
});

// Desafio 15 – Verifica se número é par (com return)
// Crie uma função que receba um número
// Retorne true se for par, false se for ímpar
// Mostre o resultado com console.log()
function ehPar(numero) {
    return numero % 2 === 0;
}

function iniciarEhPar() {
    let numeroEhPar = parseInt(prompt("Digite aqui um número."));
    console.log(ehPar(numeroEhPar));
}

// Desafio 16 – Primeira letra de um nome
// Crie uma função que receba um nome como parâmetro
// Retorne a primeira letra desse nome
// Mostre o resultado com alert() ou console.log()
function primeiraLetra(nome) {
    return nome[0];
}
function iniciar1Letra() {
    let nome = prompt("Digite aqui o seu nome.");
    alert(`A primeira letra do seu nome é ` + primeiraLetra(nome));
}

// Desafio 17 – Tabuada do 5
// Crie uma função que mostre no console a tabuada do 5 (5 x 1 até 5 x 10)

function iniciarTabuada5() {
    for (let i = 1; i <= 10; i++) {
        console.log(` 5 * ${i} = ${5 * i}`);
    }
}

// Desafio 18 – Contar de 1 até 20
// Crie uma função que use um laço for para contar de 1 até 20 no console
function iniciarContar20() {
    for (let contagem = 1; contagem <= 20; contagem++) {
        console.log(`${contagem}`);
    }
}
// Desafio 19 – Contar pares até 20
// Crie uma função que mostre apenas os números pares entre 1 e 20 no console
function iniciarPares() {
    for (let contagemPares = 2; contagemPares <= 20; contagemPares = contagemPares + 2) {
        console.log(`${contagemPares}`);
    }
}
// Desafio 20 – Contagem regressiva
// Crie uma função que conte de 10 até 1 no console (de trás pra frente)
function iniciarRegressiva() {
    for (let contagemRegressiva = 10; contagemRegressiva >= 0; contagemRegressiva--) {
        console.log(`${contagemRegressiva}`);
    }
}
