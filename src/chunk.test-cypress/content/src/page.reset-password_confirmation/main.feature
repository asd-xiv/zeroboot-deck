Feature: Reset Password Page [3] - Confirm password was reset successfully

  Scenario: Empty
    Given I open page with URL "/reset-password/confirmation"
    Then I see a heading containing "Thanks"
