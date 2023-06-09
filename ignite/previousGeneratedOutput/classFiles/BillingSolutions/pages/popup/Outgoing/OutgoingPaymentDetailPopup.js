import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class OutgoingPaymentDetailPopup {
	outgoingPaymentDetailPopupScreenAmount = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-Amount');
	outgoingPaymentDetailPopupScreenIssueDate = PcfDateValueInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-IssueDate');
	outgoingPaymentDetailPopupScreenMailTo = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-MailTo');
	outgoingPaymentDetailPopupScreenMailToAddress = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-MailToAddress');
	outgoingPaymentDetailPopupScreenMemo = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-Memo');
	outgoingPaymentDetailPopupScreenPaidDate = PcfDateValueInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaidDate');
	outgoingPaymentDetailPopupScreenPayTo = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PayTo');
	outgoingPaymentDetailPopupScreenPaymentInstrument = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentInstrument');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopupScreenPaymentReceiptInputSetPaymentInstrumentInputSetTokenForACH = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForACH');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopupScreenPaymentReceiptInputSetPaymentInstrumentInputSetTokenForCreditCard = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForCreditCard');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopupScreenPaymentReceiptInputSetPaymentInstrumentInputSetTokenForMisc = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForMisc');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopupScreenPaymentReceiptInputSetPaymentInstrumentInputSetTokenForWire = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForWire');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopupScreenPaymentReceiptInputSetRefNumber = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-PaymentReceiptInputSet-RefNumber');
	outgoingPaymentDetailPopupScreenRefNumber = PcfTextInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-RefNumber');
	outgoingPaymentDetailPopupScreenRejectedDate = PcfDateValueInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-RejectedDate');
	outgoingPaymentDetailPopupScreenStatus = PcfSelectInput('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-Status');
	outgoingPaymentDetailPopupScreen_msgs = PcfButton('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopupScreen-_msgs');
	outgoingPaymentDetailPopupOutgoingPaymentDetailPopup_UpLink = PcfButton('#OutgoingPaymentDetailPopup-OutgoingPaymentDetailPopup_UpLink');
	outgoingPaymentDetailPopup_Paging = PcfButton('#OutgoingPaymentDetailPopup-_Paging');
	outgoingPaymentDetailPopup__crumb__ = PcfComponent('#OutgoingPaymentDetailPopup-__crumb__');
}
