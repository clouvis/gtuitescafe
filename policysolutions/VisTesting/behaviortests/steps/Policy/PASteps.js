"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { onApp } from "../../../../pageregistry/onApp";
import { PersonalAutoScenario } from "../../scenarios/Policy/PAScenario.js";
import { AccountScenario } from "../../scenarios/Account/AccountScenario";

const onPCApp = new onApp("PC");
const personalAutoScenario = new PersonalAutoScenario();
const accountCreation = new AccountScenario();

When(/^Creating a personal account$/, async function(){
    await accountCreation.createAccount();
});

When(/^i create a Personal Auto Policy$/, async function() {
    await personalAutoScenario.createPersonalAuto();
});

Then(/^successfully issued Auto Policy$/, async function() {
    await personalAutoScenario.issuedPolicy("Submission (Bound)");
});
