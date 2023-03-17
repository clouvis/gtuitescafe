'use strict';
import { AccountMenuActions } from "../../../pages/navigation/menuActions/AccountMenuActions"
import { NewSubmission } from "../../../pages/other/NewSubmission"
import { OfferingScreen } from "../../../pages/other/OfferingScreen"
import { NextSubmissionWizard } from "../../../pages/navigation/submissionWizard/NextSubmissionWizard"
import { PersonalAuto } from "../../../pages/lOBWizardStepGroup/PersonalAuto"
import { AddExistingDriver } from "../../../pages/other/AddExistingDriver"
import { AddVehicle } from "../../../pages/other/AddVehicle"
import { QuoteScreen } from "../../../pages/other/QuoteScreen"
import { PaymentScreen } from "../../../pages/other/PaymentScreen";
import { NewAdditionalInsured } from "../../../pages/other/NewAddionalInsured";
import { PolicyMenuLinks } from "../../../../ignite/previousGeneratedOutput/classFiles/PolicySolutions/pages/navigation/menuLinks/PolicyMenuLinks";
import { DriverDetailsRoleTab } from "../../../pages/other/DriverDetailsRoleTab";
import { Contacts } from "../../../../ignite/previousGeneratedOutput/classFiles/PolicySolutions/pages/policy/Contacts";

import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen";
import world from "../../utils/world";
import { DriverScreen } from "../ScenarioPages/DriverScreen";
import { PcfComponent } from "@gtui/gt-ui-framework";

const accountMenuActions = new AccountMenuActions();
const newSubmission = new NewSubmission();
const offeringScreen = new OfferingScreen();
const nextSubmissionWizard = new NextSubmissionWizard();
const personalAuto = new PersonalAuto();
const addExistingDriver = new AddExistingDriver();
const addVehicle = new AddVehicle();
const quoteScreen = new QuoteScreen();
const paymentScreen = new PaymentScreen();
const newAdditionalInsured = new NewAdditionalInsured();
const policyMenuLinks = new PolicyMenuLinks();
const driverDetailsRoleTab = new DriverDetailsRoleTab();
const contacts = new Contacts();
const policyInfoScreen = new PolicyInfoScreen();
const driverScreen = new DriverScreen();

export class PersonalAutoPolicyCreationScenario{

    async createPersonalAutoPolicy(){
        await accountMenuActions.accountFileAccountFileMenuActions.click();
        await accountMenuActions.accountFileMenuActions_CreateAccountFileMenuActions_NewSubmission.click();
        await t.wait(1000);
        await this.selectAutoLOB("Personal Auto");
        await t.wait(1000);
        await offeringScreen.selectofferingSelection("Standard Program");
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();

        await nextSubmissionWizard.submissionWizardNext.click();

        //put method of add new driver
        
        //await this.addNewDriver();
        await addExistingDriver.selectExistingDriver();
        
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetDateOfBirth.setValue("08041990")
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseNumber.setValue("D04753290");
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPADriversScreenPADriversPanelSetDriversListDetailPanelDriverDetailsCVPolicyContactDetailsDVLicenseInputSetLicenseState.selectOptionByLabel("Arizona");       
        await personalAuto.driverDetailsCVRolesCardTab.click();
        await driverScreen.licenseYear.setValue("2000");
        await t.pressKey('tab');
        await this.accident('td[id$=-PolicyDriverNumberOfAccidents_Cell]', world.numberOfAccidentsPolicyLevel[0]);
        await this.accident('td[id$=-DriverNumberOfAccidents_Cell]', world.numberOfViolationsPolicyLevel[0]);
        await this.violation('td[id$=-PolicyDriverNumberOfViolations_Cell]', world.numberOfAccidentsAccountLevel[0]);
        await this.violation('td[id$=-DriverNumberOfViolations_Cell]', world.numberOfViolationsAccountLevel[0]);

        await t.debug()
        
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAuto.vehiclesListDetailPanel_tbAdd.click();
        await t.wait(1000);
        await personalAuto.personalAuto_VehicleDVVin_DV.setValue("1GCRCSE01BZ383562");
        await t.pressKey('tab');
        await t.wait(1000);
        await personalAuto.personalAuto_VehicleDVLicenseState_DV.selectOptionByLabel("Arizona");
        await personalAuto.personalAuto_VehicleDVCostNew_DV.setValue("1000");
        await addVehicle.selectFirstDriver();
        await t.wait(1000);
        await nextSubmissionWizard.submissionWizardNext.click();
        await personalAuto.submissionWizardLOBWizardStepGroupLineWizardStepSetPersonalAutoScreenJobWizardToolbarButtonSetQuoteTypeToolbarButtonSetQuote.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await nextSubmissionWizard.submissionWizardNext.click();
        await paymentScreen.bindOptionsButton.click();
        await paymentScreen.issuePolicyButton.click();
        await t.wait(1000);
    }

