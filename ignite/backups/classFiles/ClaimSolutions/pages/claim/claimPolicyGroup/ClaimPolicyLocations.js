import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class ClaimPolicyLocations {
	claimPolicyLocationsScreenAdd = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-Add');
	claimPolicyLocationsScreenCancel = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-Cancel');
	claimPolicyLocationsScreenClaimPolicyLocations_AddMoreLocationsButton = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-ClaimPolicyLocations_AddMoreLocationsButton');
	claimPolicyLocationsScreenEdit = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-Edit');
	policyLocationLDVLocationDetailCardTab = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-LocationDetailCardTab');
	policyLocationRiskDetailPanelSetAdd = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-Add');
	policyLocationRiskDetailPanelSetAddLocationRisk = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-AddLocationRisk');
	policyLocationRiskDetailPanelSetAddMiscLocationRisk = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-AddMiscLocationRisk');
	policyLocationRiskDetailPanelSetLocationBasedRULV = PcfListView('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationBasedRULV');
	claimPolicyLocationsClaimPolicyLocationsScreenPolicyLocationLDVPolicyLocationRiskDetailPanelSetLocationCoverageListDetailClaimPolicyCovTermsCVClaimPolicyCovTermsLV = PcfListView('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV');
	claimPolicyLocationsClaimPolicyLocationsScreenPolicyLocationLDVPolicyLocationRiskDetailPanelSetLocationCoverageListDetailClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbAdd = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Add');
	claimPolicyLocationsClaimPolicyLocationsScreenPolicyLocationLDVPolicyLocationRiskDetailPanelSetLocationCoverageListDetailClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbAddCovTerm = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-AddCovTerm');
	claimPolicyLocationsClaimPolicyLocationsScreenPolicyLocationLDVPolicyLocationRiskDetailPanelSetLocationCoverageListDetailClaimPolicyCovTermsCVClaimPolicyCovTermsLV_tbRemove = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Remove');
	claimPolicyLocationsClaimPolicyLocationsScreenPolicyLocationLDVPolicyLocationRiskDetailPanelSetLocationCoverageListDetailClaimPolicyCovTermsCVCovTermsTab = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-ClaimPolicyCovTermsCV-CovTermsTab');
	locationCoverageListDetailEditablePropertyCoveragesLV = PcfListView('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-EditablePropertyCoveragesLV');
	editablePropertyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-EditablePropertyCoveragesLV_tb-Add');
	editablePropertyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoverageListDetail-EditablePropertyCoveragesLV_tb-Remove');
	policyLocationRiskDetailPanelSetLocationCoveragesTab = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-LocationCoveragesTab');
	policyLocationRUDetailsDVAddBuilding = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-AddBuilding');
	policyLocationRUDetailsDVBuildingNotes = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-BuildingNotes');
	policyLocationRUDetailsDVBuildingNumber = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-BuildingNumber');
	classCodeInputSetCode = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-ClassCodeInputGroup-ClassCodeInputSet-Code');
	classCodeInputSetComments = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-ClassCodeInputGroup-ClassCodeInputSet-Comments');
	classCodeInputSetDescription = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-ClassCodeInputGroup-ClassCodeInputSet-Description');
	classCodeInputGroup_checkbox = PcfCheckBox('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-ClassCodeInputGroup-_checkbox');
	policyLocationRUDetailsDVEditableRULienholdersLV = PcfListView('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-EditableRULienholdersLV');
	editableRULienholdersLV_tbAdd = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-EditableRULienholdersLV_tb-Add');
	editableRULienholdersLV_tbRemove = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-EditableRULienholdersLV_tb-Remove');
	policyLocationRUDetailsDVMiscRUType = PcfSelectInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-MiscRUType');
	policyLocationRUDetailsDVRUCoverageForm = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-RUCoverageForm');
	policyLocationRUDetailsDVRUCoveragePartTypes = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-RUCoveragePartTypes');
	policyLocationRUDetailsDVRUDescription = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-RUDescription');
	policyLocationRUDetailsDVRUNumber = PcfTextInput('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-RUNumber');
	policyLocationRUDetailsDVRemoveBuilding = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-PolicyLocationRUDetailsDV-RemoveBuilding');
	policyLocationRiskDetailPanelSetRemove = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-Remove');
	policyLocationRiskDetailPanelSetRiskDetailTab = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationRiskDetailPanelSet-RiskDetailTab');
	policyLocationLDVPolicyLocationsLV = PcfListView('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-PolicyLocationLDV-PolicyLocationsLV');
	claimPolicyLocationsScreenRemove = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-Remove');
	claimPolicyLocationsScreenUpdate = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-Update');
	claimPolicyLocationsScreen_msgs = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocationsScreen-_msgs');
	claimPolicyLocationsClaimPolicyLocations_UpLink = PcfButton('#ClaimPolicyLocations-ClaimPolicyLocations_UpLink');
	claimPolicyLocations_Paging = PcfButton('#ClaimPolicyLocations-_Paging');
	claimPolicyLocations__crumb__ = PcfComponent('#ClaimPolicyLocations-__crumb__');
}