'use strict';
import { AccountMenuActions } from "../../../../pages/navigation/menuActions/AccountMenuActions";
import { NextSubmissionWizard } from "../../../../pages/navigation/submissionWizard/NextSubmissionWizard";
import { PolicyInfoScreen } from "../../../../pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen"
import { ProductSelection } from "../ScenarioPages/ProductSelection";
import { IndustryCodeSearchPopup } from "../../../../pages/popup/Industry/IndustryCodeSearchPopup"
import { WorkersComp } from "../../../../pages/lOBWizardStepGroup/WorkersComp";
import { t } from "testcafe";
import { WCClassCodeSearchPopup } from "../../../../pages/popup/WCClass/WCClassCodeSearchPopup";
import world from "../../../utils/world";
import { WCSupplementalScreen } from "../ScenarioPages/WCSupplementalScreen";
import { PolicyReviewScreen } from "../../../../pages/other/PolicyReviewScreen";
import { QuoteScreen } from "../../../../pages/other/QuoteScreen";

const productSelection = new ProductSelection();
const nextSubmissionWizard = new NextSubmissionWizard();
const accountMenuActions = new AccountMenuActions();
const policyInfoScreen = new PolicyInfoScreen();
const industryCodeSearchPopup = new IndustryCodeSearchPopup();
const workersComp = new WorkersComp();
const wCClassCodeSearchPopup = new WCClassCodeSearchPopup();
const wCSupplementalScreen = new WCSupplementalScreen();
const policyReviewScreen = new PolicyReviewScreen();
const quoteScreen = new QuoteScreen();

export class WCScenario{
    
    async wCSubmission(){
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await productSelection.selectLOB("Workers' Compensation");
        await nextSubmissionWizard.submissionWizardNext.click();
        await policyInfoScreen.policyOfficialIDInputSetOfficialIDDV_Input.setValue("123456789");
        await policyInfoScreen.submissionWizardLOBWizardStepGroupSubmissionWizard_PolicyInfoScreenSubmissionWizard_PolicyInfoDVAccountInfoInputSetIndustryCodeSelectIndustryCode.click();
        await industryCodeSearchPopup.industryCodeSearchDVClassification.setValue("Veterinarians");
        await industryCodeSearchPopup.industryCodeSearchPopupIndustryCodeSearchScreenIndustryCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await industryCodeSearchPopup.industryCodeSearchScreenIndustryCodeSearchResultsLV.clickOnCell(0,0);
        await policyInfoScreen.accountInfoInputSetOrganizationType.selectFirstOptionWithValue();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV_tbAdd.click();
        let governingLawDropDown = await workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV.component.find('div.gw-ExpressionRangeValueWidget[id$=-SpecialCoverage]').find('select');
        await t.click(governingLawDropDown);
        await t.click(governingLawDropDown.find('option').withText('Voluntary Comp'));
        let locationDropDown = await workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV.component.find('div.gw-ExpressionRangeValueWidget[id$=-Loc]').find('select');
        await t.click(locationDropDown);
        await t.click(locationDropDown.find('option').nth(1));
        await t.click(workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV.component.find('div.gw-BasePickerValueWidget[id$=-ClassCode]').find('span'));
        await wCClassCodeSearchPopup.wCClassCodeSearchDVClassification.setValue("Dog");
        await wCClassCodeSearchPopup.wCClassCodeSearchPopupWCClassCodeSearchScreenWCClassCodeSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
        await wCClassCodeSearchPopup.wCClassCodeSearchScreenClassCodeSearchResultsLV.clickOnCell(0,0);
        await t.typeText(workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV.component.find('div.gw-TextValueWidget[id$=-NumEmployees]').find('input'), "5");
        await t.typeText(workersComp.submissionWizardLOBWizardStepGroupLineWizardStepSetWorkersCompCoverageConfigScreenWorkersCompCoverageCVWorkersCompClassesInputSetWCCovEmpLV.component.find('div.gw-TextValueWidget[id$=-AnnualRenum]').find('input'), "1234567890");
        await nextSubmissionWizard.submissionWizardNext.click();    
        await this.wCSupplemental();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await policyReviewScreen.quoteButton.click();
        await quoteScreen.bindOptionsButton.click();
        await quoteScreen.issuePolicyButton.click();
        await this.verifyPolicyIsBound();
    }

    async wCSupplemental(){
        for(let i=1; i <= await wCSupplementalScreen.wCSupplementalLV.rowCount(); i++){
            let index = i.toString();
            let questionLabel = await wCSupplementalScreen.wCSupplementalLV.component.find('tr').withAttribute('data-gw-entry-value-ids', index).find('div.gw-TextValueWidget[id$=-questionText]').find('.gw-value-readonly-wrapper');
            if(await questionLabel.innerText == world.questions[0] || await questionLabel.innerText == world.questions[1] || await questionLabel.innerText == world.questions[2]){
                await t.click(questionLabel.parent('td').sibling().find('span').withExactText("Yes").prevSibling().find('input'));
            }else{
                await t.click(questionLabel.parent('td').sibling().find('span').withExactText("No").prevSibling().find('input'));
            }
        }
    }
    
    async verifyPolicyIsBound(){
        let expectedStatus = "Submission (Bound)";
        await t.expect(quoteScreen.jobLabel.component.innerText).contains(expectedStatus);
    }

}