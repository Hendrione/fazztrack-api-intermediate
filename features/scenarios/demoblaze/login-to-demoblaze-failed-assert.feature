@demoblaze @failed
Feature: Log in to home page in failed test case

  Scenario: As a user, I can log into home page

    Given user is on the demoblaze login page
    When user is successfully logged in to demoblaze
    Then user should see home page demoblaze but failed assertion
