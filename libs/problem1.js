function showPrimes(n) {
    let arrNumber = [];
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        arrNumber.push(i);

    }
    alert(`For n = ${inputNumber} prime number are ${arrNumber}`);
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

let inputNumber = Number(prompt("Enter a positive"));

while (isNaN(inputNumber) || inputNumber < 0) {
inputNumber = Number(prompt("Enter a positive"));
}

showPrimes(inputNumber);