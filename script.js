var numOfTrials = +prompt("Ishlamoqchi bo'lgan misollar mig'dorini kiriting:");
var correctAnswers = 0;

for (var i = 0; i < numOfTrials; i++) {
    var num2 = Math.floor(Math.random() * 10) + 1;
    var num1 = Math.floor(Math.random() * 10) + 1; 
    var operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    var answer = +prompt("Tog'ri jovobni kiriting " + num1 + " " + operation + " " + num2 + "?");
    var correctResult;
    switch (operation) {
        case '+':
            correctResult = num1 + num2;
            break;
        case '-':
            correctResult = num1 - num2;
            break;
        case '*':
            correctResult = num1 * num2;
            break;
    }
    if (answer === correctResult) {
        correctAnswers++;
        console.log("Sizning javobingiz to'g'ri!");
    } else {
        console.log("Sizning javobingiz noto'g'ri! To'g'ri javob: " + correctResult);
    }
}
console.log();