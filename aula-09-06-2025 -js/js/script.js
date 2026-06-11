/*
let numero = Number(prompt("Informe a sua nota:"))
if(nota >= 90){
    alert("O conceito é A")
}
else if(nota >= 80){
    alert("O concento é B")
}
else{
    alert("O conceito é C")
}

*/

/*
let numero = Number(prompt("Informe um número de 1 a 7:"))
switch(numero){
    case 1 : alert("Domingo"); break;
    case 2 : alert("Segunda-feira"); break;
    case 3 : alert("Terça-feira"); break;
    case 4 : alert("Quarta-feira"); break;
    case 5 : alert("Quinta-feira"); break;
    case 6 : alert("Sexta-feira"); break;
    case 7 : alert("Sábado"); break;
    default : alert("Número inválido"); break;
}

*/

/*
let temperatura = Number(prompt("Informe a temperatura"))
let temp = temperatura >= 25 ? "Quente" : "Frio";
alert(temp)

*/

/*
let maiorIdade = prompt("você é maior de idade ?") === "true"
let carteira = prompt("Tem carteira de motorista") === "true"
if(maiorIdade && carteira){
    alert("Pode dirigir")
}
else{
    alert("Proibido dirigir")
}

*/

/*
let numero = Number(prompt("Informe um número"))
if(numero >= 10 && numero <= 20){
    alert("Este número está entre 10 e 20")
}
else{
    alert("Esse número não está entre 10 e 20")
}

*/

/*
let sinal = prompt("Informe a cor do semáforo").toLowercase()
switch(sinal){
    case "vermelho" : alert("Pare"); break;
    case "amarelo" : alert("Atenção! Começe a freiar"); break;
    case "verde" : alert("Pode seguir")
    default : alert("Essa cor não é valida"); break;
}

*/

/**/ 

/*
let idade = prompt("Digite a sua idade para ver se você pode assistir ao filme")
if(idade >= 18){
    alert("Pode assistir ao filme")
}
else if(idade >= 16){
    alert("Pde assistir, mas precisa de uma declaração com uma autorização dos pais")
}
else{
    alert("Não pode assisitr")
}

*/

/*
let pets = prompt("Indique a quantidade de pets que você tem")
switch(pets){
    case "0" : alert("Você não possui pets ? Tudo bem, muitas pessoas também não tem")
    case "1" : alert("Você tem 1 pet. Isso é bem comum")
    case "2" : alert("Caramba, 2 pets em! Você gosta muito de bixinhos")
    case "3" : alert("Olha, estou impressionado. Você deve amar e cuidar muito bem deles ...")
    default  : alert("Você é uma ONG, não é possível")

}

*/

/*
let numero = prompt("Digite um número inteiro não nulo e eu vou te dizer se esse número é positivo ou negativo")
let resposta = numero > 0 ? "O número que você digitou é positivo" : "O número que você digitou é negativo"
alert(resposta)

*/

/*
let inteligencia = prompt("Você é inteligente e/ou estuda ?") === "sim"
let gosta = prompt("Você gosta de avião, ou mesmo sem gostar trabalharia como piloto ?") === "sim"
if(inteligencia && gosta){
    alert("Você pode ser piloto de avião")
}
else{
    alert("Não indico você a ser piloto de avião")
}

*/

/*
let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
if(num1 > num2){
    alert("O primeiro número é maior que o segundo")
}
else if(num1 < num2){
    alert("O segundo número é maior que o primeiro")
}
else{
    alert("Os números tem o mesmo valor")
}

*/

/*
let sexo = prompt("Digite o seu sexo, sendo 'm' para masculino e 'f' para feminino").toLowerCase()
switch(sexo){
    case "m" : alert("masculino"); break;
    case "f" : alert("feminino"); break;
    default : alert("Seu sexo não EXISTE")
}

*/

/*
let letra = prompt("Digite apenas uma letra").toLowerCase()
switch(letra){
    case "a" : alert("vogal"); break;
    case "e" : alert("vogal"); break;
    case "i" : alert("vogal"); break;
    case "o" : alert("vogal"); break;
    case "u" : alert("vogal"); break;
    default : alert("consoante"); break;
}

*/

/*
let nota1 = Number(prompt("Digite sua primeira nota"))
let nota2 = Number(prompt("Digite sua segunda nota"))
let media = (nota1 + nota2)/2
if(media == 10){
    alert("Aprovado com ")
}
else if(media >= 7){
    alert("Aprovado")
}
else{
    alert("Reprovado")
}

*/

