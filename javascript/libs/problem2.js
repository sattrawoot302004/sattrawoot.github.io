function readInput() {
    let list = [];
    let inputNumber;

    while (true) {
        inputNumber = Number(prompt('Enter an interger (a negative intefer or quit):'))
        if (inputNumber >= 0) {
            list.push(inputNumber);
        } else if (inputNumber < 0 ) {
            break;
        } else { }

    }
    return list;
}

function displayStats(number) {

    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    let average = sum / number.length;

    // let minNumber = number[0];
    // let maxNumber = number[0];
    // for (let i = 1; i < number.length; i++) {
    //     if (number[i] < minNumber) minNumber = number[i];
    //     if (number[i] > maxNumber) maxNumber = number[i];
    // มีวิธีง่ายเรียกใช้ได้เลย

    let minNumber = Math.min(...number);
    let maxNumber = Math.max(...number);

    number.length > 0 ? alert(`For the list ${number}, the average is ${average.toFixed(2)}, the minimum is ${minNumber}, and the maximum is ${maxNumber}`) : alert(`For the list 0, the average is 0.00, the minimum is 0, and the maximum is 0`);

}


list = readInput();
displayStats(list);
