Feature: Showing interest in renting a property

    Scenario: login to account
        Given that BoligExpress Homepage is shown
        When I click the button "Login"
        And I enter username "Johndoe@gmail.com" and password "jeffBezos321!"
        And I click the button "submit"
        Then the personal page is shown
        And the button "Login" is unavailable

    Scenario: browse properties
        Given that the personal page is shown
        When I click the button "Rent_a_property"
        And I select house type "apartament"
        And I select room number preference "3 rooms"
        Then I am shown filtered results

    Scenario: contact a landlord regarding a property
        Given that filtered results are shown
        When I click on the "Property 1"
        And I click the chat icon
        Then I type in a message "Hi, I am interested in your property"
        And click the "send message" button



