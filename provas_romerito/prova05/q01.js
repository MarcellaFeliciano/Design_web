

bt_add = document.getElementById('add')

bt_mudar = document.getElementById('mudar')

div = document.getElementById('mostrar')

cont=0

lista_nomes = []
let add_nome = () => {
    nomes = document.getElementById('nomes')

    let p = document.createElement('p')
    p.setAttribute('id','pnome'+cont)

    p.innerText = nomes.value
    console.log(p)
    div.appendChild(p)
    cont++

    lista_nomes.push(nomes.value)
}

bt_add.addEventListener('click', add_nome)

let mudar_maiusculo = () => {
    
    for (i=0; i<cont; i++) {

        parag = document.getElementById('pnome'+i)

        newp = (lista_nomes[i]).toUpperCase()
        parag.innerText = newp
    }


}


bt_mudar.addEventListener('click', mudar_maiusculo)