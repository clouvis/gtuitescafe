"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
const { AccountScenario } = require("../../scenarios/Account/AccountScenario");
const { WCScenario } = require("../../scenarios/Policy/WCScenario");

const wCScenario = new WCScenario(); 
const accountCreation = new AccountScenario();
When(/^Creating a Personal Account$/, async function(){
    await accountCreation.createAccount();
});

When(/^I create a Worker's Compensation Policy$/, async function() {
    await wCScenario.wCSubmission();
});

Then(/^Successfully issued WC Policy$/, async function() {
    
});