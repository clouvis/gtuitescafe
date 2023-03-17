Feature: Create a Policy with a Claim 
Background: 
  Given I login to PolicyCenter as "ssmith"
  And Creating a personal account

@fnol @DesignatedFunction
Scenario Outline: Scenario Outline name: Creating a Claim for <LOB> Policy
  When I create a <LOB> Policy in PC
  And I create an <LOB> claim
  Then Claim is created successfully    

  Examples:
    | LOB                   |
    | Homeowners            |
    | Personal Auto         |

@home @DesignatedFunction
Scenario: Creating a Claim for Homeowners Policy
  When I create a Homeowners Policy in PC
  Then I successfully issued Homeowners Policy
  When I create an Homeowners claim
  Then HO Claim is created successfully   

 
@auto @DesignatedFunction
Scenario: Creating a Claim for PA Policy
  When I create a Personal Auto in PC
  Then successfully issued Personal Auto Policy
  When I create an Personal Auto claim
  Then PA Claim is created successfully  