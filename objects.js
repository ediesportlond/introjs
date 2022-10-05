const person = {
    name: 'Eddie',
    age: 28,
    address: '123 Main St'
}

// console.log('Person is called: ', person.name);
// console.log('Person is called: ', person['name']);

// const name = person.name;
// const age = person.age;

const {name, age} = person;  

//New line works only with back tics
console.log(`My name is ${name}. 
I'm ${age} years old.`); 