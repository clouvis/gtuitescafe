'use strict'
import { onApp } from "../../../../pageregistry/onApp"
import { FNOLScenario } from "../../../scenarios/Claim/FNOLScenario";
// import { HOClaimScenario } from "../../../scenarios/Claim/HOClaimScenario";
// import { PAClaimScenario } from "../../../scenarios/Claim/PAClaimScenario";
// import { PersonalAutoScenario } from "../../../scenarios/Policy/PersonalAutoScenario";
// import { HomeCreationScenario } from "../../../scenarios/PolicyCreation/HomeCreationScenario";

const {Given, When, Then } = require("@cucumber/cucumber");
const onAppCC = new onApp("CC");
const fnolScenario = new FNOLScenario();
// const homeCreationScenario = new HomeCreationScenario();
// const hoClaimScenario = new HOClaimScenario();
// const personalAutoScenario = new PersonalAutoScenario();
// const pAClaimScenario = new PAClaimScenario();

When (/^I create a (.*) Policy in PC$/, async function(t, stepArguments) {
    let LOB = stepArguments[0];
    await fnolScenario.creatingPolicy(LOB);
    
});

When (/^I create an (.*) claim$/, async function (t, stepArguments) {
    await onAppCC.loginWithUser("ssmith", "gw");
    let LOB = stepArguments[0];
    await fnolScenario.creatingClaim(LOB);
    
});

Then (/^Claim is created successfully$/, async function () {

});