'use strict'
import { PcfButton, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import world from "../../utils/world";

export class FNOLScreen {
    
    tabBarClaimTab = PcfComponent('#TabBar-ClaimTab');
    tabBarClaimTabClaimTabFNOLWizard = PcfButton('#TabBar-ClaimTab-ClaimTab_FNOLWizard');
    fNOLWizardpolicyNumber = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-policyNumber');
    fNOLWizardClaim_LossDate = PcfTextInput('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Claim_LossDate');
    fNOLWizardFNOLWizard_FindPolicyScreenFNOLWizardFindPolicyPanelSetSearch = PcfButton('#FNOLWizard-FNOLWizard_FindPolicyScreen-FNOLWizardFindPolicyPanelSet-Search');
    fNOLWizard_Next = PcfButton('#FNOLWizard-Next');
    fNOLWizard_Finish = PcfButton('#FNOLWizard-Finish');
    fNOLWizardReportedBy_Name = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-ReportedBy_Name');
    fNOLWizardReportedByType = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-BasicInfoDetailViewPanelDV-Claim_ReportedByType');
    fNOLWizardNewLossDetailsHomeownersDVDescription = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsPanel-FNOLWizard_NewLossDetailsPanelSet-NewLossDetailsHomeownersDV-Description');
    fNOLWizardNewLossDetailsHomeownersDVClaim_LossCause = PcfSelectInput('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsPanel-FNOLWizard_NewLossDetailsPanelSet-NewLossDetailsHomeownersDV-Claim_LossCause');
    newClaimSavedLink = PcfComponent('#NewClaimSaved-NewClaimSavedScreen-NewClaimSavedDV-GoToClaim');
    claimMenuLinks_ClaimStatus = PcfButton('#Claim-MenuLinks-Claim_ClaimSummaryGroup-ClaimSummaryGroup_ClaimStatus');
    claimStatus = PcfComponent('#ClaimStatus-ClaimStatus');
    fNOLWizardClaimInfoBarInsured = PcfComponent('#FNOLWizard-ClaimInfoBar-Insured');
    fNOLWizardFullWizardStepSetFNOLWizard_BasicInfoScreenPanelRowVehiclePanelColumn = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_BasicInfoScreen-PanelRow-VehiclePanelColumn');
    fNOLWizardNewLossDetailsScreenLossDetailsAddressDVDescription = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_NewLossDetailsScreen-LossDetailsAddressDV-Description');
    fNOLWizardFullWizardStepSetFNOLWizard_ServicesScreen = PcfComponent('#FNOLWizard-FullWizardStepSet-FNOLWizard_ServicesScreen');

    
    async generateDate(){
        let today = new Date();
        var month = today.getMonth()+1;
        var day = today.getDate();
        var year = today.getFullYear();

        if(month<10){
            month =  "0" + month;
        }
        if(day<10){
            day =  "0" + day;
        }
        let date = month + '/' + day + '/' + year;
        world.claim.lossDate = date;
    }
}