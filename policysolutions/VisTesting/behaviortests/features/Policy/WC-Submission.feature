Feature: Create Worker's Compensation Policy
Background: 
  Given I login to PolicyCenter as "ssmith"
  
@WCSubmission
Scenario: Creating Workers Compensation Policy in Policy Center
  When Creating a Personal Account
  And I create a Worker's Compensation Policy
  Then Successfully issued WC Policy