Feature: Reset Password Page [1] - Request new, client-side form validation

  Background:
    Given I open page with URL "/reset-password"
    And I see a heading containing "Reset your password"

  Scenario: Submit empty
    When I click button with label "Sent password reset link"
    Then I see one "Field is required" text

  Scenario: Submit with invalid email
    Given I type "asd" into field with label "Email"
    When I click button with label "Sent password reset link"
    Then I see one "Invalid email format" text
