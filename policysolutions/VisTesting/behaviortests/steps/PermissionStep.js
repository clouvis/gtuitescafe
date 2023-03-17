'use strict';
import { onApp } from "../../../../pageregistry/onApp.js";
import world from "../../utils/world";
import { PermissionScenario } from "../scenarios/PermissionScenario.js";
const {Given, When, Then} = require("@cucumber/cucumber");
const onPCApp = new onApp("PC");
const permissionScenario = new PermissionScenario();

Given("search the existing user {string}", async function(t, stepArguments){
    let user = stepArguments[0];
    await permissionScenario.searchUser(user);   
});

When(/^add the permission (.*)$/, async function(t, stepArguments){
   world.permission = stepArguments[0];
   await permissionScenario.addPermission(world.permission.substring(1, (world.permission.length)-1)); 
});

When(/^logout the current user$/, async function () {
    await permissionScenario.signOff();
});

When(/^login as (.*)$/, async function (t, stepArguments){
    let userID = stepArguments[0];
    await onPCApp.navigateToApp();
    await onPCApp.loginWithUser(userID,'gw');
});

When(/^the user should view the runtime properties screen$/, async function(){
    
});