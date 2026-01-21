/* Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. 
Um ângulo será considerado inválido se não tiver um valor positivo.*/


let lado1 = 30
let lado2 = 60
let lado3 = 90

let angulo = lado1 + lado2 + lado3

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    console.log("Erro: ângulo inválido");
} else if (angulo === 180){
    console.log(true);
} else{
    console.log(false);
}