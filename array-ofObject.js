const produts =[
    {id:1, name:'lenevo', price:65000},
    {id:2, name: 'del', price: 45000},
    {id:3, name: 'hp', price:40000},
    {id:4, name: 'mac', price:65000},
]

const map = produts.map(produ=> produ.price)
console.log(map)

// Filter
const expensive = produts.filter(p=>p.price > 45000);
console.log(expensive)

// find 
const affordable = produts.find(p=> p.price> 45000)
console.log(affordable)

// reduce 
const total = produts.reduce((acum, current)=> acum+current.price, 0)
console.log(total)

const people = [
    {name: "mina", age: 20},
    {name: "rina", age: 15},
    {name: "suchorita", age: 22},
]
// const totalage = people.reduce((acum, curent)=> acum + curent.age, 0)
// console.log(totalage)

const filterpeople = people.filter(p => p.name === "mina")
console.log(filterpeople)
