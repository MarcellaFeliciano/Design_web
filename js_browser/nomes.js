class Pessoa {
    constructor (nome, snome) {
        this.nome = nome;
        this.snome = snome;
    }

    getNome () {
        return this.nome
    }
    getSnome () {
        return this.snome
    }
}

function addPessoa () {
    // pega os valores dos elemnetos com determinadas classes do html
    const nome = document.getElementById('nome')
    const snome = document.getElementById('snome')

    // o objeto.value --> pegar os valores do objeto!
    if (nome.value === '' || snome.value === '') {
        // se não digite nada ou no nome ou no snome
        return;
    }

    const div = document.getElementById('nomes')
    const p = document.createElement('p')

    // concatena as strings
    p.innerText = nome.value + '--' + snome.value

    // adiciona o p na div
    div.appendChild(p)

    // sempre que envia zera os blocos do input
    nome.value = ''
    snome.value = ''

    nome.focus() // leva o cursor/mouse para o bloc de texto do nome
}


botao = document.getElementById('botao')

botao.addEventListener('click', addPessoa);
