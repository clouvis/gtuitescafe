'use strict';
import { t } from "testcafe";
import { AccountMenuActions } from "../../../../pages/navigation/menuActions/AccountMenuActions";
import { AutoSubmissionScreen } from "../ScenarioPages/AutoSubmissionScreen";
import world from "../../../utils/world";


const autoSubmissionScreen = new AutoSubmissionScreen();
const accountMenuActions = new AccountMenuActions();
export class PersonalAutoScenario{

    async createPersonalAuto(){
        console.log("======= Start creating a PA policy submission =======");
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await autoSubmissionScreen.selectLOB(world.lOB);
        await autoSubmissionScreen.selectOfferingSelection("Basic Program");
        await t.click(autoSubmissionScreen.offeringScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        await t.click(autoSubmissionScreen.preQualificationScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        await t.click(autoSubmissionScreen.policyInfoScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        //Adding 2 driver
        await autoSubmissionScreen.addNewDriver();
        await t.click(autoSubmissionScreen.driverScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        //Adding 2 Vehicles
        await autoSubmissionScreen.addVehicle();
        await t.click(autoSubmissionScreen.vehicleScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        await t.click(autoSubmissionScreen.coverageScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        await t.click(autoSubmissionScreen.riskAnalysisScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
        await t.click(autoSubmissionScreen.policyReviewScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Quote"));
        await autoSubmissionScreen.bindIssueButton("Issue Policy");
    }

    async issuedPolicy(submissionStatus){
        let status = await autoSubmissionScreen.jobCompleteScreen.component.parent('div').prevSibling('div').find('div.gw-InfoBarElementWidget[id$=-JobLabel]').innerText;
        await t.expect(status).contains(submissionStatus);
        console.log("Policy Status: " + status);
    }

}