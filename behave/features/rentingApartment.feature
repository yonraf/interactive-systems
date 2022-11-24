Feature: Showing interest in renting a property

    Scenario: login to account
        Given that BoligExpress Homepage is shown
        When I click the button "Login"
        And I enter username "Johndoe@gmail.com" and password "jeffBezos321!"
        And I click the button "submit"
        Then the personal page i shown
        And the button "Login" is unavailable

