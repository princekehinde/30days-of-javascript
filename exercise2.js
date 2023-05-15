// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2)); // Output: '30'

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
console.log(challenge.slice(3)); // Output: 'Days Of JavaScript'

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')); // Output: true

// Split the string into an array using split() method
console.log(challenge.split()); // Output: ['30 Days Of JavaScript']

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')); // Output: ['30', 'Days', 'Of', 'JavaScript']

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(',')); // Output: ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
console.log(challenge.replace('JavaScript', 'Python')); // Output: '30 Days Of Python'

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
console.log(challenge.charAt(15)); // Output: 'J'

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(15)); // Output: 74

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')); // Output: 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
console.log(challenge.lastIndexOf('a')); // Output: 9

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let senItence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because')); // Output: 31

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because')); // Output: 47

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because')); // Output: 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let stringWithWhitespace = ' 30 Days Of JavaScript ';
console.log(stringWithWhitespace.trim()); // Output: '30 Days Of JavaScript'

//LEVEL 2
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if(typeof '10' !== typeof 10) {
'10' = 10;
}

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = parseFloat('9.8');
if(num !== 10) {
num = 10;
}

// Check if 'on' is found in both python and jargon
console.log('on' in 'python' && 'on' in 'jargon'); // false

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('jargon' in 'I hope this course is not full of jargon'); // true

// Generate a random number between 0 and 100 inclusively.
let randomNum1 = Math.floor(Math.random() * 101);
console.log(randomNum1);

// Generate a random number between 50 and 100 inclusively.
let randomNum2 = Math.floor(Math.random() * 51) + 50;
console.log(randomNum2);

// Generate a random number between 0 and 255 inclusively.
let randomNum3 = Math.floor(Math.random() * 256);
console.log(randomNum3);

// Access the 'JavaScript' string characters using a random number.
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);

// Use console.log() and escape characters to print the following pattern.
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let phrase = sentence.substr(25, 23);
console.log(phrase); // because because because



