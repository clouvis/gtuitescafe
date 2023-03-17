Feature: Permission
Background: 
  Given I login to PolicyCenter as "su"

@common @addingPermission
Scenario: Adding and removing permission to the user
    And search the existing user "aapplegate"
    When add the permission "View Runtime Properties screen"
    And logout the current user
    And login as aapplegate
    # And the user should view the runtime properties screen
    # Then sign off the user then login again as "su"
    # And remove the "User Admin" permission for the user "aapplegate"
    # And sign out then login as "aapplegate"
    # And verify if the user can view the runtime properties screen
