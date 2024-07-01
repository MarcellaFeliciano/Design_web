/*   HTML
<h5>Digite dois valores:</h5>
    <div class="form">
        <label for="">Número 1</label>
        <input type="text" id="n1">
        <label for="">Número 2</label>
        <input type="text" id="n2">

        <button id="botao">Enviar</button>

    </div>
    <div class="resutado" id="resutado">

    </div>
*/


function Calcular () {
    // pega os valores dos elemnetos com determinadas classes / id do html
    let nu1 = document.getElementById('n1')
    let nu2 = document.getElementById('n2')
    
    let n1 = parseInt(nu1.value)
    let n2 = parseInt(nu2.value)

    const div = document.getElementById('resutado')
    const p = document.createElement('p')                         

    if (n1 == n2) {
        soma = n1 + n2
        resu = soma * 3

        p.innerText = "O resutado do triplo da soma de " + n1 + ' e ' + n2 + " é: " + resu

    } else {
        soma = n1 + n2

        p.innerText = "O resutado da soma de " + n1 + ' + ' + n2 + " é: " + soma
    }


    div.appendChild(p)

    // sempre que envia zera os blocos do input
    nu1.value = ''
    nu2.value = ''

    nu1.focus() 
}

botao = document.getElementById('botao')

botao.addEventListener('click', Calcular);