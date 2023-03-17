Feature: New Account Creation
Background: 
  Given I login to PolicyCenter as "su"

@common @account
Scenario: Creating a New Account in PolicyCenter
    When Creating a personal account

@common @hash
Scenario: Create Account using Hash method
    When Creating a personal account with the following details:
        | firstName     | Evora               |
        | lastName      | Recososa            |
        | email         | erocososa@yahoo.com |
        | address1      | 3571 Burnside Court |
        | city          | Phoenix             |
        | state         | AZ                  |
        | zip           | 85001               |
        | addressType   | home                |
    And I add the following contacts:
        | firstName   | lastName    | DOB        | maritalStatus | email               | address1            | city    | state | zip   | addressType | licenseNumber | licenseState |
        | Yen         | Bico        | 06/10/1998 | Single        | yenbico@ymail.com   | 3571 Burnside Court | Phoenix | AZ    | 85001 | billing     | 789456123     | AZ           |
        | Joymie      | Barredo     | 07/17/1995 | Single        | jbarredo@ymail.com  | 3571 Burnside Court | Phoenix | AZ    | 85001 | home        | 123456789     | AZ           |
    #Then account is successfully created
    #And a previously created account should be displayed upon searching


    
    