Feature: Heroku app Login Scenario

    Scenario: Successfully login using correct username password
        Given I am on the front page
        When I try to login with correct credential
        Then I am successfully logged in