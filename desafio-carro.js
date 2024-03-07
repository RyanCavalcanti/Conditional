let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let cnh = prompt("Possui CNH? (Sim/Não)")
let carro = prompt("Possui Carro? (Sim/Não)")

if(idade < 18 || cnh === "Não"){
    console.log(`${nome}, você não pode dirigir`)
} else if(idade >=18 && cnh === "Sim" && carro === "Não"){
    console.log(`${nome}, você pode dirigir, mas não tem carro`)
} else (
    console.log(`${nome}, você será motorista!`)
)