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
*/
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

