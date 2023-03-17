"use strict";
const { Given, When, Then } = require("@cucumber/cucumber");
import { HomeScenario } from "../../scenarios/Policy/HomeScenario";
import { onApp } from "../../../../pageregistry/onApp";
import { AccountScenario } from "../../scenarios/Account/AccountScenario"

const onPCApp = new onApp("PC");
const homeCreationScenario = new HomeScenario();
const accountCreation = new AccountScenario();

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
