Feature: Create Personal Auto Policy
Background: 
  Given I login to PolicyCenter as "svisor"
  
@PersonalAutoSubmission
Scenario: Creating Auto Policy in Policy Center
  When Creating a personal account
  When i create a Personal Auto Policy
  Then successfully issued Auto Policy