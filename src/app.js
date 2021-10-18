console.log("Merhaba ")
//js type safe degildir.
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.1
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 

console.log(euroDun)
//camelCasing 
//PascalCasing

let konutKredileri = ["konut kredisi" ,"emlak konut kredisi","kamu konut kredisi"]

console.log("<ul>")
for(let i = 0; i < konutKredileri.length ;i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")
console.log(konutKredileri)