'use strict'
import { PcfComponent } from "@gtui/gt-ui-framework"
import { t } from "testcafe";

export class CreateAccountScreen {

    newAccountSearchDV = PcfComponent('#NewAccount-NewAccountScreen');
    createAccountDV = PcfComponent('#CreateAccount-CreateAccountScreen');
    organizationSearchPopupScreen = PcfComponent('#OrganizationSearchPopup-OrganizationSearchPopupScreen');

    async setTextFieldValue(fieldName, value){
        await t.typeText(this.newAccountSearchDV.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value);
    }

    async selectOptionValue(dropdownName, optionValue){
        let dropdownElement = this.newAccountSearchDV.component.find('.gw-label').withText(dropdownName).sibling('div').find('select');
        await t.click(dropdownElement);
        await t.click(dropdownElement.find('option').withAttribute('value', optionValue));  
    }

    async searchResetButton(){
       await t.click(this.newAccountSearchDV.component.find('.gw-emptyLabel').sibling('div').find('div.gw-shortcutKey').withText("S"));
    }

    async setTextFieldValueForCreateAccount(fieldName, value){
        await t.typeText(this.createAccountDV.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value)
    }

    async selectOptionValueForCreateAccount(dropdownName, optionValue){
        let ddElement = this.createAccountDV.component.find('.gw-label').withText(dropdownName).sibling('div').find('select');
        await t.click(ddElement);
        await t.click(ddElement.find('option').withAttribute('value', optionValue));
    }

    async createNewAccountButton(menu){
        let createButton = this.newAccountSearchDV.component.find('div.gw-ToolbarButtonWidget[id$=-NewAccountButton]')
        await t.click(createButton);
        await t.click(createButton.find('.gw-label').withText(menu));
    }

    async setTextFieldValueForOrganization(fieldName , value) {
        await t.typeText(this.organizationSearchPopupScreen.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value);
    }

    async searchResetButtonOrganization(buttonName) {
        await t.click(this.organizationSearchPopupScreen.component.find('.gw-emptyLabel').sibling('div').find('div.gw-shortcutKey').withText(buttonName));
    }

    async selectOrganizationResultsListView(organizationName){
        let organizationSearchResults = this.organizationSearchPopupScreen.component.find('div.gw-ListViewWidget[id$=-OrganizationSearchResultsLV]').find('td[id$=-Name_Cell]').withExactText(organizationName);
        let organizationSelection = organizationSearchResults.sibling('td').find('div').find('.gw-label').withText("Select");
        await t.click(organizationSelection);
    }

    async updateCancelButtonForCreateAccount(buttonName){
        await t.click(this.createAccountDV.component.parent('div').prevSibling('div').find('.gw-label').withText(buttonName));
        
    }

    async randomFieldName(length) {
        var fieldName = '';
        var character = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
        var charLength = character.length;
        for (var i = 0; i < length; i++) {
            fieldName += character.charAt(Math.floor(Math.random() * charLength));
        }
        return fieldName;
    }
}