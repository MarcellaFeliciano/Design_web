

let botao = document.getElementById('botao')

//let li_menu = document.querySelector('.li_menu')
let li_menu = document.getElementsByClassName('li_menu')
let num = 0

console.log(li_menu)


let clicar = () =>{
    num++
    if (num%2 == 0) {
        for (i=0; i<4; i++){
            li_menu[i].style.display = 'none'
        
        }   
    } else {
        for (i=0; i<4; i++){
            li_menu[i].style.display = 'flex'
        
        }  
    }
}


botao.addEventListener('click', clicar)

