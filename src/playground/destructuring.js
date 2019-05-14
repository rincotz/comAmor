// Object Destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}

console.log(`${person.name} is ${person.age}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName)

// Array Destructuring

const address = ['1299 Juniper Street', 'Philadelphia', 'Penssylvania', '19147']
const item = ['coffee (hot)', '$2.00', '$2.50', '2.75']

const [ product, small, medium, large ] = item;

console.log(`A medium ${product} costs ${medium}`)



