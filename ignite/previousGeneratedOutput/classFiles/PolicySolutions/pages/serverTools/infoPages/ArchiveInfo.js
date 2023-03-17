import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class ArchiveInfo {
	archiveInfoScreenAlert = PcfButton('#ArchiveInfo-ArchiveInfoScreen-Alert');
	alertCloseBtn = PcfButton('#ArchiveInfo-ArchiveInfoScreen-Alert-CloseBtn');
	archiveInfoScreenArchiveCountSummaryLV = PcfListView('#ArchiveInfo-ArchiveInfoScreen-ArchiveCountSummaryLV');
	archiveExcludeDetailsCVAllArchived = PcfTextInput('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-AllArchived');
	archiveExcludedBecauseOfFailureDetailsArchiveExcludeDetailsLV = PcfListView('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ArchiveExcludedBecauseOfFailureDetails-ArchiveExcludeDetailsLV');
	archiveExcludedBecauseOfRulesDetailsArchiveExcludeDetailsLV = PcfListView('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ArchiveExcludedBecauseOfRulesDetails-ArchiveExcludeDetailsLV');
	archiveSkippedDetailsArchiveExcludeDetailsLV = PcfListView('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ArchiveSkippedDetails-ArchiveExcludeDetailsLV');
	archiveExcludeDetailsCVArchivedTab = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ArchivedTab');
	archiveExcludeDetailsCVExcludedBecauseOfFailureTab = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ExcludedBecauseOfFailureTab');
	archiveExcludeDetailsCVExcludedBecauseOfRulesTab = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-ExcludedBecauseOfRulesTab');
	archiveExcludeDetailsCVSkippedTab = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ArchiveExcludeDetailsCV-SkippedTab');
	archiveSourceInfoDVasof = PcfDateValueInput('#ArchiveInfo-ArchiveInfoScreen-ArchiveSourceInfoDV-asof');
	archiveSourceInfoDVdelete = PcfSelectInput('#ArchiveInfo-ArchiveInfoScreen-ArchiveSourceInfoDV-delete');
	archiveSourceInfoDVrestore = PcfSelectInput('#ArchiveInfo-ArchiveInfoScreen-ArchiveSourceInfoDV-restore');
	archiveSourceInfoDVstore = PcfSelectInput('#ArchiveInfo-ArchiveInfoScreen-ArchiveSourceInfoDV-store');
	archiveInfoScreenArchived = PcfTextInput('#ArchiveInfo-ArchiveInfoScreen-Archived');
	archiveInfoScreenDownload = PcfButton('#ArchiveInfo-ArchiveInfoScreen-Download');
	archiveInfoScreenDownloadButton = PcfButton('#ArchiveInfo-ArchiveInfoScreen-DownloadButton');
	archiveInfoScreenExcludedBecauseOfFailure = PcfTextInput('#ArchiveInfo-ArchiveInfoScreen-ExcludedBecauseOfFailure');
	archiveInfoScreenExcludedBecauseOfRules = PcfTextInput('#ArchiveInfo-ArchiveInfoScreen-ExcludedBecauseOfRules');
	archiveInfoScreenRefreshButton = PcfButton('#ArchiveInfo-ArchiveInfoScreen-RefreshButton');
	archiveInfoScreenResetExcludedBecauseOfFailure = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ResetExcludedBecauseOfFailure');
	archiveInfoScreenResetExcludedBecauseOfRules = PcfButton('#ArchiveInfo-ArchiveInfoScreen-ResetExcludedBecauseOfRules');
	archiveInfoScreenSkipped = PcfTextInput('#ArchiveInfo-ArchiveInfoScreen-Skipped');
	archiveInfoScreenStatus = PcfButton('#ArchiveInfo-ArchiveInfoScreen-Status');
	archiveInfoScreenUpload = PcfButton('#ArchiveInfo-ArchiveInfoScreen-Upload');
	archiveInfoScreenUploadFile = PcfButton('#ArchiveInfo-ArchiveInfoScreen-UploadFile');
	archiveInfoScreen_msgs = PcfButton('#ArchiveInfo-ArchiveInfoScreen-_msgs');
	archiveInfoArchiveInfo_UpLink = PcfButton('#ArchiveInfo-ArchiveInfo_UpLink');
	archiveInfo_Paging = PcfButton('#ArchiveInfo-_Paging');
	archiveInfo__crumb__ = PcfComponent('#ArchiveInfo-__crumb__');
}
