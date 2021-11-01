function addToCart(quantity,productName="Elma ") {
    console.log("sepete eklendi !  urun : "
    +productName+"adet: "+ quantity)
}

addToCart(10)

let sayHello = ()=>{
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("hll")
}
sayHello2()


function addToCart2(productName , quantity, unitPrice) {


    
}
addToCart2("elma", 5,10)
addToCart2("armut", 2,20)
addToCart2("limon", 3,15)

let product1 = {productName:"elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("urun : "+ product.productName)
    console.log("adet : "+ product.quantity)
    console.log("fiyat : "+ product.unitPrice)
}

addToCart3(product1)
let product2 = {productName:"elma",unitPrice:10,quantity:5}
let product3 = {productName:"elma",unitPrice:10,quantity:5}

product2=product3
product2.productName="karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
    
}

let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"arm",unitPrice:10,quantity:5},
    {productName:"karp",unitPrice:10,quantity:5}

]

addToCart4(products)

function add(bisey,...numbers)//rest operatoru (...)
 {
     let total = 0 ;
     for (let i = 0; i < numbers.length; i++) {
        total= total + numbers[i]
         
     }
     console.log(total)
     console.log(bisey)
   
}
add(20, 30)

let numbers = [ 32,20,3,32,656,564]

console.log("en buyuk : " +Math.max(...numbers))

let [icAnadolu, marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name : "ic anadolu" ,population: "20m"},
     {name:"marmara",population: "30m"} ,
     {name:"karadeniz",population : "10m"},
     [
         ["ankara","konya"],
         ["ist","bursa"],
         ["sinop  ","trabzon"],
     ]
    ]
    console.log(icAnadolu.name)
    console.log(icAnadolu.population)
    console.log(icAnadoluSehirleri)
    console.log(marmaraSehirleri)
    console.log(karadenizSehirleri)

    let newProductName , newUnitPrice , newQuantity
    ({productName:newProductName , unitPrice:newUnitPrice , quantity : newQuantity  }
        = {productName:"Ürün 1" , unitPrice:10 , quantity:5}
    )
    
    console.log(newProductName) // Ürün 1
    console.log(newUnitPrice) // 10
    console.log(newQuantity) // 5