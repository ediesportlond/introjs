// const fruits = [
//     'Bananas',  //[0]
//     'Berry',    //[1]
//     'Apple',    //[2]
//     'Mango',    //[3]
//     'Guanabana' //[4]
// ];

// // console.log('My Fruits are: ',fruits);
// // console.log('The first fruit is : ',fruits[0]);
// // console.log('The second fruit is : ',fruits[1]);

// //return the fruit at position i from the array.
// function getFruit(index) {
//     return fruits[index];
// }

// console.log(`I have ${fruits.length} fruist in my list.`);
// console.log(getFruit(0));
// console.log(getFruit(1));
// console.log(getFruit(2));
// console.log(getFruit(3));
// console.log(getFruit(4));

const playersNumbers = [12, 33, 44, 55, 33, 99];

// console.log(playersNumbers[0] + playersNumbers[2]);

const students = [
    {
        name: 'Bob',
        age: 24
    },
    {
        name: 'Jennifer',
        age: 32
    },
    {
        name: 'Lily',
        age: 55
    }
];

const firstStudent = students[0];

// console.log(firstStudent.name);
// console.log(students[1].name);

const { name, age } = students[0];
// console.log(`First Student's name is ${name} and they're ${age} years old.`);

const sentence = 'Hello Boca Code';
// console.log(sentence.length);
const arrayOfLetters = sentence.split('');
// console.log(arrayOfLetters);
const arrayOfWords = sentence.split(' ');
// console.log(arrayOfWords);
// console.log(`There are ${arrayOfWords.length} words.`);

let fruits = [
    'Bananas',  //[0]
    'Berry',    //[1]
    'Apple',    //[2]
    'Mango',    //[3]
    'Guanabana' //[4]
];
console.log(fruits);

// fruits.push('Grapes');
// console.log(fruits);
// const oldFruit = fruits.pop(); //removes form the end
// console.log(oldFruit);
// console.log(fruits);

// const oldFruit2 = fruits.shift(); //removes form the start
// console.log(oldFruit2);
// console.log(fruits);

// fruits.unshift('Kiwi');
// fruits.unshift('Fig');
// console.log(fruits);

// fruits = ['Tomatoes', ...fruits, 'Dragon Fruit'];
// console.log(fruits);

// console.log(fruits.indexOf('Mango'));

console.log(`My fruits are: ${fruits.join(', ')}`);