let idade = Number(prompt("Insira sua idade"))

if (idade <= 10) {
    console.log(idade)
    let dentroEscopo = "Ryan"
    console.log(dentroEscopo)
    console.log("Você tem menos ou 10 anos")
    if (true) {
        console.log("Estou no 3º ESCOPO")
        console.log(dentroEscopo)
    }
} else (
    console.log("Você tem mais de 10 anos")
)
console.log("Saí fora do escopo do IF")
console.log(dentroEscopo)