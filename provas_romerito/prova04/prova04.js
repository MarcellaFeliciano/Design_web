
//adicionar cards ao elementos

//criar uma âncora
let a = document.createElement('a');
a.innerText = 'Adicinar Card';
a.setAttribute('id', 'botao');

//adicionar ao li
let li = document.getElementById('li')
li.innerHTML = a.outerHTML;

//adicionar evento para dicionar cards
let botao = document.getElementById('botao');  // o elemento botao é o a que foi adicionado ao li

let contador = 0

botao.addEventListener ('click', (event)=>{
   
   let content = document.getElementsByClassName('content')[0];
   content.style.gap = '20px'

   let elem = document.createElement('div');
   elem.classList.add('card');
   content.append(elem);

   contador++
   console.log(contador)

}); 

//limpar o container

const limpar = document.getElementById('limpar') // pega o botao limpar

limpar.addEventListener('click', (event)=>{
    const content = document.getElementsByClassName('content')[0];
    content.innerHTML = '';
});


// adicionar/criar os botoes ao sidebar

let ul = document.createElement('ul')

let li_borda = document.createElement('li')
let li_cor = document.createElement('li')

let botao_borda = document.createElement('a')
let botao_cor = document.createElement('a')

botao_borda.innerText = 'Arredondar borda'
botao_cor.innerText = 'Mudar cor'

const aside = document.getElementsByClassName('sidebar')[0];

// aside style
aside.style.display = 'flex'
aside.style.flexDirection = 'column'
aside.style.justifyContent = 'center'

// ul style
ul.style.display ='flex';
ul.style.flexDirection = 'column'
ul.style.justifyContent = 'center'
ul.style.gap = '50px'

// li style
li_borda.style.border = 'none'
li_cor.style.border ='none'

//adicionar os elementos ao aside
li_borda.appendChild(botao_borda)
li_cor.appendChild(botao_cor)

ul.appendChild(li_borda)
ul.appendChild(li_cor)

aside.appendChild(ul)

// evento de arredondar borda

botao_borda.addEventListener ('click', (event)=>{
    for (let i = 0; i <= contador; i++) {
        let div_borda = document.getElementsByClassName('card')[i];
        div_borda.style.borderRadius = '50px';  
    }
 }); 

// evento de mudar a cor

botao_cor.addEventListener ('click', (event)=>{
    for (let i = 0; i <= contador; i++) {
        let div_cor = document.getElementsByClassName('card')[i];
        div_cor.style.background = 'blue'
    }

 }); 



