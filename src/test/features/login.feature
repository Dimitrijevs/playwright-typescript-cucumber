Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the login link

  @login
  Scenario: Login should be successful
    When User enter the username as "tomsmith" and User enter the password as "SuperSecretPassword!", User click on the login button
    Then Login should be success

  @login
  Scenario: Login should not be successful
    When User enter the username as "tomsmith" and User enter the password as "SuperSecretPassword", User click on the login button
    But Login should fail
