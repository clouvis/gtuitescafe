"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { HomeCreationScenario } from "../../scenarios/PolicyCreation/HomeCreationScenario";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountCreation } from "../../../ClouvisTesting/scenarios/Account/AccountCreation"

const onPCApp = new onApp("PC");
const homeCreationScenario = new HomeCreationScenario();
const accountCreation = new AccountCreation();

Given(/^I login in PC$/, async function() {
  await onPCApp.loginWithUser('ssmith', 'gw');
});

When(/^I create a Homeowners Policy$/, async function() {
  //await accountScenario.createPersonalAccount();
  await accountCreation.createAccount();
  await homeCreationScenario.createHomePolicy();
});

Then(/^I successfully issued Homeowners Policy$/, async function() {
  await homeCreationScenario.issuedHomePolicy();
});
