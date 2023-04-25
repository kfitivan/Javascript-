console.log("Ivan is back")
//console.error('this is an error')
console.warn('thus is a warning')
//MDN web docs for more console functionalities and debbuging

// assigning values. we use let and const

let age = 29;
   // age = 31;
console.log(age);

// datatypes
//strings, intergers, boolean, undefined, null, numbers

const name ="ivan";
 age = 29;
const isCool = true;
const y =undefined;
const ratings =40.9;
const p=null;
let z;

console.log(typeof y)

//concetnation

console.log('My name is' + name + 'and i am'+   age)

//Teplate string concetnation
console.log(`My name is ${name} and i am ${age}`)

console.log(`My rate is ${ratings} and ${isCool}`)

//methods 

const s="I love coding"

console.log(s.length)
console.log(s.toLocaleUpperCase().substring(0,6))
console.log(s.split(','))

//arrays are variables that hold multiple values
const arr=[1,2,3,4,5,6]
const fruits=['apple', 'oranges', 'banana', 'mango']
    fruits[4]="grapes" //adding onto an array
    fruits.push("Tomatoes")// we use push method to add objects on the last end of an array object
    fruits.unshift("strawberry")// this method adds the object in first position 
    
console.log(arr.length)

console.log(arr)
console.log(arr.toLocaleString)

console.log(fruits)
console.log(fruits[4]) //accessing an array object with an index

console.log(fruits.join(','))
console.log(fruits.pop())

//Objects
const country={
    name:'Uganda',
    city: 'kampala',
    location:'eastafrica',
    districts:['wakiso','entebbe','kanungu','kabale'],
    population:{
        total:'40 million',
        percapita:90

    }

}

console.log(country.location, country.population)
console.log(country.districts[0])//acssesing object in an array with index
console.log(country.population.percapita)


//Arrays of objects.

const todos=[
    {
        id:1,
        text: 'learn react',
        completed: true,
},
{
    id:2,
    text: 'learn python',
    completed: false,
},
{
    id:1,
    text: 'learn JS',
    completed: true,
}
]
console.log(todos)
console.log(todos[1].text) //accessing a specifi array object
console.log(todos[2].completed)

//sending JSON data to server

const JSONData = JSON.stringify(todos)
console.log(JSONData)

//loops
//for
for(let i=0; i<10; i++){
    console.log(i)
}
for(let i=0; i<=todos.length; i++){
    console.log(i)

}
for(let todo of todos){ 
    console.log(todo.text)

}

//high order array methods to iterate over arrays

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text)
})
const todotext =todos.map(function(todotext){
   return todotext.text
})
console.log(todotext)

const todocompleted =todos.filter(function(todocompleted){
    return todocompleted.completed === true
})
//while
let i=0;
while(i>5){
    console.log(i);
    i++;
    
}
// tomorow 25/4/2023... Conditionals.

const x =20;

    if(x === 25){
        console.log(x)
    } else{
        console.log('x is greater than 20')
    }
// if else
const t =10
    if(t >= 10){
        console.log(t)

    }else if(t <10){
        console.log('t is greater than 10')
    
    }else{
        console.log('t is equal to 10')
    }

// instead of nesting if statements, we use && operator or || operator

const r=10
const w=25
if(r>12 && w===12){
    console.log(r)

}

if(r<=10 || w<=25){
    console.log('r is less or eaqual to 10')
}

// functions

function addNums(Num1, Num2){
    return Num1 + Num2

}
console.log(addNums(7,8))

//OOP using a constractor function
//constructor function

function Person(FirstName, LastName, DOB){
    this.FirstName = FirstName
    this.LastName = LastName
    this.DOB = new Date(DOB)
}
//instantiate the object
const person1 = new Person('Ivan', 'Tweheyo', '12-09-1990')
const person2 = new Person('john', 'deo', '16-09-1980')
console.log(person1)

console.log(person2.DOB.getFullYear())