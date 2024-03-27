#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollars
let myPin = 1234;
console.log(`PIN = ${myPin}\nTotal Balance = ${myBalance}`);
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your PIN number", //-------> 1st question about pin
    type: "number"
});
if (pinAns.pin === myPin) {
    console.log("Correct PIN code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation", //--------> 2nd question of options
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast cash"]
        }
    ]);
    console.log(`Your total balance is = ${myBalance}`);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (myBalance < amountAns.amount) {
            console.log(`insufficient balance`);
        }
        else if (amountAns.amount < 0) {
            console.log("ERROR!!!! Enter appropriate value");
        }
        else if (myBalance -= amountAns.amount) {
            console.log("Your remaining balance is:" + myBalance);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your total balance is = ${myBalance}`);
    }
    else if (operationAns.operation === "Fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "options",
                message: "Pick a cash out option",
                type: "list",
                choices: ["500", "1000", "5000", "7000", "10000"]
            }
        ]);
        if (myBalance -= fastcash.options) {
            console.log(`Remaining Balance in your account = ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect PIN number");
}
