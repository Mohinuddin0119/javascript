/*
// daily greeting if-else
var hour = 18;
if(hour >= 6  && hour < 12){
    console.log("good morning");
}
else{
    if(hour >= 12 && hour < 16){
        console.log('good afternoon');
    }
    else if(hour >= 16 && hour < 18){
        console.log('good evening');
    }
    else{
        console.log('Good Night');
    }
}

// logical and or 
var x = 1;
if (x > 5 || x > 10){
    console.log("true");
}
else{
    console.log("false");
}

// simple if else
var y = 10;
var message;
if(y > 5){
    message = 'bigger than 5';
}
else{
    message = 'less than 5';
}
console.log(message);
// ternary 
var Y = 10;
var z = Y > 5 && Y < 10 ? message = "true" : message = 'false';
console.log(z);
var z = Y > 5  || Y > 10 ? message = "true" : message = 'false';
console.log(z)

// comparison
console.log(5 == "5"); //true
console.log(5 === "5"); //false

// array 
const number = [ 1,2,3,5,9];
number.push(10,20)
console.log(number);
const b = number.pop(); //last remove
const c = number.pop();
console.log(number);
console.log(b,c);
const d = number.shift(); //first remove
console.log(number)
console.log(d);
number.unshift(50);
console.log(number); //first add
const num = [10,20,30,30,50];
console.log(num.indexOf(30));
console.log(num.includes(50));


//give me the numbers from 1 to 30 that are divisible by 5
for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
//
for(let i = 1; i <= 30; i++){
    if(i % 5 ===0 || i % 3 ===0){
        console.log(i);
    }
}
//
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log(i);
    }
}
*/
// give me the sum of numbers from 1 to 20 that are divisible by 3 
let sum = 0;
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        console.log(i);
        sum += i;
    }
}
console.log("The sum of numbers from 1 to 20 is :",sum);





// part 3 end
