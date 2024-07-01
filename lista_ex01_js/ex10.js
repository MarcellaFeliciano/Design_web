/*   HTML
<h5>Digite uma palavra! E depois o index da posição da string para apagar da palavra!</h5>
    <div class="form">
        
        <label for="">Palavra: </label>
        <input type="text" id="palavra">
        <label for="">Index para apagar: </i></label>
        <input type="text" id="index">

        <button id="botao">Enviar</button>

    </div>
    <div class="resutado" id="resutado">

    </div>
*/
function mod_string() {
    let word = document.getElementById('palavra')
    let palavra = word.value
    console.log(palavra)

    let index = document.getElementById('index')
    let posicao = parseInt(index.value)

    console.log(posicao)

    const div = document.getElementById('resutado')
    const p = document.createElement('p') 

    if (index == 0) {
        let new_palavra = palavra.substr(1,palavra.length)

        p.innerText = "A nova frase é: " + new_palavra

    }else{
        let parte1 = palavra.substr(0,posicao)
        let parte2 = palavra.substr(posicao+1, palavra.length)

        //let new_palavra = (palavra.substr(0,posicao)) + (palavra.substr(posicao+1, palavra.length))
        let new_palavra = parte1 + parte2
        p.innerText = "A nova frase é: " + new_palavra
    }

    div.appendChild(p)

    // sempre que envia zera os blocos do input
    word.value = ''
    index.value = ''

    word.focus() 
}


botao = document.getElementById('botao')

botao.addEventListener('click', mod_string);

