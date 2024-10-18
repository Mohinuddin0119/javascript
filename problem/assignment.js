/*

// assingment 1
// use function সকল খরচ বাদ দিয়ে মট কত টাকা বাকের ভাইর কাছে থাকে তা বলে দিতে পারে ।
function calculateMoney(ticketSale){
    const perTicketPrice = 120;
    const dailyTicketEarn = perTicketPrice * ticketSale;
    // console.log(dailyTicketEarn);

    const darowanCosting = 500;
    const staff = 8;
    const staffLunchCosting = 50 * staff;

    const totalCosting = darowanCosting + staffLunchCosting;
    // console.log(totalCosting);

    const saving = dailyTicketEarn - totalCosting;
    // return `(${dailyTicketEarn} - ${totalCosting} = ${saving})`;
    return saving;
}
console.log(calculateMoney(2));
 
// assingment 2
// use function check string when name is good or bad 
function checkName(string){
    if(typeof string !== 'string'){
        return "invalid"
    }
    const goodNameSample = ['a','y','e','o','u','w',"A","Y","E","O","U","W"];
    for(const part of goodNameSample){
        const res = string.charAt(string.length - 1);
        if(res === part){
            return "good name" ;
        }
        else{
            return "bad name";
        }
    }

}
console.log(checkName('rahima'));
console.log(checkName([10]));  //invalid
console.log(checkName(['tahmina']));  //invalid because this is array

// using fuction return array element(string,number,nan,object) to array (just number)
function deleteInvalids(array){
    if(Array.isArray(array)){

        let newArray = [];
        for(const arr of array){
            console.log(arr);
            if(typeof arr === 'number' && !isNaN(arr)){
                // console.log(arr);
                newArray.push(arr);
            }
        }
        return newArray;
    }
    else{
        return "invalid Array"
    }
}
const arr = ['12',1,null,undefined,18,-19,NaN,[1,2],{ob:'lala'}];
console.log(deleteInvalids(arr));
console.log(deleteInvalids({name:'lalalaa'}));
console.log(!isNaN(NaN));

// password generate object using function
function password(obj){
    const len = Object.keys(obj).length;
    if(len === 3){
        const site = obj.siteName;
        const part = site.charAt(0);
        const firstWordUpperCase = part.toUpperCase();
        const firstWordRemove = site.slice(1);
        const add = firstWordUpperCase + firstWordRemove;
        // console.log(add)

        return `${add}#${obj.name}@${obj.birthYear}`;
    }
    else{
        return "invalid"
    }

}
const obj = {name:'kolimuddin',birthYear: 1999, siteName: "google"};
const obj2 = {name:'colimuddin',birthYear: 2000, siteName: "google"};
const obj1 = {name:'kolimuddin', siteName: "google"};
// console.log();
console.log(password(obj2));
console.log(password(obj1));
*/
// (not working this) monthly saving related function
function monthlySavings(arr,livingCost){
    let total = 0;
    for(const item of arr){
        // console.log(item)
        if(item >= 3000){
            const tax = item * 20 /100;
            // console.log(tax)
            const have = item -tax;
            total = have;
        }
        total += item;

    }
    const saving = total - livingCost;
    console.log(saving)
    
    return total;
}
const saving = monthlySavings([1000,2000,3500],5000);
// const saving1 = monthlySavings([1000,2000,3000],5000);
// console.log(saving1);
console.log(saving);