'use strict'
import { onApp } from "../../../../pageregistry/onApp"
import { HOClaimScenario } from "../../scenarios/FNOL/HOClaimScenario";
import { HomeScenario } from "../../scenarios/Policy/HomeScenario";

const {Given, When, Then } = require("@cucumber/cucumber");
const onAppCC = new onApp("CC");
const homeCreationScenario = new HomeScenario();
const hoClaimScenario = new HOClaimScenario();

When (/^I create a Homeowners Policy in PC$/, async function() {
    await homeCreationScenario.createHomePolicy();

});
Then (/^I successfully issued Homeowners Policy$/, async function(){
    await homeCreationScenario.issuedHomePolicy();

});

When (/^I create an Homeowners claim$/, async function () {
    await onAppCC.loginWithUser("ssmith", "gw");
    await hoClaimScenario.createHOClaim();
    
});

Then (/^HO Claim is created successfully$/, async function () {
    await hoClaimScenario.claimCreatedSuccessfully("Open");
});