import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';

export class NewDirectBillPayment {
	newDirectBillPaymentEditDBPaymentScreenAddItems = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-AddItems');
	newDirectBillPaymentEditDBPaymentScreenCancel = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-Cancel');
	newDirectBillPaymentEditDBPaymentScreenCollateralItemCardTab = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-CollateralItemCardTab');
	newDirectBillPaymentEditDBPaymentScreenCollateralItemLV = PcfListView('#NewDirectBillPayment-EditDBPaymentScreen-CollateralItemLV');
	newDirectBillPaymentEditDBPaymentScreenCollateralItemLV_tbAdd = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-CollateralItemLV_tb-Add');
	newDirectBillPaymentEditDBPaymentScreenCollateralItemLV_tbRemove = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-CollateralItemLV_tb-Remove');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV = PcfListView('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbAggregate = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-Aggregate');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbClearButton = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-ClearButton');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbGoButton = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-GoButton');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbGoTo = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-GoTo');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbGroupBy = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-GroupBy');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbInvoiceSortBy = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-InvoiceSortBy');
	newDirectBillPaymentEditDBPaymentScreenDistributionAmountsLV_tbTAccountOwnerSortBy = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV_tb-TAccountOwnerSortBy');
	newDirectBillPaymentEditDBPaymentScreenEdit = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-Edit');
	newDirectBillPaymentEditDBPaymentScreenExecuteWithoutDistribution = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-ExecuteWithoutDistribution');
	newDirectBillPaymentEditDBPaymentScreenFrozenInvoiceItemAlert = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-FrozenInvoiceItemAlert');
	newDirectBillPaymentEditDBPaymentScreenFrozenInvoiceItemAlertCloseBtn = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-FrozenInvoiceItemAlert-CloseBtn');
	newDirectBillPaymentEditDBPaymentScreenOverrideModeButton = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-OverrideModeButton');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAccountName = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-AccountName');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAccountNumberAccountPicker = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-AccountNumber-AccountPicker');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmount = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-Amount');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVAmountAvailableToDistribute = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-AmountAvailableToDistribute');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVCollateralAmount = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-CollateralAmount');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVCreditDistDescription = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-CreditDistDescription');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVDescription = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-Description');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVDistributedAmount = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-DistributedAmount');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVOriginatingAccountName = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-OriginatingAccountName');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVOriginatingUnappliedFunds = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-OriginatingUnappliedFunds');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentDate = PcfDateValueInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentDate');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentInstrumentCreateNewPaymentInstrument = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentInstrument-CreateNewPaymentInstrument');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForACH = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForACH');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForCreditCard = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForCreditCard');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForMisc = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForMisc');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetPaymentInstrumentInputSetTokenForWire = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-PaymentInstrumentInputSet-TokenForWire');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVPaymentReceiptInputSetRefNumber = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-PaymentReceiptInputSet-RefNumber');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVRemainingAmount = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-RemainingAmount');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVSuspenseAmount = PcfTextInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-SuspenseAmount');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVUnappliedFunds = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UnappliedFunds');
	newDirectBillPaymentEditDBPaymentScreenPaymentDetailsDVUseUnappliedFunds = PcfCheckBox('#NewDirectBillPayment-EditDBPaymentScreen-PaymentDetailsDV-UseUnappliedFunds');
	newDirectBillPaymentEditDBPaymentScreenSuspenseItemCardTab = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-SuspenseItemCardTab');
	newDirectBillPaymentEditDBPaymentScreenSuspenseItemsLV = PcfListView('#NewDirectBillPayment-EditDBPaymentScreen-SuspenseItemsLV');
	newDirectBillPaymentEditDBPaymentScreenSuspenseItemsLV_tbAdd = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-SuspenseItemsLV_tb-Add');
	newDirectBillPaymentEditDBPaymentScreenSuspenseItemsLV_tbRemove = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-SuspenseItemsLV_tb-Remove');
	newDirectBillPaymentEditDBPaymentScreenUpdate = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-Update');
	newDirectBillPaymentEditDBPaymentScreen_msgs = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-_msgs');
	newDirectBillPaymentEditDBPaymentScreendistributionCardTab = PcfButton('#NewDirectBillPayment-EditDBPaymentScreen-distributionCardTab');
	newDirectBillPaymentEditDBPaymentScreenincludeOnly = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-includeOnly');
	newDirectBillPaymentEditDBPaymentScreenselectItemsIs = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-selectItemsIs');
	newDirectBillPaymentEditDBPaymentScreenselectItemsWhere = PcfSelectInput('#NewDirectBillPayment-EditDBPaymentScreen-selectItemsWhere');
	newDirectBillPaymentNewDirectBillPayment_UpLink = PcfButton('#NewDirectBillPayment-NewDirectBillPayment_UpLink');
	newDirectBillPayment_Paging = PcfButton('#NewDirectBillPayment-_Paging');
	newDirectBillPayment__crumb__ = PcfComponent('#NewDirectBillPayment-__crumb__');
}
