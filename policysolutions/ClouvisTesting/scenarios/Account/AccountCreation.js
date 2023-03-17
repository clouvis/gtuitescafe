'use strict';
import { CreateAccountScreen } from "../ScenarioPages/CreateAccountScreen";
import { t } from "testcafe";
import { AccountTabBar } from "../../../pages/navigation/tabBar/AccountTabBar";
import world from "../../utils/world";


const createAccountScreen = new CreateAccountScreen();
const accountTabBar = new AccountTabBar();

export class AccountCreation{

    async createAccount() {
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await createAccountScreen.setTextFieldValue("First name", world.contact.firstName);
        await createAccountScreen.setTextFieldValue("Last name", await createAccountScreen.randomFieldName(8));
        //await createAccountScreen.setTextFieldValue("Last name", world.contact.lastName);
        await createAccountScreen.selectOptionValue("Country", world.contact.country);
        await createAccountScreen.selectOptionValue("State", world.contact.state);
        await createAccountScreen.searchResetButton();
        let listViewAccountSearchResults = createAccountScreen.newAccountSearchDV.component.find('div.gw-ListViewWidget[id$=-NewAccountSearchResultsLV]');
        if(await listViewAccountSearchResults.visible){
            await t.click(listViewAccountSearchResults.find('div.gw-TextValueWidget[id$=-AccountNumber]').child().find('div').withAttribute('role', "button"));
        }else{
            await createAccountScreen.createNewAccountButton("Person");
            await createAccountScreen.setTextFieldValueForCreateAccount("Address 1", world.contact.address1);
            await createAccountScreen.selectOptionValueForCreateAccount("Address Type", world.contact.addressType);
            await t.click(createAccountScreen.createAccountDV.component.find('div.gw-ImageButtonWidget[id$=-SelectOrganization]'));
            await createAccountScreen.setTextFieldValueForOrganization("Organization", world.contact.organization);
            await createAccountScreen.searchResetButtonOrganization("S");
            await t.pressKey('tab');
            await createAccountScreen.selectOrganizationResultsListView(world.contact.organization1);
            await createAccountScreen.selectOptionValueForCreateAccount("Producer Code", world.contact.producerCode)
            await createAccountScreen.updateCancelButtonForCreateAccount("Update");
        }
        await t.wait(3000);
    }
}