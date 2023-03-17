'use strict'
import { onApp } from "../../../../pageregistry/onApp"
import { PAClaimScenario } from "../../scenarios/FNOL/PAClaimScenario";
import { PersonalAutoScenario } from "../../scenarios/Policy/PAScenario";

const {Given, When, Then } = require("@cucumber/cucumber");
const onAppCC = new onApp("CC");
const personalAutoScenario = new PersonalAutoScenario();
const pAClaimScenario = new PAClaimScenario();

When (/^I create a Personal Auto in PC$/, async function() {
    await personalAutoScenario.createPersonalAuto();

});
Then (/^successfully issued Personal Auto Policy$/, async function(){
    await personalAutoScenario.issuedPolicy("Submission (Bound)");

});

When (/^I create an Personal Auto claim$/, async function () {
    await onAppCC.loginWithUser("ssmith", "gw");
    await pAClaimScenario.createPAClaim();
    
});

Then (/^PA Claim is created successfully$/, async function () {
    await pAClaimScenario.claimCreatedSuccessfully("Open");
});