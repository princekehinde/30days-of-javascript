// //1. Declare firstName, lastName, country, city, age, isMarried, year
// //  variable and assign value to it and use the typeof operator to check different data types.

// let firstName = "John";
// let lastName = "Doe";
// let country = "USA";
// let city = "San Francisco";
// let age = 30;
// let isMarried = true;
// let year = 2020;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof year);

// output
// string
// string 
// string 
// string 
// number 
// boolean
// number 

// //2. check if type of '10' is equal to 10
// console.log(10 === 10); 
// // output: true

// // 3. check if parseint('9.8') is equal to 10
// console.log(parseInt('9.8') === 10);
// // output: false

// // 4. Boolean value is either true or false
// console.log(true === true);
// console.log(true === false);
// console.log(false === true);
// console.log(false === false);

// write three Javascript statement which provide truthy value.
// All numbers(positive and negative) are truthy except zero
// All strings are truthy except an empty string ('')
// The boolean true

// write three javascript statement which provide falsy value
// 0
// 0n
// null
// undefined

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// console.log(4 > 3); 
// // output: true
// console.log(4 >= 3)
// // output: true
// console.log(4 < 3);
// // output: false
// console.log(4 <= 3)
// // output: false
// console.log(4 == 4);
// // output: true
// console.log(4 === 4)
// // output:true
// console.log(4!= 4)
// // output: false
// console.log(4 !== 4)
// // output: false
// console.log(4 != '4')
// // output: false
// console.log(4 == '4')
// // output: true
// console.log(4 === '4');
// // output: false

// find the length of python and jargon and make a falsy comparsion statement.

// const word1 = "python";
// const word2 = "jargon";

// const lengthWord1 = word1.length;
// const lengthWord2 = word2.length;

// console.log(lengthWord1); // Output: 6
// console.log(lengthWord2); // Output: 6
// console.log(lengthWord1 > lengthWord2); // Output: true

// if (lengthWord1 !== lengthWord2) {
//     console.log("The length of 'python' is not equal to the length of 'jargon'.");
//   } else {
//     console.log("The length of 'python' is equal to the length of 'jargon'.");
//   }

// //   The length of 'python' is equal to the length of 'jargon'.

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// console.log(4 > 3 && 10 < 12); // Output: true
// console.log(4 > 3 && 10 > 12); // Output: false
// console.log(4 > 3 || 10 < 12); // Output: true
// console.log(4 > 3 || 10 > 12); //Output: true
// console.log(!(4 > 3)) //Output: false
// console.log(!(false)); //Output: true
// console.log(!(4 > 3 && 10 < 2)); //Output: true
// console.log(!(4 > 3 && 10 > 2)); //Output: false
// console.log(!(4 === '4')); //Output: true

// there is  'on' in both dragon and python
// const word1 = 'dragon';
// const word2 = 'python';

// const containsOn1 = word1.includes('on');
// const containsOn2 = word2.includes('on');

// console.log(containsOn1);  // true
// console.log(containsOn2);  // true

// // Use the Date object to do the following activities
// // what is the year today
// const year = new Date();
// console.log(year.getFullYear()); // 2023

// // what is the month today as a number
// const currentDate = new Date();
// const currentMonth = currentDate.getMonth();
// console.log(currentMonth); //4 because may is corresponding to zero base

// // what is the date today
// const date = new Date();
// console.log(date); //2023-05-18T11:17:28.506Z

// // what is the day of today as a number
// const Data = new Date();
// const currentDay = Data.getDate();
// console.log(currentDay); // 18

// what is hours now 

const hour = new Date();
const currentHour = hour.getHours();
console.log(currentHour); // 11

// what is minutes now

const minute = new Date();
const currentMinute = minute.getMinutes();
console.log(currentMinute); // 17

// find out the number of seconds elapsed from january 1, 1970 to now
const jan1 = new Date(1970, 0, 1);
const jan2 = new Date();
const seconds = jan2.getTime() - jan1.getTime();
console.log(seconds); // 1684380221761







