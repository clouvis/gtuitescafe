import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewFormPattern {
	formPatternDetailScreenCancel = PcfButton('#NewFormPattern-FormPatternDetailScreen-Cancel');
	formPatternDetailScreenEdit = PcfButton('#NewFormPattern-FormPatternDetailScreen-Edit');
	formPatternDetailCVBasicsDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-BasicsDetailCardTab');
	formPatternDetail_BasicsDVCode = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-Code');
	formPatternDetail_BasicsDVEdition = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-Edition');
	formPatternDetail_BasicsDVEndorsementNumbered = PcfComponent('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-EndorsementNumbered');
	formPatternDetail_BasicsDVInferenceTime = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-InferenceTime');
	formPatternDetail_BasicsDVName = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-Name');
	formPatternDetail_BasicsDVNumber = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-Number');
	formPatternDetail_BasicsDVPriority = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-Priority');
	formPatternDetail_BasicsDVRefCode = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_BasicsDV-RefCode');
	formPatternDetail_InferencePanelSetCustomInferenceLabel = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-CustomInferenceLabel');
	formPatternCoveragePartTypesPanelSetFormPatternCoveragePartTypesLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-FormPatternCoveragePartTypesPanelSet-FormPatternCoveragePartTypesLV');
	formPatternDetail_InferencePanelSetGenericInferenceClass = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClass');
	formPatternAdditionalInsuredValuesPanelSetFormPatternAdditionalInsuredLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInsuredValuesPanelSet-FormPatternAdditionalInsuredLV');
	formPatternAdditionalInsuredLV_tbAddFormPatternAdditionalInsuredValue = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInsuredValuesPanelSet-FormPatternAdditionalInsuredLV_tb-AddFormPatternAdditionalInsuredValue');
	formPatternAdditionalInsuredLV_tbRemoveFormPatternAdditionalInsured = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInsuredValuesPanelSet-FormPatternAdditionalInsuredLV_tb-RemoveFormPatternAdditionalInsured');
	formPatternAdditionalInterestValuesPanelSetFormPatternAdditionalInterestLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInterestValuesPanelSet-FormPatternAdditionalInterestLV');
	formPatternAdditionalInterestLV_tbAddFormPatternAdditionalInterestValue = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInterestValuesPanelSet-FormPatternAdditionalInterestLV_tb-AddFormPatternAdditionalInterestValue');
	formPatternAdditionalInterestLV_tbRemoveFormPatternAdditionalInterest = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternAdditionalInterestValuesPanelSet-FormPatternAdditionalInterestLV_tb-RemoveFormPatternAdditionalInterest');
	clausePatternSelectionSelectClausePatternSelection = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-ClausePatternSelection-SelectClausePatternSelection');
	genericInferenceClassPanelSetFormPatternCovTermsLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermsLV');
	formPatternCovTermsLV_tbAddFormPatternCovTerm = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermsLV_tb-AddFormPatternCovTerm');
	addFormPatternCovTermFormPatternCovTermMore = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermsLV_tb-AddFormPatternCovTerm-FormPatternCovTermMore');
	formPatternCovTermsLV_tbRemoveFormPatternCovTerm = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermsLV_tb-RemoveFormPatternCovTerm');
	genericInferenceClassPanelSetFormPatternCoverablePropertyLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCoverablePropertyLV');
	formPatternCoverablePropertyLV_tbAddFormPatternCoverableProperty = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCoverablePropertyLV_tb-AddFormPatternCoverableProperty');
	addFormPatternCoverablePropertyFormPatternCoverablePropertyMore = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCoverablePropertyLV_tb-AddFormPatternCoverableProperty-FormPatternCoverablePropertyMore');
	formPatternCoverablePropertyLV_tbRemoveFormPatternCoverableProperty = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCoverablePropertyLV_tb-RemoveFormPatternCoverableProperty');
	genericInferenceClassPanelSetPatternExists = PcfComponent('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-PatternExists');
	genericInferenceClassPanelSetCovTermPatternSelection = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-CovTermPatternSelection');
	formPatternCovTermValuesPanelSetFormPatternCovTermValuesLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermValuesPanelSet-FormPatternCovTermValuesLV');
	formPatternCovTermValuesLV_tbAddFormPatternCovTermValue = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermValuesPanelSet-FormPatternCovTermValuesLV_tb-AddFormPatternCovTermValue');
	formPatternCovTermValuesLV_tbRemoveFormPatternCovTermValue = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-FormPatternCovTermValuesPanelSet-FormPatternCovTermValuesLV_tb-RemoveFormPatternCovTermValue');
	genericInferenceClassPanelSetSelectedCoverable = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-SelectedCoverable');
	genericInferenceClassPanelSetSelectedTypeKey = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-SelectedTypeKey');
	genericInferenceClassPanelSetSelectedTypeList = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-SelectedTypeList');
	genericInferenceClassPanelSetSelectionExistence = PcfComponent('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-GenericInferenceClassPanelSet-SelectionExistence');
	formPatternDetail_InferencePanelSetLinePattern = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_InferencePanelSet-LinePattern');
	formPatternDetailCVFormPatternDetail_JobsLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JobsLV');
	formPatternDetail_JobsLV_tbAddJob = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JobsLV_tb-AddJob');
	addJobAllIssuanceAndChangeJobs = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JobsLV_tb-AddJob-AllIssuanceAndChangeJobs');
	formPatternDetail_JobsLV_tbRemoveJob = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JobsLV_tb-RemoveJob');
	formPatternDetail_JurisdictionsDVGroupCode = PcfTextInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsDV-GroupCode');
	formPatternDetail_JurisdictionsDVUseInsteadOfForm = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsDV-UseInsteadOfForm');
	formPatternDetailCVFormPatternDetail_JurisdictionsLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsLV');
	formPatternDetail_JurisdictionsLV_tbAddLookup = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsLV_tb-AddLookup');
	formPatternDetail_JurisdictionsLV_tbDuplicateLookup = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsLV_tb-DuplicateLookup');
	formPatternDetail_JurisdictionsLV_tbRemoveLookup = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_JurisdictionsLV_tb-RemoveLookup');
	formPatternDetail_PolicyChangeDVReissueOnChange = PcfComponent('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_PolicyChangeDV-ReissueOnChange');
	formPatternDetail_PolicyChangeDVRemovalEndorsement = PcfComponent('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_PolicyChangeDV-RemovalEndorsement');
	formPatternDetail_PolicyChangeDVRemovalEndorsementFormNumber = PcfSelectInput('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_PolicyChangeDV-RemovalEndorsementFormNumber');
	formPatternDetailCVFormPatternDetail_ProductsLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_ProductsLV');
	formPatternDetail_ProductsLV_tbAddProduct = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_ProductsLV_tb-AddProduct');
	formPatternDetail_ProductsLV_tbRemoveProduct = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-FormPatternDetail_ProductsLV_tb-RemoveProduct');
	formPatternDetailCVInferenceDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-InferenceDetailCardTab');
	formPatternDetailCVJobsDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-JobsDetailCardTab');
	formPatternDetailCVJurisdictionsDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-JurisdictionsDetailCardTab');
	newFormPatternFormPatternDetailScreenFormPatternDetailCVLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-LocalizedValuesDV-LocalizedValuesLV');
	formPatternDetailCVPolicyChangeDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-PolicyChangeDetailCardTab');
	formPatternDetailCVProductsDetailCardTab = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailCV-ProductsDetailCardTab');
	formPatternDetailScreenFormPatternDetailScreen_DeleteButton = PcfButton('#NewFormPattern-FormPatternDetailScreen-FormPatternDetailScreen_DeleteButton');
	formPatternDetailScreenUpdate = PcfButton('#NewFormPattern-FormPatternDetailScreen-Update');
	formPatternDetailScreen_msgs = PcfButton('#NewFormPattern-FormPatternDetailScreen-_msgs');
	newFormPatternNewFormPattern_UpLink = PcfButton('#NewFormPattern-NewFormPattern_UpLink');
	newFormPattern_Paging = PcfButton('#NewFormPattern-_Paging');
	newFormPattern__crumb__ = PcfComponent('#NewFormPattern-__crumb__');
}
