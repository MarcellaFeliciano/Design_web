/*  HTML
    <h5>Digite um valor:</h5>
    <div class="form">
        <label for="">Número: </label>
        <input type="text" id="n">

        <button id="botao">Enviar</button>

    </div>
    <div class="resutado" id="resutado">

    </div>
    

*/
function Calcular () {
    // pega os valores dos elemnetos com determinadas classes / id do html
    let n = document.getElementById('n')
    let num = parseInt(n.value)

    const div = document.getElementById('resutado')
    const p = document.createElement('p')                         

    dife_abs1 = num - 100
    dife_abs2 = num - 400

    if (dife_abs1 <= 20) {
        p.innerText = "A diferença absoluta de " + n.value + ' e ' + "100 é: " + dife_abs1

    } else {
        if (dife_abs2 <= 20) {
            p.innerText = "A diferença absoluta de " + n.value + ' e ' + "400 é: " + dife_abs2
        }else{
            p.innerText = "A diferença absoluta entre 100 ou 400 de " + n.value + " é maior que 20!" 
        }
    }

    div.appendChild(p)
    n.value = ''

    n.focus() 
}

botao = document.getElementById('botao')

botao.addEventListener('click', Calcular);