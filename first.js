// [ first to variable, Operator,condition,array, for loop , while loop,string(touppercase,lowercase,trim,slice,join,concat,includes),string reverse,object,traversing and reversing in an array,function,Math, abs, round, ceil, floor, and random number,JS Date and time ]

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

// ---break--(end of loop)
// use for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
    if(i >= 5){
        break;
    }
}
//use while loop
let i = 54;
while(i > 30){
    if(i < 50){
        break;
    }
    console.log(i);
    i--;
}

// continue = skip this code for this iteration(just skip of one iteration) 
for(let i = 1 ; i<10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i);
}
//
let i = 0;
while(i <= 20){
    i++;
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

// do-while
let i = 0;
do{
    console.log(i);
    i++;
}
while(i < 5);
//exam (when output is false just show first value)
let n = 10;
do{
    console.log(n);
    n++;
}
while(n < 5);

// string
// declaration  method
const name1 = 'mohin';
const dept = "CST";
const country = `bangladesh`;
console.log(typeof name1);
console.log(typeof dept);
console.log(typeof country);

// string like Array
// string is immutable(not change)
const capital = 'Dha ka'; //space countable
console.log(capital.length); //6
console.log(capital[1]);
capital[1] = 'f'; //not change
console.log(capital);
// array mutablea(you can change the array elements)
const numbers = [1,3,3,4,5];
numbers[1] = 2; //changeable
console.log(numbers);

// lowerCase and uppercase
const subject = "Physices"
const book = "math";
console.log(subject)
console.log(subject.toLowerCase());
console.log(book.toUpperCase());
const school = 'hazi monir hossain high school';
const college = "Hazi monir Hossain High School";
if(school === college.toLowerCase()){
    console.log("this is true");
}
else{
    console.log("this is false");
}

// trim method
const drink = "water ";
const liquid = ' water';
if(drink.trim() === liquid.trim()){
    console.log("this is true");
}
else{
    console.log("this is false");
}

// slice(start,end before) convert as an array
const address = "Rayerbag";
console.log(address.slice(0,5)); //Rayer

// splice(start,deleteCount)
const numbers = [10,0,0,30,50,100];
const splice = numbers.splice(1,2);
console.log(splice);

// split (alada kora )
const sentence = "I am a good person";
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
console.log(sentence.split());
console.log(alphabet.split(""));
console.log(sentence.split('a'));
const friends = 'rahim,mahim,nahim,mahi';
console.log(friends.split(','));

// join(add korar jonno)
const realFriends = ['mahi','mohin','rafi','ayon'];
console.log(realFriends.join());
console.log(realFriends.join("!_")); 

// concat(two string connect)
const first = "mohin";
const last = "uddin";
const fullName = first + ' ' + last;
console.log(fullName);
console.log(first,last);
console.log(first.concat(" ").concat(last).concat(' ').concat(first));
// includes
console.log(first.includes('M')); //false because case sensitive

// string reverse
const sentence = 'I am Learning Web Dev.'
// ---first way
// devel
//d
//ed
//ved
//eved
//leved
let reverse = '';
for(letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

// second way
let rev = '';
for(let i = 0; i <sentence.length; i++){
    // console.log(i); //just show index
    // console.log(sentence[i]); //just show value
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// third way
const reversed = sentence.split('').reverse().join('');
console.log(reversed);

// Object 
// new keyword
const person = new String('mohin');
console.log(person);
const man = new Object('rafi');
console.log(man);

const person1 = {
    firstName : 'mohin',
    lastName : 'uddin',
    age  : 19,
    isEmplayed : true,
    fullName :function() {return (this.firstName + ' ' + this.lastName)}
}
const person2 = {
    firstName : 'mahi',
    lastName : 'muhammad',
    age  : 19,
    isEmplayed : true,
    'fav subject':['math','higher math'],
}
person2['fav subject']= ['Biology','Math'];
person1.age = 20;
//---dot notation/ dot diye acces
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmplayed);
console.log(person1.fullName());
//---bracket notation/ third bracket diye acces
console.log(person2['firstName']);
console.log(person2['isEmplayed']);
console.log(person2["fav subject"]); //dot diye acces kora jay na

// keys / property
const student = {
    name : "mohin",
    age : 20,
    color:'white',
    isStudent: true,
}
const keys = Object.keys(student);
console.log(keys);
//values
const Person = {
    name : 'Mahi',
    age : 20,
    color : 'white',
    married :true
}
console.log(Object.values(Person));

// nested object
const college = {
    name : "GAI",
    class : ["1st",'2nd','3rd'],
    events : ['scicence fair','bijoy dibos','21 feb'],
    unique :{
        color : 'blue',
        result : {
            CGPA : 3.50,
            merit : 'top'
        }
    }
}
// console.log(college.events);
// console.log(college.unique);
// console.log(college.unique.color);
console.log(college.unique.result.CGPA);

// delete from object property
const man = {
    name : 'rafi',
    age :20,
    semester : "6th"
}
delete man.semester;
console.log(man);

// looping use objects
// for in use
const mobile = {
    brand: "samsung",
    price : 20000,
    model : 'a04s'
}
for(const key in mobile){
    console.log(key);
    console.log(mobile[key]);
}
// for of
const student = {
    name : "Mohin",
    age : 20,
    height : 5.4
}

const keys = Object.keys(student);
for(const key of keys){
    console.log(key, ":",student[key]);
}

// object creat way
// literal
const pen = {brand:'matardor',price:10,color:"white"};
console.log(pen);
//new keyword
const pencil = new Object();
console.log(pencil);
// object.create()
const rubber = Object.create({});
console.log(rubber);

// ---looping using technique
//  * for loop
//  * while loop
//  * do while
//  * for of = array loop korar jonno
//  * for in = object loop korar jonno

// traversing
const friends = ['Mahi','Rafi','Abrar','Hasan','Sayel'];
//
for(const friend of friends){
    // console.log(friend);
}
// 
for(let i = 0; i < friends.length; i++){
    // console.log(friends[i]);
}
// 
const numbers = [12,2,3,6,4524,654,654,654,6546,54,654,10000];
let i = 0;
while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}

// Reverseing an array
// 
const numbers = [1,2,3,5,6,8,9,10];
// numbers.reverse();
// console.log(numbers);
// 
let rev_num = [];
for(const number of numbers){
    rev_num.unshift(number);
}
// console.log(rev_num);
// 
const friends = ["abrar",'rafi','mahi','sayel','hasan'];
let rev_number = [];
for(let i = 0; i < friends.length; i++){
    rev_number.unshift(friends[i]);
}
// console.log(rev_number);
// 
const number = [10,20,30,40,65,70,80,90,100];
let rev = [];
for(let i = number.length - 1; i >= 0; i-- ){
    // console.log(number[i]);
    rev.push(number[i]);
}
console.log(rev);

// --sort()
const persons = ['anis','nakib','sakib','rakib'];
const sortedPersons = persons.sort();
// console.log(sortedPersons);
const person = ['Anis','nakib','sakib','Bakib','Akib'];
console.log(person.sort());  //sort start alphabetic
// 1 to 9
const numbers = [5,4,8,7,2,1,9];
const asending = numbers.sort();
// console.log(asending);
// 
const desending = numbers.reverse();
// console.log(desending);
// 10 to .....
const num = [10,12,20,2,3,32,40,50];
const num_asc = [...num].sort(function(a,b){
    return a - b
});
console.log(num_asc);
// 
const num_des = [...num].sort(function(a,b){
    return b - a
})
console.log(num_des);

// ---function
// function declaration method
function fname(){
    console.log("Hello world");
}
// calling function
fname();
// 
function fanOffkor(){
    console.log('bose thake uthe dara');
}
fanOffkor();
// Add Function parameter
function add(a,b){
    console.log('add is :',a+b);
}
add(2,3);
// handle multiple parameters
function square(number1,number2){
    console.log('value of number is :',number1, " * ",number2);
    return number1 * number2;
}
console.log(square(4,7));
// 
function addAll(a,b,c,d,e){
    const sum = a+b+c+d+e;
    console.log(sum);
}
addAll(1,2,5,1,1);
// argument hisabe variable use
function difference(num1,num2){
        const diff = num1 - num2;
        console.log(num1,num2,'difference is :',diff);
}
const fatherAge = 40;
const myAge = 15;
difference(fatherAge,myAge);
difference(30,50);

// Function return and set return value to a variable
function tenTimes(number){
    const result = number * 10;
    return result;
}
console.log(tenTimes(10));
const ten = tenTimes(11);
console.log(ten);
const output = tenTimes(99);
console.log(output);

// recap
function bill(price1,price2){
    return price1 + price2;
}
const out = bill(5,5);
console.log(out);
// 
function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}
console.log(doMath(10,5));
// even number use function
function isEven(number){
    if(number % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(5))
console.log(isEven(120));
// odd number use function
function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}
console.log(isOdd(5));
console.log(isOdd(10));
// different type of function parameter
// string type function parameter
function string(str){
    const len = str.length
    console.log(str,len);
    if(len % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(string('Bangladeshi'));
console.log(string('Madina'));
// boolean type function parameter
function doubleOrTriple(number,doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3
        return result;
    }
}
console.log(doubleOrTriple(5,false));
console.log(doubleOrTriple(5,true));
// Array type function parameter
function numberOfElement(number){
    const len = number.length;
    return len;
}
console.log(numberOfElement([12,2,5,100]))
console.log(numberOfElement(['mohin','mahi','nahim']));
// object type function parameter
function getAge(person){
    const age = person.age;
    const name = person.name;
    console.log(age, name);
}
getAge( person = { age : 19,name:'mohin'});

// sum of all numbers in an array using function
function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}
const numbs = [10,20,30,40];
const sum = sumOfNumbers(numbs);
console.log("sum of all numbers is :",sum);

