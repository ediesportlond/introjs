function slowThing(callback){
    console.log('Hi, I am slow');
    callback();
}

slowThing(() => {
    console.log('This is CALLBACK!');
});

console.log('------------------------');

function doSecond(){
    console.log('Do this after slowthing.');
}

slowThing(doSecond);

function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5));