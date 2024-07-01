

let screen = document.getElementById("tela")

screen.style.display = 'flex';
screen.style.justifyContent = 'center';
screen.style.marginTop = '50px';

let button = document.createElement('button')
button.style.width = '150px';
button.style.height = '100px'
button.style.backgroundColor = 'pink'

screen.appendChild(button)

let text = document.createElement('p')

text.innerText = 'click aqui!'

button.appendChild(text)



let clicar = () =>{
    console.log("mensagem de click!!!")
}


button.addEventListener('click', clicar)
