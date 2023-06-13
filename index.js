// 1)
function verificarPrimo(n) {
    if (n < 1) {
        console.log('insira numero natural')
        return
    }
    for (i = 2; i < n; i++) {
        var verificacao = Number.isInteger(n / i)

        if (verificacao === true) {
            console.log('nn eh primo')
            return
        }
    } console.log('é primo')
}

// 2)
function inverterString(str) {
    var letras = str.split('');
    var invertido = []
    var j = 1;

    while (j < letras.length + 1) {
        invertido.push(letras[letras.length - j])
        j++
    }


    console.log(invertido.join(''))
}

// 3)
function maiorElemento(matriz) {
    var quantidade = matriz.length
    maior = matriz[0]

    for (j = 0; j < quantidade; j++) {

        if (maior <= matriz[j]) {

            maior = matriz[j]

        }
    } console.log(maior)
}

// 4)
function MaiorMenorMA(matriz) {
    var quantidade = matriz.length
    maior = matriz[0]

    for (j = 0; j < quantidade; j++) {

        if (maior <= matriz[j]) {

            maior = matriz[j]

        }
    } console.log('maior: ' + maior)

    menor = matriz[0]

    for (j = 0; j < quantidade; j++) {

        if (menor >= matriz[j]) {

            menor = matriz[j]

        }
    } console.log('menor: ' + menor)


    var total = matriz.reduce(function (total, numero) {
        return total + numero;

    }, 0);
    var media = total / quantidade

    console.log('media: ' + media)
}

// 5)

function contarElementos(matriz) {

    var quantidade = matriz.length

    var elementos = []
    var frequencias = []

    for (i = 0; i < quantidade; i++) {
        if (!elementos.includes(matriz[i])) {
            elementos.push(matriz[i])
            frequencias[i] = 1
        } else {
            for (k = 0; k < elementos.length; k++) {
                if (elementos[k] === matriz[i]) {
                    frequencias[k] += 1
                }
            }
        }
    }
    for (j = 0; j < elementos.length; j++) {
        console.log(elementos[j] + ': ' + frequencias[j])
    }
}