'use strict';
import { onApp } from "../../../../pageregistry/onApp"
import { FNOLScenario } from "../../scenarios/FNOL/FNOLScenario";

const {Given, When, Then } = require("@cucumber/cucumber");
const onAppCC = new onApp("CC");
const fnolScenario = new FNOLScenario();

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