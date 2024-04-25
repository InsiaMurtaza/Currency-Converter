import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93,
    UAE: 3.67,
    SAR: 3.75,
    AUS: 1.54,
    INR: 83.33,
    PKR: 278.50
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Choose the Currency from the list below:",
        type: "list",
        choices: ["USD", "EUR", "UAE", "SAR", "AUS", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter the amount:",
        type: "input"
    },
    {
        name: "to",
        message: "Choose the Currency in which you have to convert amount:",
        type: "list",
        choices: ["USD", "EUR", "UAE", "SAR", "AUS", "INR", "PKR"]
    }
]);
let currencyFrom = currency[user_input.from];
let currencyTo = currency[user_input.to];
let amount = user_input.amount;
function currency_converter(currencyFrom, currencyTo, amount) {
    return (amount * currencyTo / currencyFrom).toFixed(2);
}
console.log(currency_converter(currencyFrom, currencyTo, amount));
