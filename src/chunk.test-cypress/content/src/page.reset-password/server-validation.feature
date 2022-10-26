Feature: Reset Password Page [1] - Request new, server-side form validation

  Scenario: Empty
    Given I open page with URL "/reset-password"
    Then I see a heading containing "Reset your password"
