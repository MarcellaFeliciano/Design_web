
function Calcular () {
    // pega os valores dos elemnetos com determinadas classes / id do html
    let n = document.getElementById('n')
    let num = parseInt(n.value)

    const div = document.getElementById('resutado')
    const p = document.createElement('p')                         

    dife_abs = num - 19

    if (dife_abs > 19) {
        resp = dife_abs * 3

        p.innerText = "O resutado do triplo da diferença absoluta de " + n.value + ' e ' + "19 é: " + resp

    } else {
        p.innerText = "A diferença absoluta entre " + n.value + 'e 19 é : ' + dife_abs
    }

    div.appendChild(p)
    n.value = ''

    n.focus() 
}

botao = document.getElementById('botao')

botao.addEventListener('click', Calcular);