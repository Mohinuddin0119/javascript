/*
// problem 1
var orange = 100; //1kg
var apples = 100; //1kg
var total = (orange + apples) * 2; //i buying 2 kg fruits
console.log(total)
var money = 500; //i have
console.log(money - total) //return 100

//problem 2
var math = 70;
var biology = 60.4;
var chemistry = 40.6;
var physics = 50;
var bangla = 80.2;
var allSubjectMark = math + biology + chemistry + physics + bangla;
console.log(allSubjectMark);
console.log((allSubjectMark / 5).toFixed(2));

//problem 3
var a = 104;
console.log(a % 5);

//problem 4
const b = isNaN('11');
console.log(b); //false
const c = isNaN(10-20);
console.log(c); //false
const a = isNaN('11' + 'hello');
console.log(a); //true

// --BMI
var height = 1.64592;
var weight = 90;
var BMI = (weight/((height)**2));
console.log("BMI is : ",BMI.toFixed(2));
if(BMI < 18.5){
    console.log("you are underweight");
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log("you are noraml");
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}

// free drinks task
let burger = 500;
let coke = 30;
if(burger >= 500){
    burger = burger + 0
    console.log("burger with free coke just pay burger price : ",burger);
}
else{
    burger = burger + coke;
    console.log("burger and coke price :" ,burger);
}

// nested task
let mark = 90;
let friend = 60;
if(mark >= 80 && friend <= 80){
    if(friend >= 80){
        console.log('go for a lunch');
    }
    else if(friend >= 60 && friend <= 80 ){
        console.log("good luck next time");
    }
    else if(friend <=60 && friend >=40 ){
        console.log("keep your friend's message unseen");
    }
    else if(friend < 40){
        console.log("block your friend");
    }
}
else{
    console.log("got to home and sleep and act sad");
}

// simple if else
let num1 = 100;
let num2 = 50;
let result = num1 + num2;
if(num1 > num2 ){
    console.log(num1 + num1);
}
else{
    console.log(result);
}

// ternary operator
let number1 = 100;
let number2 = 250;
let result1 = number1 + number2;
sum = (number1 > number2) ? (number1 + number1) : result1;
console.log(sum);

// bus ticket fare
let age = 65;
let ticket = 50;
if(age <= 10){
    ticket = 0;
    console.log("free for children so ticket price is : ",ticket);
}
else if(age <= 30 && age >= 15){
    discount = ticket * 50 /100;
    ticket = ticket - discount
    console.log("students get 50% discount so ticket price is : ",ticket)
}
else if(age >= 60){
    discount = ticket * 15 /100;
    ticket -=discount;
    console.log("senior citizens price is : ",ticket,'\n15% discount price is :',discount);
}
else {
    console.log("Regular price is : ",ticket);
}

// Array task 1
const fruits = ['apple', 'banana','mango','litchi','pineapple']
console.log(fruits[3]); //3rd element show
fruits[2] = 'jambura';  //change element
console.log(fruits)

// array task 2
const tourist = ['cox bazar','saintmartin','Kuakata'];
console.log(tourist);
tourist.push('Hiltrack'); //add new destination
console.log(tourist);
tourist.push('chandpur','Cumilla');  //two more destination
console.log(tourist)
tourist.pop();  //remove last destination
console.log(tourist); 

// array task 3
const books = ['prosongshito','javascript','html','css'];
console.log(books.includes("javascript"));
console.log(books[1]);

// array task 4
const department = ['cst','graphic','printing'] ;
const age = [];
const food = 'm a n g o';
const name = 'Rafiul';
console.log(Array.isArray(department)); 
console.log(Array.isArray(age));
console.log(Array.isArray(food));
console.log(Array.isArray(name));

// array task 5
const firstName = ['Muhammad','mohin','mahin'];
const lastName = ['hossain','uddin'];
console.log(firstName);
console.log(lastName);
console.log(firstName.concat(lastName));

//-----use while loop-----
// display 60 times
let i = 0;
while(i <= 60){
    console.log("I will invest at least 6 hours every single day for next 60 days!");
    i++;
}
// odd number use while
let num = 61; 
while(num <= 100){
    if(num % 2 === 1){
        console.log('odd number : ',num);
    }
    else{
        console.log(num);
    }
    num++;
}

// even number use while
let num = 78;
while(num <= 98){
    if(num % 2 === 0){
        console.log("even number :",num);
    }
    else{
        console.log(num);
    }
    num++;
}
//sum of all odd numbers use while
let number = 81;
let sum = 0;
while(number <= 131){
    if(number % 2 === 1){
        console.log("odd number :",number);
        sum += number;
        }
        number++;
}
console.log("sum is:",sum);

//sum of all even numbers use while
let number2 = 206;
let sum = 0;
while(number2 <= 311){
    if(number2 % 2 === 0){
        console.log('Even number :',number2);
        sum += number2;
    }
    number2++;
}
console.log("sums of numbers from 206 to 311 is :",sum);

// countdown use while
let i = 21;
while(i >= 15){
    console.log(i);
    i--;
}

//-----use for loop-----
//generate a multiplication table use for

const number = 5;
for(let i = 1; i <= 10; i++){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
// odd number use for loop
for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        console.log('odd number is :',i);
    }
}
// even number use for 
for(let i = 1; i <= 10; i++){
    if(i % 2 !== 1){
        console.log('even number is :',i);
    }
}

// break task
for(let i = 1; i < 200; i++){
    if(i > 100){
        break;
    }
    console.log(i);
}
let i = 1;
while(i < 200){
    if(i >= 100){
        break;
    }
    i++;
    console.log(i);
}
*/