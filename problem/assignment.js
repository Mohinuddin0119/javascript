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
 */
// assingment 2
// use function check string when name is good or bad 
function checkName(string){
    const goodNameSample = ['a','y','e','o','u','w',"A","Y","E","O","U","W"];
    const name = goodNameSample.includes(string)
    return name;
}
console.log(checkName('Mahin'));