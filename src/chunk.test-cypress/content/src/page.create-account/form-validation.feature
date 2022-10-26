Feature: Create Account - Form validation

  Background:
    Given I open page with URL "/create-account"

  Scenario: Submit empty
    When I click button with label "Create account"
    Then I see multiple texts
      | Field is required |
      | Field is required |
      | Field is required |
      | Field is required |

  Scenario: Email address validation rule: no @
    Given I type "asd" into field with label "Email"
    When I click button with label "Create account"
    Then I see one "Invalid email format" text

  Scenario: Email address validation rule: no .
    Given I type "asd@df" into field with label "Email"
    When I click button with label "Create account"
    Then I see one "Invalid email format" text

  Scenario: Email address validation rule: starts with @
    Given I type "@fdf.com" into field with label "Email"
    When I click button with label "Create account"
    Then I see one "Invalid email format" text

  Scenario: Valid email
    Given I type "kjf@fdf.com" into field with label "Email"
    When I click button with label "Create account"
    Then I see multiple texts
      | Field is required |
      | Field is required |
      | Field is required |

  Scenario: Navigate to Login page
    When I click link with text "Log in"
    Then I see a heading containing "Log in"
