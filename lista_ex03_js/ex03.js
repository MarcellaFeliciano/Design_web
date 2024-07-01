let bt_comecar = document.getElementById('comecar')
let bt_parar = document.getElementById('sair')
let bt_seguir = document.getElementById('seguir')
let bt_voltar = document.getElementById('voltar')

slide_preto = document.getElementById('img_preto')
slide_inicial = document.getElementById('img_inicial')

slide1 = document.getElementById('img_1')
slide2 = document.getElementById('img_2')
slide3 = document.getElementById('img_3')
slide4 = document.getElementById('img_4')
slide5 = document.getElementById('img_5')


cont = 0;

situacao = 'off';

let comecar = () => {
    if (situacao == 'off') {
        slide_preto.style.display = 'none';
        slide_inicial.style.display = 'block';

        situacao = 'on';
    }
}

bt_comecar.addEventListener('click', comecar)


let seguir = () => {
    if (situacao == 'on') {
        if (cont != 5) {
        
            if (cont == 0) {
                slide_inicial.style.display = 'none';
                slide1.style.display = 'block';
            } else if (cont == 1) {
                slide1.style.display = 'none';
                slide2.style.display = 'block';
            } else if (cont == 2) {
                slide2.style.display = 'none';
                slide3.style.display = 'block';
            } else if (cont == 3) {
                slide3.style.display = 'none';
                slide4.style.display = 'block';
            } else if (cont == 4) {
                slide4.style.display = 'none';
                slide5.style.display = 'block';
            } else {
                console.log('erro')
            }
            
            cont++
            console.log(cont)
    
        } else {
            cont = 0;
            slide5.style.display = 'none';
            slide1.style.display = 'block';
            cont++
            
        }
    }
    
}

bt_seguir.addEventListener('click', seguir)


let voltar = () => {
    if (situacao == 'on') {
        if (cont != 0) {
        
            if (cont == 1) {
                slide2.style.display = 'none';
                slide1.style.display = 'block';
            } else if (cont == 2) {
                slide3.style.display = 'none';                                                                                                                                            'none';
                slide2.style.display = 'block';
            } else if (cont == 3) {
                slide4.style.display = 'none';
                slide3.style.display = 'block';
            } else if (cont == 4) {
                slide5.style.display = 'none';
                slide4.style.display = 'block';
            } else if (cont == 5) {
                slide1.style.display = 'none';
                slide5.style.display = 'block';
            } else {
                console.log('erro')
            }
            
            cont--
            console.log(cont)
    
        } else {
            cont = 5;
            slide1.style.display = 'none';
            slide5.style.display = 'block';
            cont--
            
        }
    }

}
bt_voltar.addEventListener('click', voltar)


let sair = () => {
    if (situacao == 'on') {
        
        slide1.style.display = 'none'
        slide2.style.display = 'none'
        slide3.style.display = 'none'
        slide4.style.display = 'none'
        slide5.style.display = 'none'
        slide_preto.style.display = 'block';

        situacao = 'off'
        cont = 0
        
    }
}

bt_parar.addEventListener('click', sair)