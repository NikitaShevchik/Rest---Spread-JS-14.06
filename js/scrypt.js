"use strict"

const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Владивосток']
const citiesEurope = ['Амстердам', 'Берлин', 'Прага', 'Вена', 'Барселона']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3,
    Vladivostok: 4
}
const citiesEuropeWithPopulation = {
    Moscow: 44,
    Amsterdam: 3,
    Berlin: 8,
    Praha: 5,
    Viena: 2,
    Barcelona: 9
}

//Spread

// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesEurope, 'Вашингтон', ...citiesRussia]

// const allCities = citiesEurope.concat(citiesRussia)

// console.log(allCities)

// console.log({ ...citiesRussiaWithPopulation })
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })
// console.log({ ...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation })

//Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers)) // РАНЬШЕ ДО ES6 было так

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]
// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))




// Rest

function sum(a, b, ...rest) {
    console.log(rest)
    return a + b + rest.reduce((a, i) => a + i, 0)
}
const numbers = [1, 2, 3, 4, 5, 8, 9, 10, 11]

//Spread
// console.log(sum(...numbers))

// const a = numbers[0] //СТАРОЕ ДО ЕС6
// const b = numbers[1] //СТАРОЕ ДО ЕС6

const [a, b, ...other] = numbers

console.log(a, b, other)

const person = {
    name: 'Nikita',
    age: 22,
    city: 'Moscow',
    country: 'Rusiia'
}

const { name, age, ...adress } = person
console.log(name, age, adress)
