import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class TripSegmentPopup {
	tripSegmentPopupAdditionalTripSegmentLV = PcfListView('#TripSegmentPopup-AdditionalTripSegmentLV');
	tripSegmentPopupAdditionalTripSegmentLV_tbAdd = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-Add');
	tripSegmentPopupAdditionalTripSegmentLV_tbRemove = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-Remove');
	tripSegmentPopupAdditionalTripSegmentLV_tbSegmentApprovalButton = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-SegmentApprovalButton');
	tripSegmentPopupAdditionalTripSegmentLV_tbSegmentClearButton = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-SegmentClearButton');
	tripSegmentPopupAdditionalTripSegmentLV_tbSegmentDenyButton = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-SegmentDenyButton');
	additionalTripSegmentLV_tbSegmentReviewlButton = PcfButton('#TripSegmentPopup-AdditionalTripSegmentLV_tb-SegmentReviewlButton');
	claimTripSegmentDetailDVAgentFees = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-AgentFees');
	claimTripSegmentDetailDVApprove = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-Approve');
	claimTripSegmentDetailDVAssessment = PcfSelectInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-Assessment');
	claimTripSegmentDetailDVCancellationFees = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-CancellationFees');
	claimTripSegmentDetailDVCarrierName = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-CarrierName');
	claimTripSegmentDetailDVCarrierNumber = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-CarrierNumber');
	claimTripSegmentDetailDVClear = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-Clear');
	claimTripSegmentDetailDVDeny = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-Deny');
	claimTripSegmentDetailDVEndedOn = PcfDateValueInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-EndedOn');
	claimTripSegmentDetailDVFinancialImpact = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-FinancialImpact');
	claimTripSegmentDetailDVOtherFees = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-OtherFees');
	claimTripSegmentDetailDVPaidAmount = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-PaidAmount');
	claimTripSegmentDetailDVPortOfDisembarkation = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-PortOfDisembarkation');
	claimTripSegmentDetailDVPortOfEmbarkation = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-PortOfEmbarkation');
	claimTripSegmentDetailDVReasonForAddnlTravelOrCancellation = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-ReasonForAddnlTravelOrCancellation');
	claimTripSegmentDetailDVReasonForDenial = PcfTextInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-ReasonForDenial');
	claimTripSegmentDetailDVReview = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-Review');
	claimTripSegmentDetailDVSegmentCancelOnly = PcfComponent('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-SegmentCancelOnly');
	claimTripSegmentDetailDVStartedOn = PcfDateValueInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-StartedOn');
	claimTripSegmentDetailDVTransportType = PcfSelectInput('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV-TransportType');
	claimTripSegmentDetailDV_tbCancel = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV_tb-Cancel');
	claimTripSegmentDetailDV_tbEdit = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV_tb-Edit');
	claimTripSegmentDetailDV_tbUpdate = PcfButton('#TripSegmentPopup-ClaimTripSegmentDetailDV-ClaimTripSegmentDetailDV_tb-Update');
	tripSegmentPopupRebookedTransportationCardTab = PcfButton('#TripSegmentPopup-RebookedTransportationCardTab');
	tripSegmentPopupTripSegmentPopup_UpLink = PcfButton('#TripSegmentPopup-TripSegmentPopup_UpLink');
	tripSegmentPopup_Paging = PcfButton('#TripSegmentPopup-_Paging');
	tripSegmentPopup__crumb__ = PcfComponent('#TripSegmentPopup-__crumb__');
	tripSegmentPopup_msgs = PcfButton('#TripSegmentPopup-_msgs');
}
