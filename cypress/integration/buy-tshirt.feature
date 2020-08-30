Feature: Buy a T-Shirt

    Scenario: Buy a T-Shirt successfully
        Given a e-commerce website
        When I select a T-Shirt
        And I go to the shopping cart
        And I proceed to checkout in the summary step
        And I sign in in the application
        And I proceed to checkout in the address step
        And I accept the terms of service
        And I select the payment method
        And I confirm my order
        Then The order should be completed successfully