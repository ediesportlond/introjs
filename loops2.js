for(let i = 1; i <= 10; i++){
    let wholeRow = '';
    for(let j = 1; j <=10; j++){
        let sum = i*j;
        if(sum < 10){
            wholeRow += sum + '   ';
        } else if(sum < 100){
            wholeRow += sum + '  ';
        } else {
            wholeRow += sum;
        }
    }
    console.log(wholeRow);
}