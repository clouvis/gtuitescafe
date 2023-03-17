Feature: Claim Creation

@createclaim
Scenario Outline: Creating a Claim for <Line Of Business> policy

    Given A <Line Of Business> policy
    When Create claim for the searched policy
    Then Claim is created successfully

    Examples:
    | Line Of Business      |
    | Homeowners            |
    | Personal Auto         |