// return all the even numbers of an array
function evenNumbers(numbers){
    let num = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 ===0){
            // console.log('even number is:',number);
            num.push(number);
        }
        else{
            console.log('not even');
        } 
    }
    return num;
}
const numbers = [10,3,5,6,2,8,14]
const evens = evenNumbers(numbers);
console.log(evens);
console.log('________________')
// sum of all even number using function
function sumOFEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2===0){
            console.log(number);
            sum +=number;
        }
    }
    return sum;
}
const sum = sumOFEvenNumbers(numbers);
console.log("Sum of even numbers is:",sum);

// Math min, max
console.log(Math.min(10,20,3,0,8,-0,1,100));
console.log(Math.max(10,20,50,11,1000));
// absolute(abs)
console.log(Math.abs(-80));
console.log(Math.abs(10-80));  //operator dont show
console.log((Math.abs(10-5)));
// round 
console.log(Math.round(2.4)); //2
console.log(Math.round(2.5)); //3
console.log(Math.round(2.9)); //3
//ceil(up),
console.log(Math.ceil(2.0001)) //3
console.log(Math.ceil(2.99999)) //3
//  floor(down)
console.log(Math.floor(2.999999)); //2
console.log(Math.floor(2.0001));  //2
// random number
console.log(Math.random());  //in 0 output show
// limit add (0 to 10  output will be show)
console.log(Math.random()*10); 
// limit add (0 to 100  output will be show)
// console.log(Math.random()*100); 
// just show integer number
console.log(Math.round(Math.random()*10));

