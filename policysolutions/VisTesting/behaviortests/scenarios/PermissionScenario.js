'use strict';
import { PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";
import { AdminUserSearchPage } from "../../../pages/admin/usersAndSecurity/AdminUserSearchPage";
import { AdminMenuLinks } from "../../../pages/navigation/menuLinks/AdminMenuLinks";
import { AdminTabBar } from "../../../pages/navigation/tabBar/AdminTabBar";
import { RoleDetailScreen } from "./ScenarioPages/RoleDetailScreen";
import { UserDetailScreen } from "./ScenarioPages/UserDetailsScreen";
import world from "../../utils/world";

const adminTabBar = new AdminTabBar();
const adminUserSearchPage = new AdminUserSearchPage();
const userDetailScreen = new UserDetailScreen();
const roleDetailScreen = new RoleDetailScreen();
const adminMenuLinks = new AdminMenuLinks();

export class PermissionScenario {

    async addPermission(permission){
        await adminUserSearchPage.userSearchScreenUserSearchResultsLV.clickOnCell(0,1);
        await userDetailScreen.userDetailPageUserDetailScreenUserDetail_RolesCardTab.click();
        for (let i=0; i< await userDetailScreen.userDetailPageUserDetailScreenUserRolesLV.rowCount(); i++){
            let roleName = await userDetailScreen.userDetailPageUserDetailScreenUserRolesLV.getTextFromCell(i,1);
            console.log(roleName);
            await t.click(userDetailScreen.userDetailPageUserDetailScreenUserRolesLV.component.find('.gw-label').withText(roleName));
            await this.searchPermission(permission);
            await roleDetailScreen.roleDetailPageRoleDetailPage_UpLink.click();
            await adminMenuLinks.admin_UsersAndSecurityUsersAndSecurity_AdminUserSearchPage.click();
            await adminUserSearchPage.userSearchScreenUserSearchResultsLV.clickOnCell(0, 1);
            await userDetailScreen.userDetailPageUserDetailScreenUserDetail_RolesCardTab.click();
        }
    }

    async searchAddPermission(permission){
        let nextButton = await roleDetailScreen.roleDetailPageRoleDetailScreenRoleDetailDVRolePrivilegesLV_ListPagingnext.component;
        let permissionChecker = await roleDetailScreen.roleDetailPageRoleDetailScreenRoleDetailDVRolePrivilegesLV.component.find('div[id$=-Permission]').find('.gw-label');
        if((await permissionChecker.withExactText(permission).exists == false)){
            if (await nextButton.withAttribute('aria-disabled', 'false').exists == true) {
                await t.click(nextButton);
                await this.searchPermission(permission);
                if(await nextButton.withAttribute('aria-disabled', 'true').exists){
                    this.editAddPermission();
                }
            }
        }else  {
            console.log(`the ${permission} was found`);
        }
    }

    async signOff(){
        let tabBarSettings = PcfComponent('#gw-TabBarWidget--settings');
        await t.click(tabBarSettings.component)
            .hover(tabBarSettings.component.find('.gw-subMenu').find('div[id$=-LogoutTabBarLink]'))
            .click(tabBarSettings.component.find('.gw-subMenu').find('div[id$=-LogoutTabBarLink]'));
    }

    async searchUser(user){
        console.log(user);
        await t.click(adminTabBar.tabBarAdminTab.component.find('.gw-action--expand-button'));
        await t.hover(adminTabBar.adminTabAdmin_UsersAndSecurity.component);
        await t.hover(adminTabBar.adminTabAdmin_UsersAndSecurity.component.find('.gw-label').withExactText("Users"));
        await t.click(adminTabBar.adminTabAdmin_UsersAndSecurity.component.find('.gw-label').withExactText("Users"));
        await adminUserSearchPage.userSearchDVUsername.setValue(user);
        await t.pressKey('enter');
    }

    async editAddPermission(){
        await roleDetailScreen.roleDetailPageRoleDetailScreenEdit.click();
        await roleDetailScreen.roleDetailPageRoleDetailScreenRoleDetailDVRolePrivilegesLV_tbAdd.click();
        let permissionCellCounter = await roleDetailScreen.roleDetailPageRoleDetailScreenRoleDetailDVRolePrivilegesLV.rowCount() - 1;
        let permissionDropdown = PcfComponent(`#RoleDetailPage-RoleDetailScreen-RoleDetailDV-RolePrivilegesLV-${permissionCellCounter}-Permission`);
        await t.click(permissionDropdown.component);
        await t.click(permissionDropdown.component.find('select').find('option').withExactText(permission));
        await roleDetailScreen.roleDetailPageRoleDetailScreenUpdate.click();
    }
}