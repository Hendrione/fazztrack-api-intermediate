Feature: Fairprice Checkout

              I want to be able to Checkout the Item

        @Checkout
        Scenario: Verify User Should Be Able To Checkout The Item
            Given I am on the home page
              And I navigate to login page
             When I input valid login with username qecoesg@gmail.com and  password qecoe123.,
             Then I successfully login
             When I navigate to cart page
              And I clear the cart
              And I search for sugar
              And I add item to cart
             When I navigate to cart page
              And I go to checkout page
              And I choose time-slot
              And I choose credit-card
             Then I successfully prepare the order
