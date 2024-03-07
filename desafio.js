let fome = prompt('Você está com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restaurante = prompt('O restaurante está aberto?')

if(fome === "Não" || dinheiro === "Não"){
    console.log("Hoje a janta será em casa")
} else if(dinheiro === "Sim" && restaurante === "Sim"){
    console.log("Hoje o jantar será no seu restaurante preferido!")
} else {
    console.log("Peça um delivery")
}