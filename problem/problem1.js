/*
// inch to feet
// 12 inch to 1 feet
// first way (just show feet)
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const mahiInch = inchToFeet(75);
console.log(mahiInch);
// second way (show feet and inch )
function inchToFeet2(inch){
    const feetfraction = inch /12;
    const feetNumber = parseInt(feetfraction);
    const feetRamining = inch % 12;
    const result = feetNumber + " ft " + feetRamining +" inch."
    return result;
}
const rafiInch = inchToFeet2(88);
console.log(rafiInch);

// miles to kilometer
function milesToKilometer(mile){
    const kilo = mile * 1.609344;
    return kilo;
}
console.log(milesToKilometer(2));
// kilo to miles
function kiloToMiles(kilo){
    const mile = kilo * 0.621371192 
    // const miles = kilo / 1.609344;
    // console.log(miles.toFixed(2));
    return mile ;
}
console.log(kiloToMiles(4));
// m to cm
function mToCm(m){
    const centimeter = m * 100;
    return centimeter;
}
console.log(mToCm(5));
// cm to m
function cmToM(cm){
    const meter = cm / 100;
    return meter;
}
console.log(cmToM(200));

// check a year is a leap year
// simple logic
function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));
// those year is not divide by 100 and divide by 4 then year will be leap year
// those year divide by 400 and divide by 100 then will be leap year
// complex logic
function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 ===0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    else{
        return false;
    }
}
const isleap = isLeapYear2(2024);
const isleap2 = isLeapYear2(2000);
const isleap3 = isLeapYear2(2100);
const isleap4 = isLeapYear2(1900);
const isleap5 = isLeapYear2(2020);
console.log(isleap,isleap2,isleap3,isleap4,isleap5);

// The average of the even numbers in an array
function avg_even(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    console.log(evens);   //create array by even number
    let sum = 0;
    for(const number of evens){
        sum += number;
    }
    const len = evens.length;
    console.log('The items of even number is :',len);
    const avgEven = sum / len;
    console.log("Average of the even number is :",avgEven);
}
const nums = [12,16,5,15,20,25,50];
const average = avg_even(nums);
// Remove Duplicate items from an array
function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const biryanikhor = ['abul','babul','cabul','dabul','abul','abul','cabul','dabul','kabul'];
const numbers = [1,5,2,1,2,5,10,20,10,9];
const unique = noDuplicate(biryanikhor);
const unique1 = noDuplicate(numbers);
console.log(unique);
console.log(unique1);

// compare two variable
const tanha = 80;
const ponko = 150;
if(tanha > ponko){
    console.log('tanha is boss');
}
else{
    console.log('ponko is big');
}
// using function
function getTwoNumber(num1,num2){
    if(num1 > num2){
        console.log("Number1 is big",num1);
    }
    else{
        console.log("Number2 is big",num2);
    }
}
getTwoNumber(50,100);
// compare three number/variable
const num1 = 50;
const num2 = 70;
const num3 = 100;
if(num1 > num2 && num1 > num3){
    console.log("Rafi is boss");
}
else if(num2 > num1 && num2 > num3){
    console.log('Mahi is boss');
}
else{
    console.log('Sakib is boss');

}
// using function
function getThreeNumber(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log("Number 1 is boss");
    }
    else if(num2 > num1 && num2 > num3){
        console.log('Number 2 is boss');
    }
    else{
        console.log('Number 3 is boss');
    
    }
}
getThreeNumber(50,100,40);
// compare many items
const max = Math.max(10,20,50,40,8,0,100);
console.log(max);

// Find the max number in an array
function getMax(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}
const numbers = [10,20,50,8,5,1];
console.log(getMax(numbers));

// Find the min number in an array
function getMin(numbers){
    leti min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}
const longest = [10,1,5,25,80,100,0,-1];
console.log(getMin(longest));

// use add and multiplication to calculate wood requirements
// chair = 3 cft
// table = 10cft;
// bed = 50cft;

function woodQuantity(chair,table,bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = perChairWood * chair;
    const tableTotalWood = perTableWood * table;
    const bedTotalWood = perBedWood * bed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

console.log(woodQuantity(1,1,2));

// shopping requirements
function shopping(shirt,pant,shoe){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;

    const shirtTotalPrice = perShirt * shirt;
    const pantTotalPrice = perPant * pant;
    const shoeTotalPrice = perShoe * shoe;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;
};
console.log(shopping(1,2,1));

//  find the cheapest price from an array
function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        // console.log(number);
        if(number < min ){
            min = number;
        }
    }
    return min;
}
const prices = [10000,20000,50000,100000,5000];
const cheapestPrice = getMin(prices)
console.log("chepest phone price is :",cheapestPrice);

//  Find the cheapest phone from an array of phone objects
const mobiles = [
    {name:"samsug", price: 20000, camera: '12mp', color: 'black'},
    {name:"Xiami", price: 30000, camera: '12mp', color: 'black'},
    {name:"Symphone", price: 15000, camera: '12mp', color: 'black'},
    {name:"Vivo", price: 25000, camera: '12mp', color: 'black'},
    {name:"Honor", price: 50000, camera: '12mp', color: 'black'},
    {name:"Iphone", price: 100000, camera: '12mp', color: 'black'},
    {name:"Walton", price: 10000, camera: '12mp', color: 'black'},
];
function getChepeastPhone(phones){
    let min = phones[0]
    for(const phone of phones){
        // console.log(phone);
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheapestPhone = getChepeastPhone(mobiles);
console.log("Cheapest phone is ",cheapestPhone);
// Find the expensive phone from an array of phone objects
const phones = [
    {name:"Samsung", price: 20000, camera: "12mp", color: "black" },
    {name:"Symphone", price: 15000, camera: "12mp", color: "black" },
    {name:"Xiami", price: 25000, camera: "12mp", color: "black" },
    {name:"Honor", price: 30000, camera: "12mp", color: "black" },
    {name:"Iphone", price: 100000, camera: "12mp", color: "black" },
    {name:"Walton", price: 10000, camera: "12mp", color: "black" },
]

function getExpensivePhone(phones){
    let max = phones[0];
    for(const phone of phones){
        // console.log(phone);
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}
const expensivePhone = getExpensivePhone(phones);
console.log("Expensive phone is",expensivePhone);

// find Largest word in this string
function getLargestString(str){
    let part = str.split(' ');
    // console.log(part);
    let large = part[0];
    for(const alada of part){
        // console.log(alada);
        if(alada.length > large.length){
            large = alada;
        }
    }
    return large;
}
const string = "I am learning Web development to become a programmer .";
const getLarge = getLargestString(string);
console.log("Largest Word in this string is :",getLarge);

// find lowest word in this string
function getLowestString(str){
    let alada = str.split(' ');
    let min = alada[0];
    for(const part of alada){
        // console.log(part);
        if(part.length < min.length){
            min = part;
        }
    }
    return min;
}
const str = 'I am Student. I studying of diploma at Dhaka of mohammadpur in bangladesh.'
console.log("Lowest word in this string is :",getLowestString(str))

// calculate the total cost the product
function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        console.log(product);
        total = total + product.price
    }
    return total;
}

const products = [
    {name: 'Shampo', price : 300},
    {name: 'Shirt', price : 500},
    {name: 'Pant', price : 700},
    {name: 'Shoe', price : 900},
    {name: 'Panjabi', price : 800},
]
const shoppingTotal = getShoppingTotal(products);
console.log(shoppingTotal);

// Calculate the total cost of the products in a shopping cart(quantity soho)
function getShoppingCart(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const products = [
    {name : 'Shampo', price: 300, quantity: 5},
    {name : 'Shirt', price: 500, quantity: 1},
    {name : 'Pant', price: 700, quantity: 2},
    {name : 'Shoe', price: 900, quantity: 1},
    {name : 'Panjabi', price: 800, quantity: 1},
]
const shoppintTotal = getShoppingCart(products);
console.log(shoppintTotal);

// discount price calculation
// upto 100: => 100 
// more than 101 to 200 :=>90
// more than 200: => 70
function discountedTotal(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
console.log(discountedTotal(201));

// Multi-layer discount price calculation
// first 100 :=> 100
// 101to200 :=> 90 
// above 200:=>70
function discountedTotalLayer(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = first100Price * 100;
        const remaingQuantity = quantity - 100;
        const remaingTotal = remaingQuantity * second100Price;
        const total = first100Total + remaingTotal;
        return total;
    }
    else{
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remaingQuantity = quantity - 200;
        const remaingTotal = remaingQuantity * above200Price;
        const total = first100Total + second100Total + remaingTotal;
        return total;
    }
}
console.log(discountedTotalLayer(205));

// Simple calculator to call function inside a function
// add()
function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
// subtractor()
function sub(num1,num2){
    const sub = num1 - num2;
    return sub;
}
// multiply()
function multiply(num1,num2){
    const mul = num1 * num2;
    return mul;
}
// division()
function division(num1 , num2){
    const div = num1 / num2;
    return div;
}
// inside fuction
function calculation(a,b,operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a,b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'division'){
        const result = division(a,b);
        return result;
    }
    else{
        return "this operation only add sub multiply and division";
    }
}

const calculateFunction = calculation(5,7,'add');
console.log(calculateFunction);
console.log(calculation(7,5,'sub'));
console.log(calculation(7,5,'multiply'));
console.log(calculation(10,5,'division'));

// Handle unexpected function input parameter error
// in case number 
function multiply(num1,num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "please provide a number";
    }
    const mul = num1 * num2;
    return mul;
}

const mul = multiply(2,5);
console.log(mul);
console.log(multiply(2,"five"));
// in case string
function fullName(first,second){
    if(typeof first !== "string"){
        return "first name should be a string";
    }
    else if(typeof second !== "string"){
        return "second name should be a string";
    }
    const full = first + " " + second;
    return full;
}
console.log(fullName('mohin','uddin'));
console.log(fullName('mohin',5));
console.log(fullName([5],"5"));
// in case object
function getPrice(product){
    if(typeof product !== 'object'){
        return "please provide an object";
    }
    const price = product.price;
    return price;
}
const product = {name : 'shirt', price:200, color: 'white'};
console.log(getPrice(product))
console.log(getPrice(5));
// in case array*/
function getSecond(numbers){
    console.log(Array.isArray(numbers));
    if(Array.isArray(numbers) === false){
        return "please provide an array"
    }
    const second = numbers[1];
    return second;
}
console.log(getSecond([5,25,10]));
console.log(getSecond(5));

