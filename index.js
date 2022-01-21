const {sum} = require('./sum');
const prompt = require('prompt');


console.log('Welcome to the sum calculator!');
console.log('Please enter two numbers to add.');

prompt.start();

prompt.get(['firstNumber', 'secondNumber'], (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const sumResult = sum(parseFloat(result.firstNumber), parseFloat(result.secondNumber));
    console.log(`The sum of ${result.firstNumber} and ${result.secondNumber} is ${sumResult}`);
        
});

