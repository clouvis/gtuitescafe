'use strict'
import { PcfButton, PcfComponent, PcfListView } from "@gtui/gt-ui-framework"
import { t } from "testcafe";
import { PcfRadioButton } from "../../components/RadioButton";
import world from "../../utils/world";

export class CustomPages {

    firstName = PcfComponent('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-FirstName');
    lastName = PcfComponent('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-LastName');
    policyFilePolicyFileMenuInfoBarPolicyNumber = PcfComponent('#PolicyFile-PolicyFileMenuInfoBar-PolicyNumber');
    jobCompleteJobWizardInfoBarPolicyNumber = PcfComponent('#JobComplete-JobWizardInfoBar-PolicyNumber');
    JobCompleteJobWizardInfoBarAccountName = PcfComponent('#JobComplete-JobWizardInfoBar-AccountName');
    occupyDwellingFullTime = PcfRadioButton('#SubmissionWizard-SubmissionWizard_PreQualificationScreen-PreQualQuestionSetsDV-QuestionSetsDV-0-QuestionSetLV-3-QuestionModalInput-BooleanRadioInput');
    submissionWizard_QuoteScreenWarningsPanelSet = PcfComponent('#SubmissionWizard-SubmissionWizard_QuoteScreen-WarningsPanelSet');
    submissionWizardJob_RiskAnalysisScreen = PcfComponent('#SubmissionWizard-Job_RiskAnalysisScreen');
    submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSet = PcfListView('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet');
    submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSetApprove = PcfButton('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet-Approve');
    submissionWizardJob_RiskAnalysisScreenRiskAnalysisCVRiskEvaluationPanelSetReject = PcfButton('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet-Reject');
}