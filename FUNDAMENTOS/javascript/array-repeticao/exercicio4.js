// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0
let media = 0
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index]
    media = sum / numbers.length
}

if (media > 20){
    console.log(`O valor da média aritmética é ${media}, ou seja, é maior que 20`);
    
} else{
    console.log(`O valor da média aritmética é ${media}, ou seja, é menor ou igual a 20`);
    
}