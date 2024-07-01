let lado1 = 5
let lado2 = 6
let lado3 = 7

let p = (lado1 + lado2 + lado3) /2

let a = p * (p-lado1) * (p-lado2) * (p-lado3)
let area = Math.sqrt(a)
console.log(area)