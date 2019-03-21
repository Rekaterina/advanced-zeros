module.exports = function getZerosCount(number, base) {
    let sum = 0;
    let result = [];
    let num = number;
    let primeNumbers = [];
    let amountPrimeNumbers = [];
    let obj = {};
    let j = 2;
    
    while (base > 0 && j <= base) {
        while (base % j == 0) {
            primeNumbers.push(j);
            base = base / j;
        };
        j++;
    };
   
    primeNumbers.forEach(function(item) {
        if (obj[item] != undefined) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });
     
    for (let key in obj) {
        amountPrimeNumbers.push([+key, obj[key]]);
    };
    
    for (let i = 0; i < amountPrimeNumbers.length; i++) {
        while (number > 0) {
            number = Math.floor(number / amountPrimeNumbers[i][0]);
            sum += number;
        };
        result[i] = Math.floor(sum / amountPrimeNumbers[i][1]);
        sum = 0;
        number = num;
    }

    return Math.min(...result);
}