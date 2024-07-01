
/*
hoje.getDate() // O dia do mês
hoje.getDay() // O valor inteiro do dia da semana
hoje.getFullYear() // O ano com quatro dígitos
hoje.getHours() // A hora do dia
hoje.getMilliseconds() // O número de milissegundos desde o ultimo segundo
hoje.getMinutes() // O número de minutos desde a última hora
hoje.getMonth() // o mês do ano
hoje.getTime() // O número de milissegundos desde a meia noite de 1° de janeiro de 1970
hoje.TolocaleString() // A data e hora local em formato de string
*/


let data = new Date();
let mes = data.getMonth()
let dia = data.getDate()
console.log(data)


if (mes == 11) {
    dias_natal = 25 - dia;

}else {
    dias_mes = (11 - (mes+1)) * 30;
    console.log(dias_mes)
    dias_mes = dias_mes + (30-dia)
    dias_natal = dias_mes + 25;

}
console.log(dias_natal)


