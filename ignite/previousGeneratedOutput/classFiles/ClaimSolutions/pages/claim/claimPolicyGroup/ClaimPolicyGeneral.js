import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ClaimPolicyGeneral {
	claimPolicyGeneralScreenCancel = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-Cancel');
	claimPolicyGeneralScreenClaimPolicyGeneral_EditButton = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton');
	claimPolicyGeneralScreenClaimPolicyGeneral_EditButton2 = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton2');
	claimPolicyGeneralScreenClaimPolicyGeneral_EditButton4 = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton4');
	claimPolicyGeneralScreenClaimPolicyGeneral_EditButton5 = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton5');
	claimPolicyGeneral_EditButton5EditFullPolicy = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton5-EditFullPolicy');
	claimPolicyGeneral_EditButton5EditInternalOnly = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_EditButton5-EditInternalOnly');
	claimPolicyGeneralScreenClaimPolicyGeneral_RefreshPolicyButton = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_RefreshPolicyButton');
	claimPolicyGeneralScreenClaimPolicyGeneral_SelectPolicyButton = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ClaimPolicyGeneral_SelectPolicyButton');
	claimPolicyGeneralScreenEdit = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-Edit');
	claimPolicyCovTermsCVClaimPolicyCovTermsLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV');
	claimPolicyCovTermsLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Add');
	claimPolicyCovTermsLV_tbAddCovTerm = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-AddCovTerm');
	claimPolicyCovTermsLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-ClaimPolicyCovTermsCV-ClaimPolicyCovTermsLV_tb-Remove');
	claimPolicyCovTermsCVCovTermsTab = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-ClaimPolicyCovTermsCV-CovTermsTab');
	policyCoverageListDetailEditableAutoPolicyCoveragesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableAutoPolicyCoveragesLV');
	editableAutoPolicyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableAutoPolicyCoveragesLV_tb-Add');
	editableAutoPolicyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableAutoPolicyCoveragesLV_tb-Remove');
	policyGeneralDVAccountName = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-AccountName');
	policyGeneralDVAccountNumber = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-AccountNumber');
	policyGeneralDVAgent_Name = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name');
	agent_NameClaimNewContactPickerMenuItemSet = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewCompany = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewCompany');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegal = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Adjudicator = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Adjudicator');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Attorney = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Attorney');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_LawFirm = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_LawFirm');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_NewLegalVenue = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_NewLegalVenue');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoRepairShop = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoRepairShop');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoTowingAgcy = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoTowingAgcy');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_CompanyVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_CompanyVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_Doctor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_Doctor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVAgent_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_MedicalCareOrg = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_MedicalCareOrg');
	agent_NameMenuItem_Search = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-MenuItem_Search');
	agent_NameMenuItem_ViewDetails = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Agent_Name-MenuItem_ViewDetails');
	policyGeneralDVCancellationDate = PcfDateValueInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-CancellationDate');
	policyGeneralDVCurrency = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Currency');
	policyGeneralDVCustomerServiceTierRange = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-CustomerServiceTierRange');
	policyGeneralDVDBA = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA');
	dBAClaimNewContactPickerMenuItemSet = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewCompany = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewCompany');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegal = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Adjudicator = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Adjudicator');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Attorney = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Attorney');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_LawFirm = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_LawFirm');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_NewLegalVenue = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_NewLegalVenue');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoRepairShop = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoRepairShop');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoTowingAgcy = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoTowingAgcy');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_CompanyVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_CompanyVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_Doctor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_Doctor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVDBAClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_MedicalCareOrg = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_MedicalCareOrg');
	dBAMenuItem_Search = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-MenuItem_Search');
	dBAMenuItem_ViewDetails = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-DBA-MenuItem_ViewDetails');
	policyGeneralDVEditableAdditionalInsuredLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableAdditionalInsuredLV');
	editableAdditionalInsuredLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableAdditionalInsuredLV_tb-Add');
	editableAdditionalInsuredLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableAdditionalInsuredLV_tb-Remove');
	policyGeneralDVEditableExcludedPartiesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableExcludedPartiesLV');
	editableExcludedPartiesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableExcludedPartiesLV_tb-Add');
	editableExcludedPartiesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EditableExcludedPartiesLV_tb-Remove');
	policyGeneralDVEffectiveDate = PcfDateValueInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-EffectiveDate');
	policyGeneralDVExpirationDate = PcfDateValueInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-ExpirationDate');
	policyGeneralDVInsured_Address = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Address');
	policyGeneralDVInsured_Name = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name');
	insured_NameClaimNewContactPickerMenuItemSet = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewCompany = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewCompany');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegal = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Adjudicator = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Adjudicator');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Attorney = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Attorney');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_LawFirm = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_LawFirm');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_NewLegalVenue = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_NewLegalVenue');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoRepairShop = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoRepairShop');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoTowingAgcy = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoTowingAgcy');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_CompanyVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_CompanyVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_Doctor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_Doctor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVInsured_NameClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_MedicalCareOrg = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_MedicalCareOrg');
	insured_NameMenuItem_Search = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-MenuItem_Search');
	insured_NameMenuItem_ViewDetails = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Insured_Name-MenuItem_ViewDetails');
	policyGeneralDVOrigEffectiveDate = PcfDateValueInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-OrigEffectiveDate');
	policyGeneralDVOther_AssignedRisk = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Other_AssignedRisk');
	policyGeneralDVOther_ForeignCoverage = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Other_ForeignCoverage');
	policyGeneralDVOther_Notes = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Other_Notes');
	policyGeneralDVOther_OtherFinancialInterests = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Other_OtherFinancialInterests');
	policyGeneralDVOther_VerifiedPolicy = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Other_VerifiedPolicy');
	policyGeneralDVPolicyHolder = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder');
	policyHolderClaimNewContactPickerMenuItemSet = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewCompany = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewCompany');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegal = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Adjudicator = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Adjudicator');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_Attorney = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_Attorney');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_LawFirm = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_LawFirm');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewLegalNewContactPickerMenuItemSet_NewLegalVenue = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewLegal-NewContactPickerMenuItemSet_NewLegalVenue');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewPerson');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoRepairShop = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoRepairShop');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_AutoTowingAgcy = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_AutoTowingAgcy');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_CompanyVendor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_CompanyVendor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_Doctor = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_Doctor');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVPolicyHolderClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewVendorNewContactPickerMenuItemSet_MedicalCareOrg = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-ClaimNewContactPickerMenuItemSet-NewContactPickerMenuItemSet_NewVendor-NewContactPickerMenuItemSet_MedicalCareOrg');
	policyHolderMenuItem_Search = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-MenuItem_Search');
	policyHolderMenuItem_ViewDetails = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyHolder-MenuItem_ViewDetails');
	policyGeneralDVPolicyNumber = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-PolicyNumber');
	policyGeneralDVProducerCode = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-ProducerCode');
	policyGeneralDVStatus = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Status');
	policyGeneralDVType = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Type');
	policyGeneralDVUnderwriter_Name = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriter_Name');
	underwriter_NameClaimNewPersonOnlyPickerMenuItemSet = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriter_Name-ClaimNewPersonOnlyPickerMenuItemSet');
	claimPolicyGeneralClaimPolicyGeneralScreenPolicyGeneralPanelSetPolicyGeneralDVUnderwriter_NameClaimNewPersonOnlyPickerMenuItemSetClaimNewPersonOnlyPickerMenuItemSet_NewPersonMenuItem = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriter_Name-ClaimNewPersonOnlyPickerMenuItemSet-ClaimNewPersonOnlyPickerMenuItemSet_NewPersonMenuItem');
	underwriter_NameMenuItem_Search = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriter_Name-MenuItem_Search');
	underwriter_NameMenuItem_ViewDetails = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriter_Name-MenuItem_ViewDetails');
	policyGeneralDVUnderwriting_Company = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriting_Company');
	policyGeneralDVUnderwriting_Group = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-Underwriting_Group');
	policyCoverageListDetailEditableGeneralLiabilityPolicyCoveragesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableGeneralLiabilityPolicyCoveragesLV');
	editableGeneralLiabilityPolicyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableGeneralLiabilityPolicyCoveragesLV_tb-Add');
	editableGeneralLiabilityPolicyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableGeneralLiabilityPolicyCoveragesLV_tb-Remove');
	policyCoverageListDetailEditablePropertyPolicyCoveragesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditablePropertyPolicyCoveragesLV');
	editablePropertyPolicyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditablePropertyPolicyCoveragesLV_tb-Add');
	editablePropertyPolicyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditablePropertyPolicyCoveragesLV_tb-Remove');
	policyCoverageListDetailEditableTravelPolicyCoveragesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableTravelPolicyCoveragesLV');
	editableTravelPolicyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableTravelPolicyCoveragesLV_tb-Add');
	editableTravelPolicyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableTravelPolicyCoveragesLV_tb-Remove');
	policyCoverageListDetailEditableWorkersCompPolicyCoveragesLV = PcfListView('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableWorkersCompPolicyCoveragesLV');
	editableWorkersCompPolicyCoveragesLV_tbAdd = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableWorkersCompPolicyCoveragesLV_tb-Add');
	editableWorkersCompPolicyCoveragesLV_tbRemove = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyCoverageListDetail-EditableWorkersCompPolicyCoveragesLV_tb-Remove');
	policyGeneralDVWorkersComp_InsuredSicCode = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-WorkersComp_InsuredSicCode');
	policyGeneralDVWorkersComp_OtherStates = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-WorkersComp_OtherStates');
	policyGeneralDVWorkersComp_PolicyRatingPlan = PcfSelectInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-WorkersComp_PolicyRatingPlan');
	policyGeneralDVWorkersComp_ReturnToWorkPrgm = PcfComponent('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-WorkersComp_ReturnToWorkPrgm');
	policyGeneralDVWorkersComp_States = PcfTextInput('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-PolicyGeneralPanelSet-PolicyGeneralDV-WorkersComp_States');
	claimPolicyGeneralScreenUpdate = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-Update');
	claimPolicyGeneralScreenViewInPC = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-ViewInPC');
	claimPolicyGeneralScreen_msgs = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneralScreen-_msgs');
	claimPolicyGeneralClaimPolicyGeneral_UpLink = PcfButton('#ClaimPolicyGeneral-ClaimPolicyGeneral_UpLink');
	claimPolicyGeneral_Paging = PcfButton('#ClaimPolicyGeneral-_Paging');
	claimPolicyGeneral__crumb__ = PcfComponent('#ClaimPolicyGeneral-__crumb__');
}
