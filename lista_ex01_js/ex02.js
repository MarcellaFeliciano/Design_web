let texto = "w3resource"
 
let texto_novo = new String('')

texto_novo = " "
for (let i=0; i <= texto.length; i++ ){
    texto_novo = texto_novo + texto[texto.length-i]
}

texto_novo = texto_novo.replace('undefined','')
console.log("A palavra w3resource invertida é:",texto_novo)





