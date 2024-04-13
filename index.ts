#! /usr/bin/env node

import inquirer from "inquirer"

const currency:any = {
    USD: 1,  //base currency
    EUR: 0.91,
    GBP: 0.76,
    PAK: 278.00,
    JPY: 151.62,
    CAD: 1.36,
    RUB: 92.45
};
let userAnwser = await inquirer.prompt([{
    name: "from",
    message: "Enter From Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "PAK", "JPY", "CAD", "RUB"]
},
{
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "PAK", "JPY", "CAD", "RUB"]
},
{
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
}
])

let fromAmount = currency[userAnwser.from]
let toAmount = currency[userAnwser.to]
let amount = userAnwser.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount)

