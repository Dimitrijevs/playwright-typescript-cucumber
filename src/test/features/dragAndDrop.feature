Feature: Drag and Drop Functionality

    Background:
        Given User navigates to the application
        And User clicks on Drag and Drop link

    @dragAndDrop
    Scenario: Verify Drag and Drop Action
        When User selects box A and drags it to box B
        Then Box A should be in the position of Box B
        And Box B should be in the position of Box A