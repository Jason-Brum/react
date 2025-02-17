// 1 - var, let e const
var x = 10
var y = 15


if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName ()  {
    const name = "Jason"
    console.log(name)
}

const name = "Pedro"

logName()

console.log(name)

// 2 - arrow functions
const soma = function soma(a, b) {
    return a + b
}

const arrowSoma = (a, b) => a + b

console.log(soma(5,5))
console.log(arrowSoma(5,5))

const greeting = (name) => {
    if(name) {
        return "Olá " + name + "!"
    } else {
        return "Olá!"
    }
}

console.log(greeting("Jason"))
console.log(greeting())

const testeArrow = () => console.log("Testou!")

testeArrow()

const user = {
    name: "Manel",
    sayUserName() {
        var self = this
        setTimeout (function(){
            console.log(self)
            console.log("Username: " + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout (() => {
            console.log(this)
            console.log("Username: " + this.name)
        }, 700)
    },
}

//user.sayUserName()
//user.sayUserNameArrow()

// 3 - Filter
const array = [1, 2, 3, 4, 5]

const highNumbers = array.filter((n) =>  {
    if (n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: "Jason", available: true},
    {name: "Pedro", available: false},
    {name: "Thiago", available: false},
    {name: "João", available: true},
]

const availableUsers = users.filter((user) => user.available)

console.log(availableUsers)

// 4 - Método MAP

const products = [
    {name: 'Camisa', price: 49.99, category: 'Roupas'},
    {name: 'Chaleira elétrica', price: 89.99, category: 'Eletro'},
    {name: 'Fogão', price: 899.99, category: 'Eletro'},
    {name: 'Calça jeans', price: 199.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas') {
        product.onSale = true
    }
})

console.log(products)

// 5 - template literals

const userName = 'Jason'
const idade = 47

console.log(`O nome do usuário é ${userName} e ele tem ${idade} anos.`)

// 6 - Destructuring

const frutas = ["Maçã", "Melancia", "Mamão", "Manga"]

const [f1, f2, f3, f4] = frutas

console.log(f1)
console.log(f3)
console.log(f4)

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"

}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(
    `O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e é da cor ${color} `
)

// 7 - Spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1,  4]

console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const othersInfos = {Km: 10000, price: 49000}

const car = {...carName, ...carBrand, ...othersInfos}

console.log(car)

//8 - Classes
class Produto {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    produtoComDesconto(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const camisa = new Produto("Camisa manga longa", 20)

console.log(camisa.name)
console.log(camisa.produtoComDesconto(10))
console.log(camisa.produtoComDesconto(50))

const tenis = new Produto("Tênis verde", 120)

console.log(tenis.produtoComDesconto(20))

// 9 - Herança
class ProdutoComAtributos extends Produto {
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log("As cores são: ")
        this.colors.forEach((a) =>{
            console.log(a)
        })
    }
}

const hat = new ProdutoComAtributos("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)
console.log(hat.produtoComDesconto(30))
console.log(hat.showColors())





