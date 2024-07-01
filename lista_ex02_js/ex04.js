/*
Escreva um programa JavaScript para calcular a área e o perímetro do
círculo.
Nota: Crie dois métodos para calcular a área e o perímetro. O raio do círculo será fornecido pelo
usuário

*/



function circulo(){


    function area_circulo(r) {
        let A = 3.14 * (r**2);
        return A
    }
    function perimetro_circulo(r){
        let C = 2 * 3.14 * r
        return C
    }

    const raio = document.getElementById('raio')

    // A = π r²
    let a = area_circulo(raio.value)
    // C = 2 * π * r
    let c = perimetro_circulo(raio.value)
    
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')

    const div = document.getElementById('resutado')

    p1.innerText = "O resutado da área é: " + a.toFixed(2)
    p2.innerText = "O resutado do perimetro é: " + c.toFixed(2)

    // adiciona o p na div
    div.appendChild(p1)
    div.appendChild(p2)
}
    
botao = document.getElementById('botao')
    
botao.addEventListener('click', circulo);