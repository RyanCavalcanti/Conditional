let idade = Number(prompt("Insira sua idade"))
let nome = prompt("Insira seu nome:")

// if (idade <= 10) {
//     console.log(idade)
//     let dentroEscopo = "Ryan"
//     console.log(dentroEscopo)
//     console.log("Você tem menos ou 10 anos")
//     if (true) {
//         console.log("Estou no 3º ESCOPO")
//         console.log(dentroEscopo)
//     }
// } else (
//     console.log("Você tem mais de 10 anos")
// )
// console.log("Saí fora do escopo do IF")
// console.log(dentroEscopo)

if(idade === 20 && nome === "Ryan"){
    console.log("Seu nome é Ryan e você tem 20 anos")
} else if(idade === 23 || nome === "Ryan"){
    console.log("Você tem 20 anos ou seu nome é Ryan")
} else {
    console.log("Seu nome não é Ryan e você não tem 20 anos")
}