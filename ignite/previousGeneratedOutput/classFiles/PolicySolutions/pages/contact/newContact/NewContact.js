import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewContact {
	newContactCancel = PcfButton('#NewContact-Cancel');
	newContactCheckForDuplicates = PcfButton('#NewContact-CheckForDuplicates');
	contactCVAddressesCardTab = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesCardTab');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailCardTab = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailCardTab');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVAddressType = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-AddressType');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVDescription = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-Description');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVLinkedAddressInputSetLinkAddressMenuEditAddress = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-LinkedAddressInputSet-LinkAddressMenu-EditAddress');
	newContactContactPanelSetContactCVAddressesPanelSetAddressDetailDVValidUntil = PcfDateValueInput('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressDetailDV-ValidUntil');
	newContactContactPanelSetContactCVAddressesPanelSetAddressToolsCardTab = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressToolsCardTab');
	newContactContactPanelSetContactCVAddressesPanelSetAddressesLV = PcfListView('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV');
	newContactContactPanelSetContactCVAddressesPanelSetAddressesLV_tbAdd = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV_tb-Add');
	newContactContactPanelSetContactCVAddressesPanelSetAddressesLV_tbRemove = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-AddressesLV_tb-Remove');
	newContactContactPanelSetContactCVAddressesPanelSetMergeAddresses = PcfButton('#NewContact-ContactPanelSet-ContactCV-AddressesPanelSet-MergeAddresses');
	contactDVAddressDescription = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressDescription');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine1Kanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1Kanji');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine2Kanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine2Kanji');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressSummary = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressSummary');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCity = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityKanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CityKanji');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCountry = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-Country');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCode = PcfButton('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetPostalCodeAutoFillIcon = PcfButton('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode-AutoFillIcon');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetState = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetAddressLine3 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine3');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEX = PcfCheckBox('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEX');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCEDEXBureau = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-CEDEXBureau');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCityAutoFillIcon = PcfButton('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City-AutoFillIcon');
	newContactContactPanelSetContactCVContactDVAddressInputSetglobalAddressContainerGlobalAddressInputSetCounty = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-County');
	contactDVAddressType = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-AddressType');
	newContactContactPanelSetContactCVContactDVContactCurrencyContactCurrencyInputSetPreferredSettlementCurrency = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactCurrency-ContactCurrencyInputSet-PreferredSettlementCurrency');
	newContactContactPanelSetContactCVContactDVContactNameInputSetEmailAddress1 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-EmailAddress1');
	newContactContactPanelSetContactCVContactDVContactNameInputSetEmailAddress2 = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-EmailAddress2');
	newContactContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-CountryCode');
	newContactContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-Extension');
	newContactContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactContactPanelSetContactCVContactDVContactNameInputSetFaxPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-FaxPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetName = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-Name');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetNameKanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-NameKanji');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalContactNameInputSetNameSummary = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalContactNameInputSet-NameSummary');
	newContactContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-CountryCode');
	newContactContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-Extension');
	newContactContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactContactPanelSetContactCVContactDVContactNameInputSetWorkPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-WorkPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-CountryCode');
	newContactContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-Extension');
	newContactContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactContactPanelSetContactCVContactDVContactNameInputSetCellPhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-CellPhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactContactPanelSetContactCVContactDVContactNameInputSetDateOfBirth = PcfDateValueInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-DateOfBirth');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetFirstName = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-FirstName');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetFirstNameKanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-FirstNameKanji');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetLastName = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-LastName');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetLastNameKanji = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-LastNameKanji');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetNameSummary = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-NameSummary');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetMiddleName = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-MiddleName');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetParticle = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Particle');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetPrefix = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Prefix');
	newContactContactPanelSetContactCVContactDVContactNameInputSetGlobalPersonNameInputSetSuffix = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-GlobalPersonNameInputSet-Suffix');
	newContactContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetCountryCode = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-CountryCode');
	newContactContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetExtension = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-Extension');
	newContactContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetNationalSubscriberNumber = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-NationalSubscriberNumber');
	newContactContactPanelSetContactCVContactDVContactNameInputSetHomePhoneGlobalPhoneInputSetPhoneDisplay = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-HomePhone-GlobalPhoneInputSet-PhoneDisplay');
	newContactContactPanelSetContactCVContactDVContactNameInputSetMaritalStatus = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-MaritalStatus');
	newContactContactPanelSetContactCVContactDVContactNameInputSetPrimaryPhone = PcfSelectInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-ContactNameInputSet-PrimaryPhone');
	newContactContactPanelSetContactCVContactDVLinkedAddressInputSetLinkAddressMenuEditAddress = PcfButton('#NewContact-ContactPanelSet-ContactCV-ContactDV-LinkedAddressInputSet-LinkAddressMenu-EditAddress');
	newContactContactPanelSetContactCVContactDVOfficialIDInputSetOfficialIDDV_Input = PcfTextInput('#NewContact-ContactPanelSet-ContactCV-ContactDV-OfficialIDInputSet-OfficialIDDV_Input');
	contactCVContactDetailCardTab = PcfButton('#NewContact-ContactPanelSet-ContactCV-ContactDetailCardTab');
	newContactEdit = PcfButton('#NewContact-Edit');
	newContactForceDupCheckUpdate = PcfButton('#NewContact-ForceDupCheckUpdate');
	newContactNewContact_UpLink = PcfButton('#NewContact-NewContact_UpLink');
	newContactUpdate = PcfButton('#NewContact-Update');
	newContact_Paging = PcfButton('#NewContact-_Paging');
	newContact__crumb__ = PcfComponent('#NewContact-__crumb__');
	newContact_msgs = PcfButton('#NewContact-_msgs');
}
