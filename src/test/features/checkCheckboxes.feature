Feature: Checkboxes Functionality

    Background:
        Given User navigates to the application
        And User clicks on Checkboxes link

    @checkboxes
    Scenario: Verify Checkboxes Action
        When User checks the first checkbox
        Then The first checkbox should be checked
        When User unchecks the second checkbox
        Then The second checkbox should be unchecked