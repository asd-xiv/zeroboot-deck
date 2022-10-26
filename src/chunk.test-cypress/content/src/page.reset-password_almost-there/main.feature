Feature: Reset Password Page [2] - Notify user to check email

  Scenario: Empty
    Given I open page with URL "/reset-password/almost-there"
    Then I see a heading containing "Check your inbox"
