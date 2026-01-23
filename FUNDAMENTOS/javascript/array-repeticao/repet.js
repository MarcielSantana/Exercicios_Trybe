const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (let index = 0; index < groceryList.length; index += 1){
    // console.log(groceryList[index]);
        console.log(`${index} - ${groceryList[index]}`);
    
}



let numbers = [2, 25, 63, 41, 3, 8, 10]

let sum = 0

for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index]
}
console.log(`A Soma de todos os números do array numbers é ${sum}`);