@login
Feature: Heroku app Login Scenario

  @smoke
  Scenario: Successfully login using correct username password
    Given I am on the front page
    When I try to login with correct credential
    Then I am successfully logged in

  @smoke
  Scenario: Login with parameter
    Given I am on the front page
    When I try to login with username "hendri.antomy" and password "1234"
    Then I am successfully login with username "hendri.antomy"

  @regression
  Scenario Outline: Login with multiple account
    Given I am on the front page
    When I try to login with username "<username>" and password "<password>"
    Then I am successfully login with username "<username>"

    Examples: 
      | username        | password |
      | hendri.antomy   |     1234 |
      | wibowo.bullseye | bullseye |

  @scroll
  Scenario: Scrolling Test
    Given I am on the front page
    Given I perform scrolling to footer
