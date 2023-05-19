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
// const hour = new Date();
// const currentHour = hour.getHours();
// console.log(currentHour); // 11

// // what is minutes now
// const minute = new Date();
// const currentMinute = minute.getMinutes();
// console.log(currentMinute); // 17

// // find out the number of seconds elapsed from january 1, 1970 to now
// const jan1 = new Date(1970, 0, 1);
// const jan2 = new Date();
// const seconds = jan2.getTime() - jan1.getTime();
// console.log(seconds); // 1684380221761


// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// let base = prompt('Enter base: ');
// let height = prompt('Enter height: ');
// let area = (base * height) / 2;

// console.log(area); // 100

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// let sideA = prompt('enter side a: ')
// let sideB = prompt('enter side b: ')
// let sideC = prompt('enter side c: ')

// let perimeter = sideA + sideB + sideC;

// console.log(perimeter); // 12

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length = prompt('Enter length: ');
// let width = prompt('Enter width: ');
// let area = length * width;
// let perimeter = 2 * (length + width);

// console.log(area);
// console.log(perimeter);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius = prompt('Enter radius: ');
// let area = Math.PI * radius * radius;
// let circumference = 2 * Math.PI * radius;
// console.log(area);
// console.log(circumference);


// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// using prompt.
// let slope = prompt('Enter slope: ');
// let intercept = prompt('Enter intercept: ');
// let y1 = 2;
// let x1 = 2;
// let y2 = 6;
// let x2 = 6;
// let m = (y2 - y1) / (x2 - x1);
// console.log(m);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let e1 = prompt('Enter x1: ');

let s1 = prompt('Enter y1: ');

let d2 = prompt('Enter x2: ');

let c2 = prompt('Enter y2: ');

let sdlope = (y2 - y1) / (x2 - x1);

console.log(sdlope);













