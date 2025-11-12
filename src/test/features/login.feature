Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  @login
  Scenario: Login should be successful
    When User enter the username as "tomsmith"
    And User enter the password as "SuperSecretPassword!"
    And User click on the login button
    Then Login should be success

  @login
  Scenario: Login should not be successful
    Given User enter the username as "tomsmith"
    Given User enter the password as "SuperSecretPassword"
    When User click on the login button
    But Login should fail