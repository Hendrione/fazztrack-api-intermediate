Feature: Fairprice Login

              Verify User can login using correct user login and correct password

        # @Access @Login
        # Scenario: User Able Successfully Login
        #     Given I am on the home page
        #       And I navigate to login page
        #      When I input valid login with username qecoesg@gmail.com and  password qecoe123.,
        #      Then I successfully login

        @Access @Login @Logout
        Scenario: Verify User can login using correct user login and correct password
            Given I am on the home page
              And I navigate to login page
             When I input valid login with username qecoesg@gmail.com and  password qecoe123.,
             Then I successfully login
              And I proceed to Logout
             Then I successfully logout