    async selectAutoLOB(lob){
        let productLabel = newSubmission.newSubmissionNewSubmissionScreenProductOffersDVProductSelectionLV.component.find('td[id$=-Name_Cell]').withExactText(lob);
        let productSelection = productLabel.sibling('td[id$=-Select]').find('div.gw-LinkWidget[id$=-addSubmission]'); 
        await t.click(productSelection);
    }

    async issuedPersonalAutoPolicy(){
        let issuedPolicy = "Submission (Bound)"; 
        await t.expect(await quoteScreen.jobLabel.component.innerText).contains(issuedPolicy);
        
    }

    async addOtherContact(){
        await policyInfoScreen.namedInsuredsLV_tbAddContactsButton.click();
        await t.hover(policyInfoScreen.submissionWizardLOBWizardStepGroupSubmissionWizard_PolicyInfoScreenSubmissionWizard_PolicyInfoDVAdditionalNamedInsuredInputSetNamedInsuredsLV_tbAddContactsButtonAddOtherContact.component.find('div.gw-action--expand-button'));
        await policyInfoScreen.selectFirstAdditionalInsured.click();
    } 

    async addNewDriver() {

        for(let i=0; i<world.vehicleVin.length;i++){
            await personalAuto.driversLV_tbAddDriver.click();
            await driverScreen.addNewPerson.click();
            await t.wait(1000);
            await driverScreen.firstName.setValue(world.driverFirstName[i]);
            await driverScreen.lastName.setValue(world.driverLastName[i]);
            await driverScreen.dateOfBirth.setValue(world.dateOfBirth[i]);
            await driverScreen.maritalStatus.selectOptionByLabel(world.maritalStatus[i]);
            await driverScreen.addressLine.setValue(world.addressLine[i]);
            await driverScreen.state.selectOptionByLabel(world.state[i]);
            await t.pressKey('tab');
            await driverScreen.addressTypesss.selectOptionByLabel(world.addressType[i]);
            await driverScreen.licenseNumber.setValue(world.licenseNumber[i]);
            await driverScreen.licenseStateForNewDrivers.selectOptionByLabel(world.licenseState[i]);
            await driverScreen.okButtonsss.click();
            await t.wait(1000);
            await driverScreen.rolesTab.click();
            await driverScreen.yearFirstLicensedNewPerson.setValue(world.yearLicensed[i]);
            await this.accident('td[id$=-PolicyDriverNumberOfAccidents_Cell]', world.numberOfAccidentsPolicyLevel[i]);
            await this.accident('td[id$=-DriverNumberOfAccidents_Cell]', world.numberOfViolationsPolicyLevel[i]);
            await this.violation('td[id$=-PolicyDriverNumberOfViolations_Cell]', world.numberOfAccidentsAccountLevel[i]);
            await this.violation('td[id$=-DriverNumberOfViolations_Cell]', world.numberOfViolationsAccountLevel[i]);
            await t.debug();

            await driverScreen.addMVR();
            await driverScreen.storeDriverName();

        }

    }

    async accident(columnName, value){
        let primaryNamedInsuresLabel = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-0_title');
        if(await primaryNamedInsuresLabel.component.visible){
            let numOfAccidents = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-NumberOfAccidentsLabel_Cell').component.find('.gw-value-readonly-wrapper').withText('Number of Accidents');
            let dropDown = numOfAccidents.parent('td').sibling(columnName).find('select');
            if (columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell]') {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            } else {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            }
        }else{
            let numOfAccidents = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-NumberOfAccidentsLabel_Cell').component.find('.gw-value-readonly-wrapper').withText('Number of Accidents');
            let dropDown = numOfAccidents.parent('td').sibling(columnName).find('select');
            if (columnName == 'td[id$=-PolicyDriverNumberOfAccidents_Cell]') {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            } else {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            }
        }
    }

    async violation(columnName, value){
        let primaryNamedInsuresLabel = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-0_title');
        if(await primaryNamedInsuresLabel.component.visible){
            let numOfViolations = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-NumberOfViolationsLabel_Cell').component.find('.gw-value-readonly-wrapper').withText('Number of Violations');
            let dropDown = numOfViolations.parent('td').sibling(columnName).find('select');
            if (columnName == 'td[id$=-PolicyDriverNumberOfviolations_Cell]') {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            } else {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            }
        }else{
            let numOfViolations = PcfComponent('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-0-PolicyContactRolePanelSet-NumberOfViolationsLabel_Cell').component.find('.gw-value-readonly-wrapper').withText('Number of Violations');
            let dropDown = numOfViolations.parent('td').sibling(columnName).find('select');
            if (columnName == 'td[id$=-PolicyDriverNumberOfviolations_Cell]') {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            } else {
                await t.click(dropDown);
                await t.click(dropDown.find('option').withText(value));
            }

        }
        
    }

}