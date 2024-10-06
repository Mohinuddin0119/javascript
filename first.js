// [ first to variable, Operator,condition,array, for loop , while loop ]

/*
// variable data types

// Numeric
var age = 19;
// string
var nam = "mohin";
nam = "mohin uddin"; //update value
console.log(nam);
console.log(age);
//boolean
var isRich = true;
var passed = false;
console.log(passed);
console.log(isRich);
// typeof 
// ^ diye data type jana jay
console.log(typeof passed);
//object
var x = null; //null
console.log(typeof x);
// undefined
var ages;
console.log(typeof ages);


// যোগ,বিয়োগ,গুন,ভাগ
var x = 5;
var y = 10;
var add = x + y; //15
var sub = add - 5; //10
var mul = sub * 2; //20
var div = mul / 2; //10
console.log(add)
console.log(sub)
console.log(mul);
console.log(div);

//converting
var applePrice = 20;
var orangeprice = '40'; //string
var eggPrice = 4.5;
//parseInt
var lemonPrice = parseInt('30'); // convert string to number
//parsefloat
var eggPrices = parseFloat('4.5'); //convert string to number
console.log(applePrice);
console.log(orangeprice);
console.log(lemonPrice);
console.log(eggPrice);
console.log(eggPrices);

//floating math
var x = 0.1;
var y = 0.2;
var sum = x  + y;
console.log(sum); //something problem
//tofixed
console.log(sum.toFixed(2)); //দশমিকের পর কত সংখা দেখাবে তা নির্ধারন করে

// infinity
const num = 50/0;
console.log(num);
const num1 = -40/0;
console.log(num1); //-infinity

//NaN
const A = 4 - 'hello';
console.log(A); //not a number
console.log(isNaN(A)); //true
console.log(isNaN(9)); //false

// --Operator
// arithmetic operator
var a = 10;
var b = 5;
console.log(a + b); //15
console.log(a - b); //5
console.log(a * b ); //50
console.log(a/b); //2

//remaider or vagses
//modulus
a = 11;
console.log(a % b); //1 
console.log(8 % 10); //always show first word 8

// exponentiation or power
var c = 3
console.log(c**3); //27
//example
var price = 10;
// price = price + 20;
price += 10;
console.log(price); //30
var newPrice = price + 20;
console.log(newPrice); //50
var discountPrice = newPrice - 10;
console.log(discountPrice); //40

//exam1 (adding quotation)
//addition
var first = 'mohin';
var second = 'uddin'
console.log(first + second);
console.log('40' + 10); //4010
console.log(10 + '10'); //1010
//subtration
console.log('40' - 10); //30
console.log(20 - '10'); //10

//multiply
console.log('40' * 2); //80
console.log(20 * '2'); //40

//division
console.log(30 / '2'); //15
console.log('40' / '2'); //20


// comparison operator with conditionals

console.log(5 > 10); //grater than 
console.log(5 < 10); //less than
console.log(5 == 5); //equal
console.log(5 != 10); //not equal
console.log(5 >= 10); //grater than or equal
console.log(7 >= 5); 
console.log(5 <= 10); //less than or equal

// -----------------
// (==) mean just value
console.log(5 == '5'); //true
//(===) MEAN value and type
console.log(5 === '5'); //false
// (!=) mean just value
console.log(10 != '10'); //false
//(!==) MEAN value and type
console.log(10 !== '10');  //true

// -----------------
// condition
// if
 var weight = 25;
 if(weight < 30){
    console.log("I will carry by myself");
 }
//  if-else
var money = 200;
if(money > 300){
    console.log("whole day ghurbo");
}
else{
    console.log("muri khabo");
}
//-----multiple condition--
const salary = 30000;
const isBCS = true;
const height = 68;
// -----&&----
// if(salary < 25000 && height < 70){
//     console.log("su----patro");
// }
// else{
//     console.log('onno bor khuju');
// }
// ---||----
// if(salary >= 30000 || isBCS == false){
//     console.log("I am agree");
// }
// else{
//     console.log('dont agree');
// }

// complex conditon
if((salary > 25000 && height > 60) || (isBCS == false)){
    console.log('agree');
}
else{
    console.log("raji na");
}

// ----multi-level-condition--

// discount related
const price = 6000;
if(price >= 5000){
    // 10% discount
    const discount = price * 10/100;
    const payAmout = price - discount;
    console.log("just pay money without discount:",payAmout);
}
else if(price > 3000){
    // 5% discount
    const discount = price * 5/100;
    const payAmout = price - discount;
    console.log("pay money:",payAmout);
}
else{
    console.log("pay full price:",price);
}

// restaurant discount related
const age = 59;
const price = 500; 
if(age <= 12){
    console.log("you can eat for free");
}
else if((age < 100) && (age >= 70)){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log("murubbi just pay:",payAmount);
}
else if(age >= 60){
    // 20% discount
    const discount = price * 20/100;
    const payAmout = price - discount;
    console.log("old man just pay:",payAmout);
}
else if(age > 40){
    // 10% discount 
    const discount = price * 10/100;
    const payAmout = price - discount;
    console.log("man pay :",payAmout);
}
else{
    console.log("full pay :",price);
}

// --grade show

const mark = 39;
if(mark >= 80){
    console.log("A+");
}
else if(mark >= 70){
    console.log("A");
}
else if(mark >= 60){
    console.log("A-");
}
else if(mark >= 50){
    console.log("B");
}
else if(mark >= 40){
    console.log("C");
}
else{
    console.log("F");
}

// Nested if else
const money = 100;
if(money > 300){
    console.log("kacchi khabo");
}
else{
    if(money > 200){
        console.log("murog palao khabo");
    }
    else{
        if(money > 100){
            console.log("ruti baji khabo");
        }
        else{
            console.log("kola khabo");
        }
    }
}

// ternary operator
//  condition ? when true : when false;
const age = 19;
// if-else 
if(age >=18){
    console.log("vote deo");
}
else{
    console.log("gumao");
}
// simple ternary
age >= 18 ? console.log("vote deo") : console.log("gumao");

//normal if else
let price = 500;
const isLeader = false;
if(isLeader === true){
    price = price / 2;
}
else {
    price = price + 100;
}
console.log(price);

// ternary complex
let price = 2100;
const isLeader = true;
price = isLeader === true ? price = price / 2 : price + 100;
console.log(price);
//semi advance ternay
let price2 = 300;
price2 = isLeader === true ? price2 > 1000 ? price2 = price2 /2 : 0 : price2 = price2 + 100;
console.log(price2);

// logical not operator
// logical
let isLeader = true;
// if(isleader === true)
if(isLeader){
    console.log("chair charo");
}
else{
    console.log("gumao");
}
// not logical (!)
let ispassed = true;
// if(ispassed === false)
if(!ispassed){
    console.log("biye confirm");
}
else{
    console.log("good boy");
}
// not logical (!!)
let isfruit = true;
if(!!isfruit){
    console.log("not come");
}
else{
    console.log("come");
}

// Array = object
const number = [12,22,32,42,52,62,72,82,92,100];
console.log(typeof number);   //object
console.log(number);
const student = ["Rafi", "Mahi", "Alamin"];
console.log(student);
const passed = [true , false , true, false];
console.log(passed);
// Array length, index(0 to end), get and set
const number1 = [12,18,22,32,42,52,62,72,82,92,100,12,22,32,42,52,62,72,82,92,100,'mohin','rafi'];
console.log(number1.length);
// get element value by index
console.log(number1[0]);
console.log(number1[22]);
const fourth = number1[3];
console.log(fourth);
// set or update Element value by index
number1[1] = 1444;
console.log(number1);
// push (added last element)
const num = [1,2,3,5,6,9,10];
num.push(20);
num.push(30,40,50);
console.log(num);
const friends = ["Mahi", 'Mohin', 'Rafi', 'Ayon'];
friends.push('Parvez');
friends.push('Abrar');
console.log(friends);
//pop (remove last element)
const students = ['Jihad', 'Jisan', 'Mahi'];
console.log(students)
students.pop();
const out2 = students.pop();
console.log(students);
console.log(out2);
// shift (remove first element)
const names = ["KAlAM", 'Balam', 'gumailam']
console.log(names);
names.shift();
console.log( names);
//unshift (added first element)
const fruits = ['Mango', 'Apple', 'Pineapple ','lemon'];
console.log(fruits);
fruits.unshift("lichi");
console.log(fruits);

// includes  (element ache kina khujar jonno)
const flowers = ['Rose', 'Lily', 'Shapla']
console.log(flowers.includes('Lily'));  //true
console.log(flowers.includes('rose'));  //false because case sensitive
 
if(flowers.includes('Rose')){
    console.log("This is favorite flower");
}
else{
    console.log('otherwise this is bad flower');
}
// indexOf (find index of element)
const numbers = [ 1,2,3,4,7,8,9,10];
console.log(numbers.indexOf(10));  // 7
console.log(numbers.indexOf(20)); // when not find just show -1
// Array.isArray (Array check korar way)
const number = [1,2,6,4,10];
const age = [];
const food = 'roso gol la';
const name = 'mohin';
const names = new Array('mohin');
console.log(Array.isArray(names));  //true
console.log(Array.isArray(number)); //true
console.log(Array.isArray(age)); //true
console.log(Array.isArray(food)); //false
console.log(Array.isArray(name)); //false
// join (any separator by comma etc)
const apps = ["instagram", 'Facebook', 'Snaptube', 'x', 'Youtube']
console.log(apps.join(' | '));

// concat (two array add korar way)
const data1 = ['apple','google','opera'];
const data2 = ['lv', 'LC'];
const data3 = ['mb','kb']
console.log(data1.concat(data2,data3));

//slice (alada korar way) (start element and majh element count kore)
const fruits = ['apple', 'bannana', 'mango','litchi']
console.log(fruits.slice(4,5));
const pizza = ['p','i', 'z', 'z', 'a'];
console.log(pizza.slice(0,2));

//while loop
let num = 0;
while(num < 5){
    console.log("loooping", num);
    // num = num + 1;
    // num += 1;
    num++;
}

//problem
let num = 1;
let sum = 0;
while(num <= 10){
    console.log(num);
    sum += num;
    console.log("sum :",sum);
    num++;
}
// even number
let num1 = 1;
while(num1 <= 10){
    if(num1 % 2 === 0){
        console.log('even number :',num1);
    }
    else{
        console.log(num1)
    }
    num1++;
}

// ------for loop-----

//---For of-
const numbers = [12,22,33,44,55];
console.log(numbers);
for(const num of numbers){
    console.log(num);
}
//
const fruits = ['apple', 'banana', 'lithci','jackfruit'];
for(const fruit of fruits){
    console.log(fruit);
}

// for loop
//** structure
//** for(loop variable ; loop condition; increement/decrement)
for(let num = 1; num < 5; num++){
    console.log(num);
}
//
for(let i = 5; i<10; i++){
    console.log(i);
}

//even 
for(let i = 0; i < 10; i+=2){
    console.log("even number :",i);
}
// odd 
for(let i = 1; i < 20; i+=2){
    console.log('Odd number : ',i);
}

//sum of number
let sum = 0;
for(let i = 0 ; i <= 20; i++){
    console.log(i);
    sum += i;
}
console.log("sum of numbers from 0 to 20 is :",sum);

// decrement for loop
for(let i = 10; i >= 0; i--){
    console.log(i);
}
// decrement while loop
let n = 10;
while(n >= 0){
    console.log(n);
    n--;
}
*/