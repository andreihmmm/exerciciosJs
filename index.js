// // 1)
// function verificarPrimo(n) {
//     if (n < 1) {
//         console.log('insira numero natural')
//         return
//     }
//     for (i = 2; i < n; i++) {
//         var verificacao = Number.isInteger(n / i)

//         if (verificacao === true) {
//             console.log('nn eh primo')
//             return
//         }
//     } console.log('é primo')
// }

// // 2)
// function inverterString(str) {
//     var letras = str.split('');
//     var invertido = []
//     var j = 1;

//     while (j < letras.length + 1) {
//         invertido.push(letras[letras.length - j])
//         j++
//     }


//     console.log(invertido.join(''))
// }

// // 3)
// function maiorElemento(matriz) {
//     var quantidade = matriz.length
//     maior = matriz[0]

//     for (j = 0; j < quantidade; j++) {

//         if (maior <= matriz[j]) {

//             maior = matriz[j]

//         }
//     } console.log(maior)
// }

// // 4)
// function MaiorMenorMA(matriz) {
//     var quantidade = matriz.length
//     maior = matriz[0]

//     for (j = 0; j < quantidade; j++) {

//         if (maior <= matriz[j]) {

//             maior = matriz[j]

//         }
//     } console.log('maior: ' + maior)

//     menor = matriz[0]

//     for (j = 0; j < quantidade; j++) {

//         if (menor >= matriz[j]) {

//             menor = matriz[j]

//         }
//     } console.log('menor: ' + menor)


//     var total = matriz.reduce(function (total, numero) {
//         return total + numero;

//     }, 0);
//     var media = total / quantidade

//     console.log('media: ' + media)
// }

// // 5)

// // REVISAR
// function contarElementos(matriz) {

//     var quantidade = matriz.length

//     var elementos = []
//     var frequencias = []

//     for (i = 0; i < quantidade; i++) {
//         if (!elementos.includes(matriz[i])) {
//             elementos.push(matriz[i])
//             frequencias[i] = 1
//         } else {
//             for (k = 0; k < elementos.length; k++) {
//                 if (elementos[k] === matriz[i]) {
//                     frequencias[k] += 1
//                 }
//             }
//         }
//     }
//     for (j = 0; j < elementos.length; j++) {
//         console.log(elementos[j] + ': ' + frequencias[j])
//     }
// }

// // 6)
// function validacao(senha) {

//     tamanho = senha.length

//     let senhaSoLetras = senha.replace(/[^a-zA-Z]/g, '');
//     tamanhoSoLetras = senhaSoLetras.length

//     if (tamanho < 8) {
//         console.log('muito pequena')
//     }

//     array = senhaSoLetras.split('')
//     var temMaiuscula = false
//     for (i = 0; i < tamanhoSoLetras; i++) {

//         var letra = array[i];
//         var letraMaiuscula = letra.toUpperCase()

//         if (letraMaiuscula === letra) {

//             temMaiuscula = true
//             break;

//         }
//     }
//     if (temMaiuscula === false) {
//         console.log('nao tem maiuscula')
//     }

//     var temMinuscula = false;
//     for (var j = 0; j < tamanhoSemNumeros; j++) {
//         var letra = array[j];
//         var letraMinuscula = letra.toLowerCase();

//         if (letraMinuscula === letra) {
//             temMinuscula = true;
//             break;
//         }
//     }

//     if (!temMinuscula) {
//         console.log('Não tem letra minúscula');
//     }

//     var contemNumero = false;

//     for (var i = 0; i < tamanho; i++) {
//         var caractere = senha.charAt(i);

//         if (!isNaN(caractere)) {
//             contemNumero = true;
//             break;
//         }
//     }

//     if (!contemNumero) {
//         console.log("A string não contém um número");
//     }
// }

// // 7)
// function eliminarDuplicados(matriz) {
//     var quantidade = matriz.length

//     var elementos = []
//     var frequencias = []

//     for (i = 0; i < quantidade; i++) {
//         if (!elementos.includes(matriz[i])) {
//             elementos.push(matriz[i])
//             frequencias[i] = 1
//         }
//     }
//     console.log(elementos)
// }

