Feature: Fairprice Categories

              I want to be able to check categories

        @Categories
        Scenario: Verify All links in Categories page are accessible - no broken links
            Given I am on the home page
              And I navigate to categories page
             Then I successfully check all link is not broken
