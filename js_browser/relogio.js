let element_tela = document.getElementById('container')
element_tela.style.backgroundColor ='lightpink'


function mostrarHora() {
    const element = document.getElementById('relogio')
    
    const agora = new Date(); // cria um objeto / string com a data do momento
    element.innerText = agora.toLocaleTimeString(); // 

}

mostrarHora();

setInterval(mostrarHora, 1000);  // seta um intervalo de 1000 miles (1s) para focar executando a função!