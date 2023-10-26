const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarResposta(exercicio) {
    if (exercicio === 1) {
        const numero = prompt("Informe um número inteiro:");
        const listaDivisores = encontrarDivisores(parseInt(numero));
        const somaDivisores = listaDivisores.reduce((a, b) => a + b, 0); // Soma dos divisore
        var resp = "Lista Divisores: " + listaDivisores + "\nSoma: " + somaDivisores;
        alert(resp);
    }

    if (exercicio === 2){
        const x1 = parseFloat(prompt("Digite a coordenada x do ponto A:"));
        const y1 = parseFloat(prompt("Digite a coordenada y do ponto A:"));
        const x2 = parseFloat(prompt("Digite a coordenada x do ponto B:"));
        const y2 = parseFloat(prompt("Digite a coordenada y do ponto B:"));
        var distancia = calcularDistancia(x1, y1, x2, y2).toFixed(2);
        alert("A distância entre os pontos A(" + x1 + ", " + y1 + ") e B(" + x2 + ", " + y2 + ") é: " + distancia);
        
    }

    if (exercicio === 3) {
        const frase = prompt("Digite uma frase:");
        const resultado = contarPalavras(frase);

        let resultadoFormatado = "Resultado:\n";
        for (const palavra in resultado) {
            resultadoFormatado += `${palavra} (${resultado[palavra]}), `;
        }

        resultadoFormatado = resultadoFormatado.slice(0, -5); // Remover a vírgula extra no final
        alert(resultadoFormatado);
    }

    if (exercicio === 4 ){
        const entrada = prompt("Digite a matriz separada por ';' e espaços em branco:");
        const resultado = determinarDimensaoMatriz(entrada);
        alert(resultado);
    }

    if (exercicio === 5){
        const N = parseInt(prompt("Digite um número inteiro positivo N:"));

        if (N <= 0) {
            alert("Por favor, digite um número inteiro positivo.");
        } else {
            const sequenciaFibonacci = calcularFibonacci(N);
            alert("Resultado: "+ sequenciaFibonacci.join(', '));
        }
    }
    
}


function encontrarDivisores(num) {
    const divisores = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    return divisores;
}

function calcularDistancia(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const distancia = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    
    return distancia;
}



function contarPalavras(frase) {
    const palavras = frase.toLowerCase().match(/\b\w+\b/g);

    const contagem = {};

    for (const palavra of palavras) {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    }

    return contagem;
}


function determinarDimensaoMatriz(matriz) {
    const linhas = matriz.split(';');
    const numeroDeLinhas = linhas.length;
    const primeiraLinha = linhas[0].split(' ');
    const numeroDeColunas = primeiraLinha.length;

    return `Essa é uma matriz de dimensão ${numeroDeLinhas} x ${numeroDeColunas}.`;
}

function calcularFibonacci(N) {
    const fibonacci = [0, 1];

    for (let i = 2; i < N; i++) {
        const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
    }

    return fibonacci.slice(0, N);
}


function setInitialTextareaContent() {

    var exercise1Content = `
    function encontrarDivisores(num) {
        const divisores = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores.push(i);
            }
        }
        divisores.pop();
        return divisores;
    }
    `;

    // Exercise 2 content
    var exercise2Content = `
    function calcularDistancia(x1, y1, x2, y2) {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        const distancia = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        return distancia;
    }
    `;

    var exercise3Content = `
    function contarPalavras(frase) {
        const palavras = frase.toLowerCase().match(/\b\w+\b/g);
    
        const contagem = {};
    
        for (const palavra of palavras) {
            if (contagem[palavra]) {
                contagem[palavra]++;
            } else {
                contagem[palavra] = 1;
            }
        }
    
        return contagem;
    }    
    `;

    var exercise4Content = `
    function determinarDimensaoMatriz(matriz) {
        const linhas = matriz.split(';');
        const numeroDeLinhas = linhas.length;
        const primeiraLinha = linhas[0].split(' ');
        const numeroDeColunas = primeiraLinha.length;
    
        return Essa é uma matriz de dimensão {numeroDeLinhas} x {numeroDeColunas}.;
    }
    `;

    var exercise5Content = `
    function calcularFibonacci(N) {
        const fibonacci = [0, 1];
    
        for (let i = 2; i < N; i++) {
            const nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(nextFibonacci);
        }
    
        return fibonacci.slice(0, N);
    }
    `;

    setTextArea('textarea1', exercise1Content);
    setTextArea('textarea2', exercise2Content);
    setTextArea('textarea3', exercise3Content);
    setTextArea('textarea4', exercise4Content);
    setTextArea('textarea5', exercise5Content);

}


function setTextArea(textareaId, value) {
    var textarea = document.getElementById(textareaId);
    textarea.value = value;
}


