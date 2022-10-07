/*
1. Write a function to conver a temperature fiven in farenheit to celcius. 
    output "X in F is Y in C"

    subtract 32 and multiply by .5556 (or 5/9).

2. Write a function to convert USD to Japanaese Yen.
    output: "$45 is __ Yen"

    1 USD = 145.16 Japanese Yen

3. Liquid Ounces to pints
    output: "20oz is 1 pint"
    
    20 liquid ounce is = 1 pint

4. Write a function that takes an array of students(objects). At least four. List out last names.
    [
        {firstName: "Eddie", lastName: "Espinosa"}, 
        {firstName: "Eddie", lastName: "Espinosa"}, 
        {firstName: "Eddie", lastName: "Espinosa"}, 
        {firstName: "Eddie", lastName: "Espinosa"}, 
    ]

5. Write a function that takes a list of groceries as an array. Takes a number 1-4 and list that item.
    ["milk", "bread", "eggs", "juice"]

6. Write a function that takes a word and a number and outputs that word that many times. 
*/

const farToCel = (f) => {
    const c = (f-32) * .5556;
    console.log(`${f}° in Farenheit is ${c}° in Celcius`);
}
farToCel(32);
farToCel(40);
farToCel(-40);
farToCel(2);

//write out the function, give name, define parameter

    //create variable for yen. parameter = UDS, multiple dollars by 145.16

    //console log phrase.

//close out function

const thisManyTimes = (word, num) => {
    for(let i = 0; i < num; i++){
        console.log(word);
    }
}

thisManyTimes('Jeff', 15)

