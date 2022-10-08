/*
    Write a function that takes a number.
    The function will console log everything that can be divided by 3
    input: 15
    output: 
    3
    6
    9
    12
    15
*/

function divideEqualy(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {   //if numbers divides equally by 3, then do something.
            console.log(i);
        }
    }
}

divideEqualy(30);

/*
    FIZZBUZZ
    write a function that goes through a list of numbers. 
    When the number is divisible by three print Fizz.
    When the number is divisible by five print Buzz.
    When number is divisible by both print FIZZBUZZ!
    Console.log all numbers except when it's fizz or buzz.
   Input: 5
    Output:
    1
    2
    FIZZ
    4
    BUZZ
*/