/*
let a = Number(prompt("Digite um valor para 'a' "))
let b = Number(prompt("Digite um valor para 'b' "))
let c = Number(prompt("Digite um valor para 'c' "))
let x = Number(prompt("Digite um valor para 'x' "))
let calculo = ((a*(x**2))+(b*x)+c)
console.log(calculo)
if(calculo != 0){
    alert("não tem raíz exata")
}
else{
    alert("Tem raíz exata")
}

*/

/*
let a = Number(prompt("Digite um valor para 'a' "))
let b = Number(prompt("Digite um valor para 'b' "))
let c = Number(prompt("Digite um valor para 'c' "))
if(a > b && a> c){
    alert("O 'a' é o maior número dos três")
}
else if(b > a && b > c){
    alert("O 'b' é o maior número dos três")
}
else if(c > a && c > b){
    alert("O 'c' é o maior número dos três")
}
else{
    alert("todos são iguais")
}

*/

/*
let a = Number(prompt("Digite um valor para 'a' "))
let b = Number(prompt("Digite um valor para 'b' "))
let c = Number(prompt("Digite um valor para 'c' "))
if(a > b && a> c){
    alert("O 'a' é o maior número dos três")
}
else if(b > a && b > c){
    alert("O 'b' é o maior número dos três")
}
else if(c > a && c > b){
    alert("O 'c' é o maior número dos três")
}
if(a < b && a< c){
    alert("O 'a' é o menor número dos três")
}
else if(b < a && b < c){
    alert("O 'b' é o menor número dos três")
}
else if(c < a && c < b){
    alert("O 'c' é o menor número dos três")
}
else{
    alert("todos são iguais")
}

*/

/*
let a = Number(prompt("Digite o valor do produto 'a' "))
let b = Number(prompt("Digite o valor do produto 'b' "))
let c = Number(prompt("Digite o valor do produto 'c' "))
if(a < b && a < c){
    alert("O 'a' é o menor número dos três")
}
else if(b < a && b < c){
    alert("O 'b' é o menor número dos três")
}
else if(c < a && c < b){
    alert("O 'c' é o menor número dos três")
}
else{
    alert("todos são iguais")
}

*/

/*
let a = Number(prompt("Digite um valor para 'a' "))
let b = Number(prompt("Digite um valor para 'b' "))
let c = Number(prompt("Digite um valor para 'c' "))
numeros = [a, b, c]
alert(numeros.sort((a, b) => b - a))


*/

/*
let horario = prompt("Em qual turno você estuda ? Digite 'M' para Matutino, V para Vespertino e N para Noturno").toLowerCase()
switch(horario){
    case "m" : alert("Bom dia!"); break;
    case "v" : alert("Boa tarde!"); break;
    case "n" : alert("Boa noite!"); break;
    default : alert("Valor inválido"); break;
}

*/

/*
let salario = Number(prompt("Digite um valor para ser o salário"))
if(salario < 280 && salario > 0){
    alert(salario+" é o salário atual")
    valor_aumento= salario*0.2
    salario = salario*1.2
    alert("20%")
    alert(valor_aumento+" de aumento")
    alert(salario)
}
else if(salario > 280.01 && salario < 700){
    alert(salario+" é o salário atual")
    valor_aumento= salario*0.15
    salario = salario*1.15
    alert("15%")
    alert(valor_aumento+" de aumento")
    alert(salario)
}
else if(salario > 700.01 && salario < 1500){
    alert(salario+ "é o salário atual")
    valor_aumento= salario*0.1
    salario = salario*1.1
    alert("10%")
    alert(valor_aumento+" de aumento")
    alert(salario)
}
else if(salario > 1500){
    alert(salario, "é o salário atual")
    valor_aumento= salario*0.05
    salario = salario*1.05
    alert("5%")
    alert(salario+" de aumento")
    alert(salario)
}
else{
    alert('você esta com uma divida de '+salario)
}

*/

