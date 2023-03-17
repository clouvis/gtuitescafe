'use strict';
import { onApp } from "../../../pageregistry/onApp.js";
import { AccountCreation } from "../../scenarios/Account/AccountCreation.js";

const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const accountCreation = new AccountCreation();

Given("I login to PolicyCenter as {string}", async function(t, stepArguments){
    let userID = stepArguments[0];
    await onPCApp.navigateToApp();
    await onPCApp.loginWithUser(userID,'gw');
});

When(/^Creating a personal account$/, async function(t, stepArguments){
    await accountCreation.createAccount();
});


