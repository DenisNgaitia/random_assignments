let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero.");
        return null;
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Addition of 5 and 3: " + add(5, 3));
console.log("Subtraction of 5 from 10: " + subtract(10, 5));
console.log("Division of 10 by 2: " + divide(10, 2));
console.log("Multiplication of 4 and 7: " + multiply(4, 7));
console.log("Division of 10 by 0: " + divide(10, 0));

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm').value;

        if (password !== confirmPassword) {
            messageDiv.style.display = 'block';
            messageDiv.textContent = "Passwords do not match!";
            messageDiv.style.color = 'red';
            return;
        }

        messageDiv.style.display = 'block';
        messageDiv.textContent = `Welcome, ${name}! You have successfully registered.`;
        messageDiv.style.color = 'green';

    });
});

