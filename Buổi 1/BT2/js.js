// Write a script that ask 2 things from users, their first name and last name, then greet them with their full name
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
let fullName = lastName + ' ' + firstName;
alert(`Hi ${fullName}`);