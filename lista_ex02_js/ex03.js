/*
Escreva um programa JavaScript para obter o volume de um cilindro com 2
casas decimais usando classes de objetos. Cada objeto deve ter seu próprio
raio e altura.
*/

cilindro1 = {raio:4, altura:5}

//V = π . r**2 * h


function volume_cilindro(r,h) {

    let v = (3.14 * [r**2]) * h
    console.log('Volume do cilindro = '+v.toFixed(2))

}

volume_cilindro(cilindro1['raio'],cilindro1['altura'])