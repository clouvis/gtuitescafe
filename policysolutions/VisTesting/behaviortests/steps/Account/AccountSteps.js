'use strict';
//import { onApp } from "../../../pageregistry/onApp";
import { onApp } from "../../../../pageregistry/onApp.js";
import { AccountScenario } from "../../scenarios/Account/AccountScenario";
const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountScenario();

Given("I login to PolicyCenter as {string}", async function(t, stepArguments){
    let userID = stepArguments[0];
    await onPCApp.navigateToApp();
    await onPCApp.loginWithUser(userID,'gw');
});

When(/^Creating a personal account$/, async function(t, stepArguments){
    await accountCreation.createAccount();
});

When(/^Creating a personal account with the following details:$/, async function (t, [], table) {
    await accountCreation.createAccount(table);
});

When(/^I add the following contacts:$/, async function (t, [], table){
    await accountCreation.addContacts(table);
});

Then(/^account is successfully created$/, async function(){

});


