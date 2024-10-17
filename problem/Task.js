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

// object task
// task 1
const colors ={
    red : "#ff0000",
    green : "#00ff00",
    blue: '#0000ff',
    'golden rod' : '#daa520'
};
console.log(colors['golden rod']);
// task 2 (object add)
const car = {
    make : 'Toyota',
    model : 'Corolla',
    year :2020
};
car['passenger capacity'] = 5;
console.log(car);

// the physics marks as output.
const student ={
    name : 'Mohin uddin',
    id : 5421,
    physics : {
        subject : 'HSC Physics',
        author : "Shajahan tapan",
        marks : 30
    }
};
console.log(student.physics.marks);
// count number of properties
let person = {
    name :'Ariana Grande',
    age :21,
    city :'Gaibanda',
    isPerson : true
};
const keys = Object.keys(person);
console.log(keys.length);

// Loop through an object and print the key-value pairs with their types
const myObject ={
    name : 'Mahi',
    age :20,
    city:'Dhaka',
    isStudent: true
};
for(const key in myObject){
    console.log("key :",key, "|", "Type :", typeof key);
}

// array looping task
// task 1
const colors = ['red','blue','green','yellow','orange'];
const reversed = [];
for(const color of colors){
    // console.log(color);
    reversed.unshift(color);
}
// console.log(reversed);
let rev = [];
for(let i = 0; i < colors.length; i++){
    const color = colors[i];
    rev.unshift(color);
}
// console.log(rev);
let rev_num = [];
for(let i = colors.length - 1; i >= 0; i--){
    const color = colors[i];
    rev_num.push(color);
}
console.log(rev_num);
// task 2
const numbers = [12,98,5,41,23,75,46,76];
const asc = numbers.sort(function(a,b){
    return a-b;
})
let rev = [];
for(const number of asc){
    // console.log(number);
    if(number % 2 === 0){
        // console.log('even number is :',number);
        rev.push(number);
    }
    else{
        // console.log("odd number is ",number);
    }
}
console.log(rev);

let sentences = ['Tom','Tim','Tin','Tik'];
let save = '';
for(const sentence of sentences){
     save += sentence;
}
console.log(save);
// 
let string = '';
for(let i = 0; i <sentences.length; i++){
    string += sentences[i];
}
console.log(string);

// task 4
const statement = 'I am a hard working person';
let rev = '';
const state = statement.split(' ');  //when space alada hoye array make koreche
console.log(state);
for(const part of state){
    rev = part + " " + rev
}
console.log(rev);;

// ----function task
// task 1(multiply)
function multiply(a,b,c,d){
    const e = a * b * c * d;
    return e;
}
const fourNumbersMultiply = multiply(5,2,2,5);
console.log("Multiply number is :",fourNumbersMultiply)
// task 2 (oddOrEven)
function oddOrEven(number){
    if(number % 2 === 1){
        const multiply = number * 2;
        return multiply;
    }
    else{
        const divide = number / 2;
        return divide;
    }
}
const numbers = oddOrEven(5);
const number = oddOrEven(10);
console.log("Result is :",numbers)
console.log("Result is :",number);
// task 3(make_avg)
function make_avg(numbers){
    let avg = 0;
    let sum = 0;
    const len = numbers.length;
    for(const number of numbers){
        console.log(number);
        sum += number;
        avg = sum / len;
    }
    console.log("sum is ",sum);
    console.log("average is",avg);
}
const numbs = [1,2,4,5,8];
const avg = make_avg(numbs);
// task 4(count_zero)
let sum = '';
function count_zero(str){
    for(const part of str){
        // console.log(part);
        if(part === '0'){
            console.log(part);
            sum = part + sum;
        }
        else{
            // console.log('false',part);
        }
    }
    console.log("zero is:",sum);
    console.log(`count how many 0’s are there in that string.`,sum.length);
}
const string = '1000010'; 
const count = count_zero(string);
// task 5(odd_even)
function odd_even(numbers){
    if(numbers % 2===0){
        const even = 'Even';
        return even;
    }
    else{
        const odd = 'Odd';
        return odd;
    }
}
const number = odd_even(5);
const numb = odd_even(4);
console.log("Odd or Even:",number)
console.log("Odd or Even:",numb)

