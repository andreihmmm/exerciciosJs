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

    matriz.reduce(getSum, 0);
    return total +
}