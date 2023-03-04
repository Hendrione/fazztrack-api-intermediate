Feature: Heroku app Login Scenario

#   Scenario: Successfully login using correct username password
#     Given I am on the front page
#     When I try to login with correct credential
#     Then I am successfully logged in

#   Scenario: Login with parameter
#     Given I am on the front page
#     When I try to login with username "hendri.antomy" and password "1234"
#     Then I am successfully login with username "hendri.antomy"

#   Scenario Outline: Login with multiple account
#     Given I am on the front page
#     When I try to login with username "<username>" and password "<password>"
#     Then I am successfully login with username "<username>"

#     Examples: 
#       | username        | password |
#       | hendri.antomy   |     1234 |
#       | wibowo.bullseye | bullseye |

  Scenario: Add item to cart
    Given I am on the front page
    When I try to login with username "hendri.antomy" and password "1234"
    Then I am successfully login with username "hendri.antomy"
    When I add items to cart:
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |
