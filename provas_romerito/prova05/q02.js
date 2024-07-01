
let = div = document.getElementById('mostrar')
let = bt_soma = document.getElementById('soma')
let = bt_subt = document.getElementById('subt')
let = bt_mult = document.getElementById('mult')
let = bt_div = document.getElementById('divi')


let p = document.createElement('p')
let somar = () => {
    const num1 = document.getElementById('n1')
    const num2 = document.getElementById('n2')
    
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    let soma = n1 + n2

    p.innerText = soma

    div.appendChild(p)

}

bt_soma.addEventListener('click', somar)


let subtrair = () => {
    const num1 = document.getElementById('n1')
    const num2 = document.getElementById('n2')
    
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    let subt = n1 - n2

    p.innerText = subt

    div.appendChild(p)

}

bt_subt.addEventListener('click', subtrair)


let mult = () => {
    const num1 = document.getElementById('n1')
    const num2 = document.getElementById('n2')
    
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    let mult = n1 * n2

    p.innerText = mult

    div.appendChild(p)

}

bt_mult.addEventListener('click', mult)



let dividir = () => {
    const num1 = document.getElementById('n1')
    const num2 = document.getElementById('n2')
    
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    let divi = n1 / n2

    p.innerText = divi

    div.appendChild(p)

}

bt_div.addEventListener('click', dividir)