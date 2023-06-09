import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewAgreementPopup {
	newAgreementPopupAgreementScreenAdjust = PcfButton('#NewAgreementPopup-AgreementScreen-Adjust');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetAmountOfCoverage = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-AmountOfCoverage');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetCededShare = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-CededShare');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetApplyOnlyToGrossRetention = PcfComponent('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-ApplyOnlyToGrossRetention');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetAttachmentPoint = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-AttachmentPoint');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetLimit = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-Limit');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetLimitIndexed = PcfCheckBox('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-LimitIndexed');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetattachmentIndexed = PcfCheckBox('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-attachmentIndexed');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetLines = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-Lines');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetMaxRetention = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-MaxRetention');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetStartLine = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-StartLine');
	newAgreementPopupAgreementScreenAgreementCoverageInputSetStopLine = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementCoverageInputSet-StopLine');
	newAgreementPopupAgreementScreenAgreementNumber = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementNumber');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetCalculateCededPremium = PcfComponent('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-CalculateCededPremium');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetComments = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-Comments');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetCountTowardTotalLimit = PcfComponent('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-CountTowardTotalLimit');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetGNPBasis = PcfSelectInput('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-GNPBasis');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetLossAttachBasis = PcfSelectInput('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-LossAttachBasis');
	newAgreementPopupAgreementScreenAgreementOtherTermsInputSetNotificationThresh = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementOtherTermsInputSet-NotificationThresh');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetAdjustFlatPremium = PcfButton('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-AdjustFlatPremium');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetCededPremium = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-CededPremium');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetMarkup = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-Markup');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetSetFlatPremium = PcfButton('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-SetFlatPremium');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetTotalCost = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-TotalCost');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetAdjustCedingRates = PcfButton('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-AdjustCedingRates');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetCedingRate = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-CedingRate');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetDepositPmtSchedule = PcfSelectInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-DepositPmtSchedule');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetMinDeposit = PcfTextInput('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-MinDeposit');
	newAgreementPopupAgreementScreenAgreementPAndCInputSetSetCedingRate = PcfButton('#NewAgreementPopup-AgreementScreen-AgreementPAndCInputSet-SetCedingRate');
	newAgreementPopupAgreementScreenAppliesToTab = PcfButton('#NewAgreementPopup-AgreementScreen-AppliesToTab');
	newAgreementPopupAgreementScreenCancel = PcfButton('#NewAgreementPopup-AgreementScreen-Cancel');
	newAgreementPopupAgreementScreenChangeBrokerContactButton = PcfButton('#NewAgreementPopup-AgreementScreen-ChangeBrokerContactButton');
	newAgreementPopupAgreementScreenChangeBrokerContactButtonBrokerSearch = PcfButton('#NewAgreementPopup-AgreementScreen-ChangeBrokerContactButton-BrokerSearch');
	newAgreementPopupAgreementScreenChangeBrokerContactButtonNewCompany = PcfButton('#NewAgreementPopup-AgreementScreen-ChangeBrokerContactButton-NewCompany');
	newAgreementPopupAgreementScreenCloneButton = PcfButton('#NewAgreementPopup-AgreementScreen-CloneButton');
	newAgreementPopupAgreementScreenCommission = PcfTextInput('#NewAgreementPopup-AgreementScreen-Commission');
	newAgreementPopupAgreementScreenCurrency = PcfSelectInput('#NewAgreementPopup-AgreementScreen-Currency');
	newAgreementPopupAgreementScreenDeleteButton = PcfButton('#NewAgreementPopup-AgreementScreen-DeleteButton');
	newAgreementPopupAgreementScreenEdit = PcfButton('#NewAgreementPopup-AgreementScreen-Edit');
	newAgreementPopupAgreementScreenEffDate = PcfDateValueInput('#NewAgreementPopup-AgreementScreen-EffDate');
	newAgreementPopupAgreementScreenExpDate = PcfDateValueInput('#NewAgreementPopup-AgreementScreen-ExpDate');
	newAgreementPopupAgreementScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewAgreementPopup-AgreementScreen-LocalizedValuesDV-LocalizedValuesLV');
	newAgreementPopupAgreementScreenMakeActiveButton = PcfButton('#NewAgreementPopup-AgreementScreen-MakeActiveButton');
	newAgreementPopupAgreementScreenName = PcfTextInput('#NewAgreementPopup-AgreementScreen-Name');
	newAgreementPopupAgreementScreenParticipantsLV = PcfListView('#NewAgreementPopup-AgreementScreen-ParticipantsLV');
	newAgreementPopupAgreementScreenParticipantsLV_tbAdd = PcfButton('#NewAgreementPopup-AgreementScreen-ParticipantsLV_tb-Add');
	newAgreementPopupAgreementScreenParticipantsLV_tbAddNewCompany = PcfButton('#NewAgreementPopup-AgreementScreen-ParticipantsLV_tb-Add-NewCompany');
	newAgreementPopupAgreementScreenParticipantsLV_tbAddParticipantSearch = PcfButton('#NewAgreementPopup-AgreementScreen-ParticipantsLV_tb-Add-ParticipantSearch');
	newAgreementPopupAgreementScreenParticipantsLV_tbRemove = PcfButton('#NewAgreementPopup-AgreementScreen-ParticipantsLV_tb-Remove');
	newAgreementPopupAgreementScreenParticipantsTab = PcfButton('#NewAgreementPopup-AgreementScreen-ParticipantsTab');
	newAgreementPopupAgreementScreenPayableBasis = PcfSelectInput('#NewAgreementPopup-AgreementScreen-PayableBasis');
	newAgreementPopupAgreementScreenRICoverageGroupsPanelSetTEMP_0_LV = PcfListView('#NewAgreementPopup-AgreementScreen-RICoverageGroupsPanelSet-TEMP_0_LV');
	newAgreementPopupAgreementScreenRICoverageGroupsPanelSetTEMP_0_LV_tbAdd = PcfButton('#NewAgreementPopup-AgreementScreen-RICoverageGroupsPanelSet-TEMP_0_LV_tb-Add');
	newAgreementPopupAgreementScreenRICoverageGroupsPanelSetTEMP_0_LV_tbRemove = PcfButton('#NewAgreementPopup-AgreementScreen-RICoverageGroupsPanelSet-TEMP_0_LV_tb-Remove');
	newAgreementPopupAgreementScreenStatus = PcfSelectInput('#NewAgreementPopup-AgreementScreen-Status');
	newAgreementPopupAgreementScreenSubtype = PcfSelectInput('#NewAgreementPopup-AgreementScreen-Subtype');
	newAgreementPopupAgreementScreenUnAdjust = PcfButton('#NewAgreementPopup-AgreementScreen-UnAdjust');
	newAgreementPopupAgreementScreenUpdate = PcfButton('#NewAgreementPopup-AgreementScreen-Update');
	newAgreementPopupAgreementScreenValidateButton = PcfButton('#NewAgreementPopup-AgreementScreen-ValidateButton');
	newAgreementPopupAgreementScreen_msgs = PcfButton('#NewAgreementPopup-AgreementScreen-_msgs');
	newAgreementPopupNewAgreementPopup_UpLink = PcfButton('#NewAgreementPopup-NewAgreementPopup_UpLink');
	newAgreementPopup_Paging = PcfButton('#NewAgreementPopup-_Paging');
	newAgreementPopup__crumb__ = PcfComponent('#NewAgreementPopup-__crumb__');
}
