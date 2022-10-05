const subtotal = 17.24;
const taxRate = 0.07;

function calculateSalesTax(subtotal, taxRate){
    return subtotal * taxRate;
}

const taxTotal = calculateSalesTax(subtotal, taxRate);
const total = subtotal + taxTotal;

console.log('Subtotal     $', subtotal.toFixed(2));
console.log('Tax          $', taxTotal.toFixed(2));
console.log('-------------------------');
console.log('Total        $', total.toFixed(2));

//toFixed also turns number into a string.