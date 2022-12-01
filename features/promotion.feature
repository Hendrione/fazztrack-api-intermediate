Feature: Fairprice Promotions Page

              I want to be able to see All Promotions Filter and PWP Promotions Tag

        @Promotions @AllPromotions
        Scenario: Verify User Able to Check Mandatory Promotions Filter
            Given I am on the home page
              And I navigate to promotions page
             Then I verify all filters
                  | filter       | locator                                              |
                  | PWP          | //*[@data-testid='tagOption-pwp']                    |
                  | Must Buy     | //*[@data-testid='tagOption-must-buy']               |
                  | Digital Club | //*[@data-testid='tagOption-digital-club-exclusive'] |


        @Promotions @Filtered
        Scenario: Verify User Able to Check All Products with Filtered Promotions Tag
            Given I am on the home page
              And I navigate to promotions page
              And I click filter PWP
             Then I verify on items PWP