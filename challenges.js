/*
    isDrinkingAge
    computeAreaOfTriangle
*/

const age = 19;
function isDrinkingAge(age){
    if(age >= 21){
        return true;
    } else {
        return false;
    }
}

const b = 2;
const h = 3;
function computeAreaOfTriangle(b, h){
    return 1/2*b*h;
}

console.log(isDrinkingAge(age));
console.log(computeAreaOfTriangle(b, h));