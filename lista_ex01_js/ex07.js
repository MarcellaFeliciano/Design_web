

function Calcular () {
    // pega os valores dos elemnetos com determinadas classes / id do html
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    
    let n1 = parseInt(nu1.value)
    let n2 = parseInt(nu2.value)

    const div = document.getElementById('resutado')
    const p = document.createElement('p')                         

    if (n1 == 50 || n2 == 50) {

        p.innerText = "Verdadeiro! Um dos valores é igual a 50!"

    } else {
        soma = n1 + n2
        
        if (soma == 50) {
            p.innerText = "Verdadeiro! O resutado da soma de " + n1 + ' + ' + n2 + " é: " + soma
        } else {
            p.innerText = 'Falso!'
        }
    }

    div.appendChild(p)

    // sempre que envia zera os blocos do input
    nu1.value = ''
    nu2.value = ''

    nu1.focus() 
}

botao = document.getElementById('botao')

botao.addEventListener('click', Calcular);