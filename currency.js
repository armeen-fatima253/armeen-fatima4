import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.55,
    GBP: 1.72,
    INR: 47.75,
    PKR: 500,
};
let currencyans = await inquirer.prompt([
    {
        name: "armeen",
        message: "enter your currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "ali",
        message: "enter your currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter your currency: ",
        type: "number",
    }
]);
let armeenamount = currency[currencyans.armeen];
let aliamount = currency[currencyans.ali];
let amount = currencyans.amount;
let baseamount = amount / armeenamount;
let convertedamount = baseamount;
console.log(convertedamount);
