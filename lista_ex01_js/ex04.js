

/*    HTML
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
    const n1 = document.getElementById('n1')
    const n2 = document.getElementById('n2')

    // o objeto.value --> pegar os valores do objeto!

    const div = document.getElementById('resutado')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')

    mult = n1.value * n2.value
    divisao = n1.value / n2.value


    p2.innerText = "O resutado da multiplicação de " + n1.value + '*' + n2.value + " é: " + mult

    p1.innerText = "O resutado da divisão de " + n1.value + '/' + n2.value + " é: " + divisao


    // adiciona o p na div
    div.appendChild(p1)
    div.appendChild(p2)

    // sempre que envia zera os blocos do input
    n1.value = ''
    n2.value = ''

    n1.focus() // leva o cursor/mouse para o bloc de texto do nome
}


botao = document.getElementById('botao')

botao.addEventListener('click', Calcular);