// // 8)
// function verificarPalindromo(string) {
//     var palindromo = true
//     let regExp = string.replace(/[^\w]|\s|_/g, '')
//     var maiuscula = regExp.toUpperCase();

//     var tamanho = maiuscula.length

//     for (i = 0; i < tamanho; i++) {
//         if (maiuscula.charAt(i) !== maiuscula.charAt(tamanho - i - 1)) {
//             palindromo = false
//         }
//     }
//     if (palindromo === true) {
//         console.log('é palídromo')
//     } else {
//         console.log('não é palíndromo')
//     }
// }

// // 9)
// function fatorial(numero) {
//     if (numero <= 0) {
//         console.log('Insira um número natural maior que 0')
//         return
//     }
//     var resultado = 1
//     for (i = 1; i < numero + 1; i++) {
//         var resultado = resultado * i
//     }
//     console.log(resultado)
// }

// // 10)
// function verificarAnagramas(p1, p2) {

//     var tamanho1 = p1.length
//     var tamanho2 = p2.length

//     if (tamanho1 !== tamanho2) {
//         console.log('Não são anagramas')
//         return
//     }

//     var saoAnagramas = true

//     var elementos1 = []
//     var frequencias1 = []

//     var elementos2 = []
//     var frequencias2 = []

//     for (i = 0; i < quantidade; i++) {
//         if (!elementos1.includes(matriz[i])) {
//             elementos1.push(matriz[i])
//             frequencias1[i] = 1
//         } else {
//             for (k = 0; k < elementos1.length; k++) {
//                 if (elementos1[k] === matriz[i]) {
//                     frequencias1[k] += 1
//                 }
//             }
//         }
//     }
// }

// // 11)
// function emFahrenheit(celsius) {
//     var fahrenheit = (celsius * (9 / 5)) + 32
//     console.log(Math.round(fahrenheit) + 'ºF')
// }

// // 12)
// function verificarQuadradoPerfeito(numero) {
//     if (numero <= 0) {
//         console.log('Insira um numero inteiro maior que 0')
//         return
//     }

//     var raizNumero = numero ** (1 / 2)

//     if (Number.isInteger(raizNumero)) {
//         console.log('É um quadrado perfeito')

//     } else {
//         console.log('nao eh')
//     }
// }

// // 13)
// function contarVogais(string) {
//     var vogais = {
//         vogal: ['a', 'e', 'i', 'o', 'u'],
//         quantidade: [0, 0, 0, 0, 0]
//     };

//     var tamanho = string.length;
//     var stringMinuscula = string.toLowerCase();

//     for (var i = 0; i < tamanho; i++) {
//         var letraEmQuestao = stringMinuscula.charAt(i);
//         if (vogais.vogal.includes(letraEmQuestao)) {
//             for (var j = 0; j < 5; j++) {
//                 if (vogais.vogal[j] === letraEmQuestao) {
//                     vogais.quantidade[j] += 1;
//                     break;
//                 }
//             }
//         }
//     }

//     console.log(vogais.vogal);
//     console.log(vogais.quantidade);
// }

// // 14)
// function primoDeFibonnaci(n) {
//     if (n < 1) {
//         console.log('insira numero natural')
//         return
//     }
//     for (i = 2; i < n; i++) {
//         var verificacao = Number.isInteger(n / i)

//         if (verificacao === true) {
//             console.log('nn eh primo')
//             return
//         }
//     }

//     var somaFibonnaci = 0

//     while (somaFibonnaci < n) {
//         somaFibonnaci = somaFibonnaci * 2 + 1
//     }

//     if (somaFibonnaci === n) {
//         console.log('O número em questão é primo e faz parte da sequência de Fibonnaci')
//     } else {
//         console.log('O nº nao faz patre da sequencia de fibonnaci')
//     }
// }

// 15)

function gerarNumeroHexa(n) {
    var decimal = Math.floor(Math.random() * n);
    var hexadecimal = decimal.toString(16).padStart(2, '0');
    return hexadecimal;
}

function corAleatoria() {
    var rgb = '#' + gerarNumeroHexa(256) + gerarNumeroHexa(256) + gerarNumeroHexa(256)
    var body = document.querySelector('body')
    body.style.backgroundColor = rgb
}

