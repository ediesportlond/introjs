const age = 19.5;
const isReligiousExempt = true;

if(age >= 21 || isReligiousExempt){
    console.log('You can drink!');
} else if(age >= 18){
    console.log('You can party!');
} else {
    console.log('You can stay home.');
}

//--------------//
const canCode = true;
const yearsExperience = 23;

if(canCode && yearsExperience > 5){
    console.log('You are hired!');
}