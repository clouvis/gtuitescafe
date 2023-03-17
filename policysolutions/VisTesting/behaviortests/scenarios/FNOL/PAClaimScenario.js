'use strict';
import { ClaimTabBar } from "../../../../../claimsolutions/pages/navigation/tabBar/ClaimTabBar";
import { FNOLScreen } from "../ScenarioPages/FNOLScreen"
import { FNOLWizard } from "../../../../../claimsolutions/pages/claim/FNOLWizard"
import world from "../../../utils/world";
import { t } from "testcafe";

const fNOLScreen = new FNOLScreen();
const claimTabBar = new ClaimTabBar();
const fNOLWizard = new FNOLWizard();

export class PAClaimScenario {

    async createPAClaim(){
        console.log("======= Start creating a PA claim =======");
        await t.click(claimTabBar.tabBarClaimTab.component.find('div.gw-action--expand-button'));
        await claimTabBar.claimTabClaimTab_FNOLWizard.click();
        await fNOLWizard.fNOLWizardFindPolicyPanelSetpolicyNumber_2.setValue(world.policyNumber);
        await fNOLWizard.fNOLWizardFindPolicyPanelSetSearch.click();
        await fNOLScreen.generateDate();
        await fNOLScreen.fNOLWizardClaim_LossDate.setValue(world.claim.lossDate);
        await fNOLWizard.fNOLWizardNext.click();
        await fNOLScreen.fNOLWizardReportedBy_Name.selectOptionByLabel(world.accountName);
        await t.pressKey('tab');
        await t.click(fNOLScreen.fNOLWizardFullWizardStepSetFNOLWizard_BasicInfoScreenPanelRowVehiclePanelColumn.component.find('div.gw-InputGroup--header--label').withText(world.vehicle[1]).prevSibling('div'));
        await fNOLWizard.fNOLWizardNext.click();
        await t.typeText(fNOLScreen.fNOLWizardNewLossDetailsScreenLossDetailsAddressDVDescription.component, world.claim.claimDescription);
        await fNOLWizard.lossDetailsAddressDVClaim_LossCause.selectNthOption(5); 
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerAddress_Picker.selectFirstOption();
        await t.pressKey('tab');
        await fNOLWizard.fNOLWizardFinish.click();
        await fNOLScreen.newClaimSavedLink.click();
        await fNOLScreen.claimMenuLinks_ClaimStatus.click();
        console.log("Claim Number: " + (await fNOLScreen.tabBarClaimTab.component.find('.gw-label').withAttribute('aria-label').innerText).substring(7,20));
    }

    async claimCreatedSuccessfully(status){
        let claimstatus = await fNOLScreen.claimStatus.component.find('.gw-label').innerText;
        await t.expect(claimstatus).contains(status);
    }
}