let idade = Number(prompt('insira a sua idade'))
let nome = prompt('insira seu nome')

// if(idade <= 10) essa é a condição, se verdadeira, executar oq está dentro das chaves {}


//if(idade <= 10){ 
    //console.log(idade)
    //let dentroEscopo = 'Levi'
    //console.log(dentroEscopo)
    //console.log('Você tem menos ou tem 10 anos')
    //if(true){
       // console.log("Estou no terceiro escopo")
       // console.log(dentroEscopo)
    //}
//}else{
    //console.log("Você tem mais de 10 anos")
//}
//console.log("Saí do escopo do IF")
//console.log(dentroEscopo)



//     let idade = Number(prompt('insira a sua idade'))

//     if(idade <= 10){  
//     console.log('Você tem menos ou tem 10 anos')
//     }else{
//     console.log("Você tem mais de 10 anos")    
//     }

// Esse é o primeiro exemplo da aula 4, if e else; e escopo. A variável idade, criada fora (acima do escopo if/else) pode ser usada dentro dele, mas uma variável, criada dentro do if/else não pode ser usada fora do mesmo, ex: let dentroEscopo, só consigo usar ela se eu criar um outro if dentro desse mesmo, se eu criar um escopo dentro do escopo que criei a variável como nos exemplos acima, o esquema é ver eles no console do dev tools.


if(idade === 23 && nome === "Levi"){
    console.log("Seu nome é Levi e você tem 23 anos")
}
// se eu tirar essa linha em que escrevo, o comentário de baixo não se concretiza, pois esse if estará encadeado e só momstrará 1 dos console log.
 else if(idade === 23 || nome ==="Levi"){ //sem esse else, o console mostra o if de cima e esse de baixo, caso eu coloque as info. corretas poq o primeiro if, não está dentro de um else.
    console.log("Ou você tem 23 anos, ou seu nome é Levi. xD")
}else{
    console.log("Seu nome não é Levi e você não tem 23 anos. ¬¬")
}


//pra utilizar o mesmo arquivo pros dois exemplos, escopo e E/OU eu comentei 1 deles, o escopo, no caso. Qualquer coisa trocar os comentários.