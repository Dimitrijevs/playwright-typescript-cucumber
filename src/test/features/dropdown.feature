Feature: Dropdown Selection

  Background:
    Given User navigates to the application
    And User clicks on Dropdown link

  @dropdown
  Scenario Outline: Select and verify dropdown option
    When User selects "<optionText>"
    Then the selected value should be "<value>"

    Examples:
      | optionText | value |
      | Option 1   | 1     |
      | Option 2   | 2     |