/*
let hora = Number(prompt("Digite por quantas horas você trabalhou"))
let valor_da_hora = Number(prompt("Digite quanto vale a sua hora"))
let salario = hora * valor_da_hora
if(salario < 900 && salario > 0){
    alert(salario+ " é o salário atual")
    ir = salario*0
    alert(ir+ " é o valor do IR")
    inss = salario*0.1
    alert(inss+" é o valor do INSS")
    sindicato = salario*0.03
    alert(sindicato+ " é o valor do sindicato")
    fgts = salario*0.11
    alert(fgts+ " é o valor do FGTS")
    salario_final = salario - (ir + inss + sindicato)
    alert(salario_final + " é o seu salário final")
}
else if(salario < 1500 && salario >= 900){
    alert(salario+ " é o salário atual")
    ir = salario*0.05
    alert(ir+ " é o valor do IR")
    inss = salario*0.1
    alert(inss+" é o valor do INSS")
    sindicato = salario*0.03
    alert(sindicato+ " é o valor do sindicato")
    fgts = salario*0.11
    alert(fgts+ " é o valor do FGTS")
    salario_final = salario - (ir + inss + sindicato)
    alert(salario_final + " é o seu salário final")
}
else if(salario < 2500 && salario >= 1500){
    alert(salario+ " é o salário atual")
    ir = salario*0.1
    alert(ir+ " é o valor do IR")
    inss = salario*0.1
    alert(inss+" é o valor do INSS")
    sindicato = salario*0.03
    alert(sindicato+ " é o valor do sindicato")
    fgts = salario*0.11
    alert(fgts+ " é o valor do FGTS")
    salario_final = salario - (ir + inss + sindicato)
    alert(salario_final + " é o seu salário final")
}
else if(salario >= 2500){
    alert(salario+ " é o salário atual")
    ir = salario*0.2
    alert(ir+ " é o valor do IR")
    inss = salario*0.1
    alert(inss+" é o valor do INSS")
    sindicato = salario*0.03
    alert(sindicato+ " é o valor do sindicato")
    fgts = salario*0.11
    alert(fgts+ " é o valor do FGTS")
    salario_final = salario - (ir + inss + sindicato)
    alert(salario_final + " é o seu salário final")
}

*/

/*
let numero = Number(prompt("Informe um número de 1 a 7:"))
switch(numero){
    case 1 : alert("Domingo"); break;
    case 2 : alert("Segunda-feira"); break;
    case 3 : alert("Terça-feira"); break;
    case 4 : alert("Quarta-feira"); break;
    case 5 : alert("Quinta-feira"); break;
    case 6 : alert("Sexta-feira"); break;
    case 7 : alert("Sábado"); break;
    default : alert("Número inválido"); break;
}

*/

/*
let nota1 = Number(prompt("Informe a sua primeira nota"))
let nota2 = Number(prompt("Informe a sua segunda nota"))
alert(nota1 + " é a sua primeira nota")
alert(nota2 + " é a sua segunda nota")
let media = (nota1 + nota2) / 2
alert(media + " é a sua média")
alert("A média é um valor representativo que resume um conjunto de dados.")
if(media > 9 && media <= 10){
    alert("Você foi um aluno nota A")
    alert("Você foi aprovado")
}
else if(media > 7.5 && media <= 9){
    alert("Você foi um aluno nota B")
    alert("Você foi aprovado")
}
else if(media > 6 && media <= 7.5){
    alert("Você foi um aluno nota C")
    alert("Você foi aprovado")
}
else if(media > 4 && media <= 6){
    alert("Você foi um aluno nota D")
    alert("Você foi reprovado")
}
else if(media > 0 && media <= 4){
    alert("Você foi um aluno nota E")
    alert("Você foi reprovado")
}
else if(media == 0){
    alert("Sua média foi zero")
}
else{
    alert("Não é possível")
}

*/

let lado1 =  Number(prompt("Informe o primeiro lado do triângulo"))
let lado2 =  Number(prompt("Informe o segundo lado do triângulo"))
let lado3 =  Number(prompt("Informe o terceiro lado do triângulo"))
if(lado1 > (lado2 + lado3) || lado2 > (lado1+ lado3) || lado3 > (lado1 + lado2)){
    alert("É, matematicamente, impossível existir um triãngulo assim")
}
else{
    alert("Esse triângulo existe")
}
if(lado1 == lado2 && lado2 == lado3){
    alert("Esse triângulo é equilátero")
}
else if(lado1 == lado2 && lado2 != lado3 || lado3 == lado2 && lado2 != lado1 || lado1 == lado3 && lado2 != lado3){
    alert("Esse triângulo é isóceles")
}
else{
    alert("Esse triângulo é escaleno")
}

