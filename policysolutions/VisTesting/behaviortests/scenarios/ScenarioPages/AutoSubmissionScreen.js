'use strict'
import { PcfComponent } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import world from "../../../utils/world";
import { CustomPages } from "./CustomPages";

const customPages = new CustomPages();

export class AutoSubmissionScreen {

    newSubmissionScreen = PcfComponent('#NewSubmission-NewSubmissionScreen');
    offeringScreen = PcfComponent('#SubmissionWizard-OfferingScreen');
    preQualificationScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_PreQualificationScreen');
    policyInfoScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_PolicyInfoScreen');
    driverScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen');
    newPolicyDriverContactDetailsScreen = PcfComponent('#NewPolicyDriverPopup-ContactDetailScreen');
    vehicleScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen');
    coverageScreen = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PersonalAutoScreen');
    riskAnalysisScreen = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen');
    policyReviewScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen');
    quoteScreen = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen');
    jobCompleteScreen = PcfComponent('#JobComplete-JobCompleteScreen');
    jobWizardInfoBar = PcfComponent('#SubmissionWizard-JobWizardInfoBar');
    uWBlockProgressIssuesPopupIssuesScreen = PcfComponent('#UWBlockProgressIssuesPopup-IssuesScreen');

    async selectLOB(lob){
        let productLabel = this.newSubmissionScreen.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let productSelection = productLabel.prevSibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]'); 
        await t.click(productSelection);
    }
    
    async selectOfferingSelection(value){
        let offeringSelection = this.offeringScreen.component.find('.gw-label').withText("Offering Selection").sibling('div').find('select');
        await t.click(offeringSelection);
        await t.click(offeringSelection.find('option').withAttribute('value', value));
    }

    async addNewDriver(){
        for(let i=0; i<world.vehicleVin.length; i++){
            let driverLVAddButton = this.driverScreen.component.find('.gw-label').withText("Add");
            await t.click(driverLVAddButton);
            await t.click(driverLVAddButton.parent('div').sibling('div').find('.gw-label').withText("New Person"));
            await this.setTextFieldValueForContactDetail("First name", world.driverFirstName[i]);
            await this.setTextFieldValueForContactDetail("Last name", world.driverLastName[i]);
            await this.setTextFieldValueForContactDetail("Date of Birth", world.dateOfBirth[i]);
            await this.selectOptionValueForContactDetail("Marital Status", world.maritalStatus[i]);
            await this.setTextFieldValueForContactDetail("Address 1", world.addressLine[i]);
            await this.selectOptionValueForContactDetail("State", world.state[i]);
            await t.pressKey('tab');
            await this.selectOptionValueForContactDetail("Address Type", world.addressType[i]);
            await this.setTextFieldValueForContactDetail("License #", world.licenseNumber[i]);
            await this.selectOptionValueForContactDetail("License State", world.licenseState[i]);
            await t. pressKey('tab');
            await t.wait(3000);
            await t.debug();
            await t.click(this.newPolicyDriverContactDetailsScreen.component.parent('div').prevSibling('div').find('div[id$=-Update]'));
            await t.click(this.driverScreen.component.find('div.gw-CardTabWidget[id$=-RolesCardTab]').find('.gw-label').withText("Roles"));
            await this.setTextFieldValueForDriver("Year First Licensed", world.yearLicensed[i]);
            await this.selectNumberOfAccidents('td[id$=-PolicyDriverNumberOfAccidents_Cell]', world.numberOfAccidentsPolicyLevel[i]);
            await this.selectNumberOfAccidents('td[id$=-DriverNumberOfAccidents_Cell]', world.numberOfAccidentsAccountLevel[i]);
            await this.selectNumberOfViolations('td[id$=-PolicyDriverNumberOfViolations_Cell]', world.numberOfViolationsPolicyLevel[i]);
            await this.selectNumberOfViolations('td[id$=-DriverNumberOfViolations_Cell]', world.numberOfViolationsAccountLevel[i]);
        }
    }

    async addVehicle(){
        for(let i=0; i<world.vehicleVin.length; i++){
            let driverName = world.driverFirstName[i] + " " + world.driverLastName[i];
            await t.click(this.vehicleScreen.component.find('.gw-label').withText("Create Vehicle"));
            await this.setTextFieldValueForVehicleDetails("VIN", world.vehicleVin[i]);
            await t.pressKey('tab');
            let modelYear = await this.vehicleScreen.component.find('.gw-label').withExactText("Model Year").sibling('div').find('input').value;
            let make = await this.vehicleScreen.component.find('.gw-label').withExactText("Make").sibling('div').find('input').value;
            let model = await this.vehicleScreen.component.find('.gw-label').withExactText("Model").sibling('div').find('input').value;
            world.vehicle [i] = modelYear + " " + make + " " + model;
            console.log(world.vehicle[i]);
            await this.selectOptionValueForVehicleDetails("License State", world.licenseState[i]);
            await this.setTextFieldValueForVehicleDetails("Cost New", world.costNew[i]);
            let addDriverButton = this.vehicleScreen.component.find('div.gw-AddButtonWidget[id$=-AddDriver]').find('.gw-label').withText("Add");
            await t.click(addDriverButton);
            await t.click(addDriverButton.parent('div').sibling('div.gw-subMenu').find('.gw-label').withExactText(driverName));
        }
    }

    async setTextFieldValueForContactDetail(fieldName, value){
        await t.typeText(this.newPolicyDriverContactDetailsScreen.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value)
    }

    async selectOptionValueForContactDetail(dropDownName, optionValue){
        let ddElement = this.newPolicyDriverContactDetailsScreen.component.find('.gw-label').withText(dropDownName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withText(optionValue));
    }

    async setTextFieldValueForDriver(fieldName, value){
        await t.typeText(this.driverScreen.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value)
    }

    async setTextFieldValueForVehicleDetails(fieldName, value){
        await t.typeText(this.vehicleScreen.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value)
    }

    async selectOptionValueForVehicleDetails(dropDownName, optionValue){
        let ddElement = this.vehicleScreen.component.find('.gw-label').withText(dropDownName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withText(optionValue));
    }

    async bindIssueButton(value){
        let bindOptions = this.quoteScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Bind Options");
        let optionValue = bindOptions.parent('div').sibling('div').find('.gw-label').withText(value);
        await t.click(bindOptions);
        await t.click(optionValue);

        if(await this.uWBlockProgressIssuesPopupIssuesScreen.isAvailable()){
            await t.click(this.uWBlockProgressIssuesPopupIssuesScreen.component.parent().prevSibling().find('.gw-label').withText("Details"));
            //approve all in one action
            for(let i=1; i< await customPages.submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSet.rowCount(); i++){
                var index = i.toString(); 
                let uWIssuesRowApproveChecker = await customPages.submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSet.component.find('tr').withAttribute('data-gw-entry-value-ids', index).find('div.gw-LinkWidget[id$=-Approve]');
                if(await uWIssuesRowApproveChecker.exists){
                    await customPages.submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSet.clickOnCell(i,0);
                }
            }
            await customPages.submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSetApprove.click();
            await t.click(this.jobWizardInfoBar.component.nextSibling().find('.gw-label').withText("OK"));
            //approve all one by one
            // while(await this.riskAnalysisScreen.component.find('div.gw-LinkWidget[id$=-Approve]').visible){
            //     await t.click(this.riskAnalysisScreen.component.find('div.gw-LinkWidget[id$=-Approve]'));
            //     await t.click(this.jobWizardInfoBar.component.nextSibling().find('.gw-label').withText("OK"));
            //     await t.pressKey('tab');
            // }
            await t.click(this.riskAnalysisScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));
            await t.click(this.policyReviewScreen.component.parent('div').prevSibling('div').find('.gw-label').withText("Next"));  
            await t.click(bindOptions);
            await t.click(optionValue);
        }
        world.accountName = await this.jobCompleteScreen.component.parent('div').prevSibling('div').find('div.gw-InfoBarElementWidget[id$=-AccountName]').find('.gw-infoValue').innerText;
        console.log("Account Name: " + world.accountName);
        world.policyNumber = await this.jobCompleteScreen.component.parent('div').prevSibling('div').find('div.gw-InfoBarElementWidget[id$=-PolicyNumber]').find('.gw-infoValue').innerText;
        console.log("Policy Number: " + world.policyNumber);
    }
    
    async selectNumberOfAccidents(columnName,value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfAccidentsLabel_Cell]').withExactText("Number of Accidents");
        let dropDown = rowName.sibling(columnName).find('select');
        if(columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell]'){
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value)); 
        }else{
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value)); 
        }
    }

    async selectNumberOfViolations(columnName, value){
        let rowName = this.driverScreen.component.find('td[id$=-NumberOfViolationsLabel_Cell]').withExactText("Number of Violations");
        let dropDown = rowName.sibling(columnName).find('select');
        if(columnName == 'td[id$=-PolicyDriverNumberOfViolations_Cell]'){
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value));
        }else{
            await t.click(dropDown);
            await t.click(dropDown.find('option').withText(value));
        }
    }
}