// JS Date and time
const today = new Date();
const date = new Date('2023-10-23');
console.log(date);
// set
date.setDate(25);
date.setMonth(5);
date.setFullYear(2020);
console.log(date);
const date1 = new Date(2023,10,23);
console.log(date1);
console.log(today)
// get
const date2 = new Date('2023-10-23');
console.log(date2.getDate());  //23
console.log(date2.getMonth());  //index show 9
console.log(date2.getFullYear());  //2023

// swap variable
// use temp 
let a = 10;
let b = 5;
console.log(a,b);
let temp = a;
a = b;
b = temp;
console.log(a,b);
// destructing
let x = 20;
let y = 30;
console.log(x,y);
[x,y] = [y,x];
console.log(x,y)

// js Object
const nayok = {
    name : 'sakib khan',
    id : 121,
    address: 'movie cinema',
    isSingle : false,
    friends:['abul','babul','kabul'],
    act: function(){
        return "this is sakib khan";
    },
    car : {
        brand: "bmw",
        price : 2000000,
        model:2020
    }
}
console.log(nayok);
console.log(nayok.car.brand);
console.log(nayok.act());
// 
function get(num1, num2){
    console.log(num1 , num2);
    console.log(arguments);
    console.log(arguments[4])
}
get(11,22,25,30,40,50);

// searching products
const products =[
    {id:1, name:'walton phone', price: 10000},
    {id:2, name:'Lenovo laptop', price: 10000},
    {id:3, name:'Honor phone', price: 10000},
    {id:4, name:'Hp monitor', price: 10000},
    {id:5, name:'Hp laptop 2020', price: 10000},
    {id:6, name:'asus laptop', price: 10000},
    {id:7, name:'Vivo Phone', price: 10000},
    {id:8, name:'Iphone', price: 10000},
    {id:9, name:'dahua monitor', price: 10000},
    {id:10, name:'lava monitor', price: 10000},
];
function matchingProducts(products, search){
    let matced = [];
    for(const product of products){
        // console.log(product);
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matced.push(product)
        }
    }
    return matced
}
// console.log(matchingProducts(products, 'Phone'))
console.log(matchingProducts(products, 'monitor'))
console.log(matchingProducts(products, 'laptop'))
*/