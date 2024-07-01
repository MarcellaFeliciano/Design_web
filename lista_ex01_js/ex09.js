
function Calcular () {
    // pega os valores dos elemnetos com determinadas classes / id do html
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    
    let n1 = parseInt(nu1.value)
    let n2 = parseInt(nu2.value)

    const div = document.getElementById('resutado')
    const p = document.createElement('p')                         

    if (n1 > 0 && n2 < 0) {

        p.innerText = "O número "+ n1 + " é positivo e o numero "+ n2 + ' é negativo!'

    } else {
        if (n1 < 0 && n2 > 0) {
            p.innerText = "O número "+ n2 + " é positivo e o numero "+ n1 + ' é negativo!'
        
        } else {

            if (n1 >= 0 && n2 >= 0){
                p.innerText = 'Os dois numero são positivos!'
            } else {
                p.innerText = 'Os dois numero são negativos!'
            }
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