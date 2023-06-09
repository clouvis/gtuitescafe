import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class NewSuspensePayment {
	newSuspensePaymentScreenCancel = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-Cancel');
	newSuspensePaymentScreenEdit = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-Edit');
	newSuspensePaymentDVAccountChoice_Choice = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-AccountChoice_Choice');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVAccountNumberAccountPicker = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-AccountNumber-AccountPicker');
	newSuspensePaymentDVCurrency = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-Currency');
	newSuspensePaymentDVDescription = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-Description');
	newSuspensePaymentDVInvoiceNumber = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-InvoiceNumber');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentInstrumentCreateNewPaymentInstrument = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentInstrument-CreateNewPaymentInstrument');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForACH = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForACH');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForCreditCard = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForCreditCard');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForMisc = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForMisc');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForWire = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForWire');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPaymentReceiptInputSetRefNumber = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PaymentReceiptInputSet-RefNumber');
	newSuspensePaymentDVPolicyChoice_Choice = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PolicyChoice_Choice');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVPolicyNumberPolicyPicker = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-PolicyNumber-PolicyPicker');
	newSuspensePaymentDVProducerChoice_Choice = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-ProducerChoice_Choice');
	newSuspensePaymentNewSuspensePaymentScreenNewSuspensePaymentDVProducerNameProducerPicker = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-ProducerName-ProducerPicker');
	newSuspensePaymentDVamount = PcfTextInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-amount');
	newSuspensePaymentDVpaymentDate = PcfDateValueInput('#NewSuspensePayment-NewSuspensePaymentScreen-NewSuspensePaymentDV-paymentDate');
	newSuspensePaymentScreenUpdate = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-Update');
	newSuspensePaymentScreen_msgs = PcfButton('#NewSuspensePayment-NewSuspensePaymentScreen-_msgs');
	newSuspensePaymentNewSuspensePayment_UpLink = PcfButton('#NewSuspensePayment-NewSuspensePayment_UpLink');
	newSuspensePayment_Paging = PcfButton('#NewSuspensePayment-_Paging');
	newSuspensePayment__crumb__ = PcfComponent('#NewSuspensePayment-__crumb__');
}