//a function to convert temperature from Celsius to Fahrenheit.
function celToFah(celsius){
        const fahrenheit = celsius * 33.8
        return fahrenheit;
}
console.log(`celsius to fahrenheit : ${celToFah(2)} `);
// Count how many times the a number is repeated in the array
const numbers = [5,6,11,12,98,5];
function countNumber(numbers){
    let count = [];
    for(const number of numbers){
        if(number === 5){
            count.push(number);
        }
    }
    const len = count.length;
    console.log("Total repeat numbers :",len);
    return count;
}
console.log(countNumber(numbers));
// a function to count the number of vowels in a string.
function countVowelsString(array){
    let count = [];
    const vowels = ['a','e','i','o','u','A',"E",'I',"O","U"];
    for(const item of vowels){
        // console.log(item);
        for(const element of array){
            // console.log(element);
            if(item === element){
                count.push(item);
            }
        }
    }
    const len = count.length;
    console.log("count the number of vowels is :",len)
    return count;
}
const vowelsCount = countVowelsString('Bangladesh');
const vowelsCount1 = countVowelsString('I am a good boy that why this worl i do');
console.log(vowelsCount);
console.log(vowelsCount1);

//  a function to find the longest word in a given string
function logestWord(str){
    let alada = str.split(" ");
    let count = 0;
    for(const part of alada){
        console.log(part);
        if(part.length >  count){
            count = part.length;
        }
    }
    return count;
}
const person = 'I am learning Programming to become a programmer'
const findLogestWord = logestWord(person);
console.log(findLogestWord); // just index show 

// Generate a random number between 10 to 20.
function randomNumber(min,max){
    return Math.floor(Math.random()* (max - min + 1)) + min;
}
const random = randomNumber(10,20)
console.log(random);

// js problem part2
// find the lowest number in the array
function getLowestNumber(numbers){
    let min = numbers[0]
    for(const number of numbers){
        // console.log(number);
        if(number < min){
            min = number;
        }
    }
    return min;
}
const height = [167,190,120,165,137,100];
const lowestNumber = getLowestNumber(height);
console.log(lowestNumber);

// find the friend with the smallest name(something problem in code)
function getSmallestName(names){
    let small = names[0];
    for(const name of names){
        // console.log(name);
        if(name.length < small.length){
            small = name;
        }
    }
    return small;
}
const names = ['rahim','robin','raf','roni','rashed','Hili'];
const getSmallest = getSmallestName(names);
console.log(getSmallest);

// calculate total budget function
function calculateElectronicsBudget(laptop,tablet,mobile){
    const perLaptopPrice = 35000;
    const perTabletPrice = 15000;
    const perMobilePrice = 20000;

    const laptopTotalMoney = perLaptopPrice * laptop;
    const tabletTotalMoney = perTabletPrice * tablet;
    const mobileTotalMoney = perMobilePrice * mobile;

    const totalBudget = laptopTotalMoney + tabletTotalMoney + mobileTotalMoney;
    return totalBudget;
}
console.log(calculateElectronicsBudget(1,1,2));

// returns the average price of phone
function findAveragePrice(phones){
    let prices = [];
    for(const phone of phones){
        console.log(phone);
        prices.push(phone.price);
    }
    let totalPrice = 0;
    for(const price of prices){
        console.log(price)
        totalPrice += price;
    }
    console.log("Total price of phone is :",totalPrice);
    const avgPrice = totalPrice / prices.length;
    return avgPrice;
}

const phones = [
    {model: "PhoneA", brand: "Iphone", price: 100000},
    {model: "PhoneB", brand: "Samsung", price: 40000},
    {model: "PhoneC", brand: "Oppo", price: 30000},
    {model: "PhoneD", brand: "Nokia", price: 10000},
    {model: "PhoneE", brand: "Honor", price: 25000},
    {model: "PhoneF", brand: "Vivo", price: 15000},
];
console.log("The average price of phones is :",findAveragePrice(phones));
*/
// calculate is the total salary has to be provided by the company in a month
function totalSalary(employess){
    let totalSalaryArr = [];
    for(const employee of employess){
        const startingSalary = employee.starting;
        const incrementSalary = employee.increment * employee.expericence;
        const employeeTotalSalary = startingSalary + incrementSalary;
        totalSalaryArr.push(employeeTotalSalary);

    }
    let totalSalary =  0;
    for(const salary of totalSalaryArr){
        console.log(salary);
        totalSalary += salary;
    }
    return totalSalary;

}

const employess = [
    {name: 'Mohin', expericence: 5, starting: 20000, increment : 5000},
    {name: 'Mahi', expericence: 5, starting: 20000, increment : 7000},
    {name: 'Rafiul', expericence: 5, starting: 20000, increment : 2000},
    {name: 'Abrar', expericence: 5, starting: 20000, increment : 4000},
    {name: 'Ayon', expericence: 5, starting: 20000, increment : 3000},
];
const getTotalSalary = totalSalary(employess);
console.log("Calculate is the total salary is :",getTotalSalary);