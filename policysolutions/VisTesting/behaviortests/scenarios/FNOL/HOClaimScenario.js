'use strict'
import { t } from "testcafe"
import world from "../../../utils/world";
import { FNOLScreen } from "../ScenarioPages/FNOLScreen";

const fNOLScreen = new FNOLScreen();

export class HOClaimScenario{

    async createHOClaim (){
        console.log("======= Start creating a HO claim =======");
        await t.click(fNOLScreen.tabBarClaimTab.component.find('div.gw-action--expand-button'));
        await fNOLScreen.tabBarClaimTabClaimTabFNOLWizard.click();
        await fNOLScreen.fNOLWizardpolicyNumber.setValue(world.policyNumber);
        await fNOLScreen.fNOLWizardFNOLWizard_FindPolicyScreenFNOLWizardFindPolicyPanelSetSearch.click();
        await fNOLScreen.generateDate();
        await fNOLScreen.fNOLWizardClaim_LossDate.setValue(world.claim.lossDate);
        await fNOLScreen.fNOLWizard_Next.click();
        await fNOLScreen.fNOLWizardReportedBy_Name.selectFirstOptionWithValue();
        await t.pressKey('tab');
        await fNOLScreen.fNOLWizard_Next.click();
        await t.debug();
        await t.typeText(fNOLScreen.fNOLWizardNewLossDetailsHomeownersDVDescription.component, world.claim.claimDescription);
        await fNOLScreen.fNOLWizardNewLossDetailsHomeownersDVClaim_LossCause.selectNthOption(6); 
        await fNOLScreen.fNOLWizard_Next.click();
        await fNOLScreen.fNOLWizard_Next.click();
        await fNOLScreen.fNOLWizard_Finish.click();
        await fNOLScreen.newClaimSavedLink.click();
        await fNOLScreen.claimMenuLinks_ClaimStatus.click();
        console.log("Claim Number: " + (await fNOLScreen.tabBarClaimTab.component.find('.gw-label').withAttribute('aria-label').innerText).substring(7,20));
    }

    async claimCreatedSuccessfully(status){
        let claimstatus = await fNOLScreen.claimStatus.component.find('.gw-label').innerText;
        await t.expect(claimstatus).contains(status);
    }
}