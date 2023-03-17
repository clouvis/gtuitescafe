'use strict';
import { CreateAccountScreen } from "../ScenarioPages/CreateAccountScreen";
import { t } from "testcafe";
import { AccountTabBar } from "../../../../pages/navigation/tabBar/AccountTabBar";
import world from "../../../utils/world";
import { AccountMenuLinks } from "../../../../pages/navigation/menuLinks/AccountMenuLinks";
import { Contacts } from "../../../../pages/account/Contacts";
import { NewAccountContactPopup } from "../../../../pages/popup/New/NewAccountContactPopup";


const accountMenuLinks = new AccountMenuLinks();
const createAccountScreen = new CreateAccountScreen();
const accountTabBar = new AccountTabBar();
const contacts = new Contacts();
const newAccountContactPopup = new NewAccountContactPopup();

export class AccountScenario{

    async createAccount(accountDetails) {
        let details = accountDetails.rowsHash();
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await createAccountScreen.setTextFieldValue("First name", details["firstName"]);
        await createAccountScreen.setTextFieldValue("Last name", details["lastName"]);
        await createAccountScreen.searchResetButton();
        await t.pressKey('tab');
        let listViewAccountSearchResults = createAccountScreen.newAccountSearchDV.component.find('div.gw-ListViewWidget[id$=-NewAccountSearchResultsLV]');
        if(await listViewAccountSearchResults.visible){
            await t.click(listViewAccountSearchResults.find('div.gw-TextValueWidget[id$=-AccountNumber]').child().find('div').withAttribute('role', "button"));
        }else{
            await createAccountScreen.createNewAccountButton("Person");
            await createAccountScreen.setTextFieldValueForCreateAccount("Primary Email", details["email"]);
            await createAccountScreen.setTextFieldValueForCreateAccount("Address 1", details["address1"]);
            await createAccountScreen.setTextFieldValueForCreateAccount("City", details["city"]);
            // await createAccountScreen.selectOptionValueForCreateAccount("State", details["state"]);
            // await createAccountScreen.setTextFieldValueForCreateAccount("ZIP Code", details["zip"]);
            await t.pressKey('tab');
            await createAccountScreen.selectOptionValueForCreateAccount("Address Type", details["addressType"]);
            await t.click(createAccountScreen.createAccountDV.component.find('div.gw-ImageButtonWidget[id$=-SelectOrganization]'));
            await createAccountScreen.setTextFieldValueForOrganization("Organization", world.contact.organization);
            await createAccountScreen.searchResetButtonOrganization("S");
            await t.pressKey('tab');
            await createAccountScreen.selectOrganizationResultsListView(world.contact.organization1);
            await createAccountScreen.selectOptionValueForCreateAccount("Producer Code", world.contact.producerCode)
            await createAccountScreen.updateCancelButtonForCreateAccount("Update");
        }
    }

    async addContacts(contact){
        let contactDetails = contact.hashes();
        for(let i=0; i<contactDetails.length; i++){
            await accountMenuLinks.menuLinksAccountFile_AccountFile_Contacts.click();
            await contacts.accountContactsLV_tbaddContactButton.click();
            await t.hover(contacts.accountContactsLV_tbaddContactButton.component.find('div[id$=-roleType]').find('.gw-label').withText("Driver"));
            await t.click(contacts.accountContactsLV_tbaddContactButton.component.find('div[id$=-roleType]').find('.gw-label').withText("Driver").parent().find('div[id$=-contactType]'));
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetFirstName.setValue(contactDetails[i]["firstName"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetGlobalPersonNameInputSetLastName.setValue(contactDetails[i]["lastName"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetDateOfBirth.setValue(contactDetails[i]["DOB"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetMaritalStatus.selectOptionByLabel(contactDetails[i]["maritalStatus"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVContactNameInputSetEmailAddress1.setValue(contactDetails[i]["email"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1.setValue(contactDetails[i]["address1"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity.setValue(contactDetails[i]["city"]);
            await t.pressKey('tab');
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVAddressType.selectOptionByValue(contactDetails[i]["addressType"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVLicenseInputSetLicenseNumber.setValue(contactDetails[i]["licenseNumber"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenAccountContactCVAccountContactDVLicenseInputSetLicenseState.selectOptionByValue(contactDetails[i]["licenseState"]);
            await newAccountContactPopup.newAccountContactPopupContactDetailScreenUpdate.click();

        }
        
    }
}