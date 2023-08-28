//let MeuNome = 'Levi Camilo'
//console.log(MeuNome)
//MeuNome = 'Levi Camilo de Souza'
//console.log(MeuNome)

//const a = 'Levi Sulzbach'
//console.log(a)
//a = 'Levi Sulzbach de Souza'
//console.log(a)

//Declaração de variaveis
//Aqui é onde eu crio as variaveis e defino qual o tipo, booleano, number, string etc...
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informação ao usuáio e atribuindo os valores as variaveis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

//Calculando o ano em que a pessoa nasceu e o IMC da mesma.
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibindo as informações no console
console.log(
    "Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "Kg e seu IMC é de: " + imc + "kg/m²"
)



