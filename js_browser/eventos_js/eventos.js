let form = document.forms.meuform


//objeto evento que quando ha a mudanla o evento cria um objeto

// a função é o manupulador 
let mnp1 = (event) => { // o 'event é o object (o alvo) , o target  é o elemento, o name é o nome , por exemplo matricula 
    alert (event.target.name)
}
// -> a mudança ocorre no input, mas quem recebe a mudança é o form, por isso existe um propagação de evento
//form - // o form está na mesma declaração do .addevent
// o evento de mudança é disparado e chama a função mnp1

form.addEventListener('change', mnp1)