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
*/
