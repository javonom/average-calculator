let numbers = [];

function addNumber() {
    const input = document.getElementById("numberInput");
    const number = parseFloat(input.value);

    if (!isNaN(number)) {
        numbers.push(number);
        displayNumbers();
    }

    input.value = "";
} 

function displayNumbers() {
    const numberList = document.getElementById("numberList");
    numberList.textContent = numbers.join(", ");
}

function calculateAverage() {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    const average = sum / numbers.length;
    displayAverage(average);
}

function displayAverage(average) {
    const averageResult = document.getElementById("averageResult");
    averageResult.textContent = average.toFixed(2);
}