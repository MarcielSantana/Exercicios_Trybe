/*Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.*/

let salarioBruto = 3000
let aliquotaInss;
let impostoRenda;

if (salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.92){
    aliquotaInss = salarioBruto * 0.11
} else{
    aliquotaInss = 570.88
};

let baseSalario = salarioBruto - aliquotaInss

if (baseSalario <= 1903.98){
    impostoRenda = 0
} else if(baseSalario >= 1903.99 && baseSalario <= 2826.65){
    impostoRenda = (baseSalario * 0.075) - 142.80
} else if(baseSalario >= 2826.65 && baseSalario <= 3751.05){
    impostoRenda = (baseSalario * 0.15) - 354.80
}else if(baseSalario >= 3751.05 && baseSalario <= 4664.68){
    impostoRenda = (baseSalario * 0.225) - 663.13
} else{
    impostoRenda = (baseSalario * 0.275) - 869.36
}

console.log(`O Salário Liquido é ${baseSalario - impostoRenda}`);
