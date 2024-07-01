body = document.getElementsByTagName('body')
comando = document.getElementById('fim')

div = document.getElementById('mostrar_tab')
div.style.position = 'relative';
div.style.top = '10px';


comando.addEventListener('keypress', function(operacao){
    
    num = Number(document.getElementById('tabuada').value)
    comeco = Number(document.getElementById('comeco').value)
    fim = Number(document.getElementById('fim').value)

    tabela = document.createElement('table')

    dado_num = document.createElement('td')
    dado_mult = document.createElement('td')
    dado_comeco = document.createElement('td')
    dado_igual = document.createElement('td')
    dado_fim = document.createElement('td')

    num_linha = 0

    for(var i = comeco; i <= fim; i++){

        dado_num.innerText = num
        dado_mult.innerText = '*'
        dado_comeco.innerText = i
        dado_igual.innerText = '='
        dado_fim.innerText = num * i

        linha = tabela.insertRow(num_linha)

        valor_1 = linha.insertCell(0)
        sinal_mult = linha.insertCell(1)
        valor_2 = linha.insertCell(2)
        sinal_igual = linha.insertCell(3)
        valor_3 = linha.insertCell(4)

        valor_1.innerText = dado_num.innerText
        sinal_mult.innerText = '*'
        valor_2.innerText = dado_comeco.innerText
        sinal_igual.innerText = '='
        valor_3.innerText = dado_fim.innerText

        num_linha++
    }
    div.append(tabela)
})