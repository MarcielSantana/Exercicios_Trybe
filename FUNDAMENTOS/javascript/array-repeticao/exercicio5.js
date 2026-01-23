const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maior = numbers[0]

for (let index = 0; index < numbers.length; index += 1){

    let numeroAtual = numbers[index]

    if (numeroAtual > maior){
        maior = numeroAtual
    }
}
console.log(maior);
