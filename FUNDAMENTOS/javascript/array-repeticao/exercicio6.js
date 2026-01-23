// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let contador = 0
let index;

for (let index = 0; index < numbers.length; index += 1){

    if (numbers[index] % 2 == 1){
        contador += 1
    } 
}
console.log( `Existem ${contador} número(s) impar(es)`);