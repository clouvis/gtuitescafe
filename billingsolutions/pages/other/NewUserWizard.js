import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewUserWizard {
	newUserWizardAuthorityLimitStep = PcfButton('#NewUserWizard-AuthorityLimitStep');
	authorityLimitsEditableAuthorityLimitsLV = PcfListView('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-UserAuthorityLimitsDV-AuthorityLimits-EditableAuthorityLimitsLV');
	editableAuthorityLimitsLV_tbAdd = PcfButton('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-UserAuthorityLimitsDV-AuthorityLimits-EditableAuthorityLimitsLV_tb-Add');
	editableAuthorityLimitsLV_tbRemove = PcfButton('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-UserAuthorityLimitsDV-AuthorityLimits-EditableAuthorityLimitsLV_tb-Remove');
	userAuthorityLimitsDVAuthorityLimitsProfile = PcfSelectInput('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-UserAuthorityLimitsDV-AuthorityLimitsProfile');
	userAuthorityLimitsDVDescription = PcfTextInput('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-UserAuthorityLimitsDV-Description');
	newUserWizardAuthorityLimitStepScreen_msgs = PcfButton('#NewUserWizard-NewUserWizardAuthorityLimitStepScreen-_msgs');
	newUserWizardBasicsStep = PcfButton('#NewUserWizard-BasicsStep');
	newUserWizardBasicStepScreenAdd = PcfButton('#NewUserWizard-NewUserWizardBasicStepScreen-Add');
	newUserWizardBasicStepScreenRemove = PcfButton('#NewUserWizard-NewUserWizardBasicStepScreen-Remove');
	userDetailDVAccountLocked = PcfComponent('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-AccountLocked');
	userDetailDVActive = PcfComponent('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-Active');
	userDetailDVConfirmInputWidget = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-ConfirmInputWidget');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetFirstName = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-FirstName');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-FirstNameKanji');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetLastName = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-LastName');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-LastNameKanji');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetNameSummary = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-NameSummary');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetMiddleName = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-MiddleName');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetParticle = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-Particle');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetPrefix = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-Prefix');
	newUserWizardNewUserWizardBasicStepScreenUserDetailDVGlobalPersonNameInputSetSuffix = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-GlobalPersonNameInputSet-Suffix');
	userDetailDVOldPasswordInputWidget = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-OldPasswordInputWidget');
	userDetailDVPasswordInputWidget = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-PasswordInputWidget');
	userDetailDVSessionTimeout = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-SessionTimeout');
	userPreferencesInputSetDefaultCountry = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserPreferencesInputSet-DefaultCountry');
	userPreferencesInputSetDefaultPhoneCountry = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserPreferencesInputSet-DefaultPhoneCountry');
	userPreferencesInputSetLanguage = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserPreferencesInputSet-Language');
	userPreferencesInputSetRegionalFormats = PcfSelectInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserPreferencesInputSet-RegionalFormats');
	userDetailDVUserRolesLV = PcfListView('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserRolesLV');
	userRolesLV_tbAdd = PcfButton('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserRolesLV_tb-Add');
	userRolesLV_tbRemove = PcfButton('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-UserRolesLV_tb-Remove');
	userDetailDVUsername = PcfTextInput('#NewUserWizard-NewUserWizardBasicStepScreen-UserDetailDV-Username');
	newUserWizardBasicStepScreen_msgs = PcfButton('#NewUserWizard-NewUserWizardBasicStepScreen-_msgs');
	newUserWizardCancel = PcfButton('#NewUserWizard-Cancel');
	newUserWizardFinish = PcfButton('#NewUserWizard-Finish');
	newUserWizardNewUserWizard_UpLink = PcfButton('#NewUserWizard-NewUserWizard_UpLink');
	newUserWizardNext = PcfButton('#NewUserWizard-Next');
	newUserWizardPrev = PcfButton('#NewUserWizard-Prev');
	newUserWizardProfileStep = PcfButton('#NewUserWizard-ProfileStep');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVCellPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-CellPhone-GlobalPhoneInputSet-CountryCode');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVCellPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-CellPhone-GlobalPhoneInputSet-Extension');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVCellPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVCellPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-CellPhone-GlobalPhoneInputSet-PhoneDisplay');
	userProfileDVEmailAddress1 = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-EmailAddress1');
	userProfileDVEmailAddress2 = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-EmailAddress2');
	userProfileDVEmployeeNumber = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-EmployeeNumber');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVFaxPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-FaxPhone-GlobalPhoneInputSet-CountryCode');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVFaxPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-FaxPhone-GlobalPhoneInputSet-Extension');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVFaxPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-FaxPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVFaxPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-FaxPhone-GlobalPhoneInputSet-PhoneDisplay');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVHomePhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-HomePhone-GlobalPhoneInputSet-CountryCode');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVHomePhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-HomePhone-GlobalPhoneInputSet-Extension');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVHomePhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVHomePhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-HomePhone-GlobalPhoneInputSet-PhoneDisplay');
	userProfileDVPrimaryPhone = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-PrimaryPhone');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVWorkPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-WorkPhone-GlobalPhoneInputSet-CountryCode');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVWorkPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-WorkPhone-GlobalPhoneInputSet-Extension');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVWorkPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-WorkPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVWorkPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-WorkPhone-GlobalPhoneInputSet-PhoneDisplay');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-City');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-Country');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-State');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	newUserWizardNewUserWizardProfileStepScreenUserProfileDVglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#NewUserWizard-NewUserWizardProfileStepScreen-UserProfileDV-globalAddressContainer-GlobalAddressInputSet-County');
	newUserWizardProfileStepScreen_msgs = PcfButton('#NewUserWizard-NewUserWizardProfileStepScreen-_msgs');
	newUserWizard_Paging = PcfButton('#NewUserWizard-_Paging');
	newUserWizard__crumb__ = PcfComponent('#NewUserWizard-__crumb__');
}