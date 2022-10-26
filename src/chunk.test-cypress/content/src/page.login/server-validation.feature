Feature: Login Page - Server-side form validation

  Background:
    Given I open page with URL "/login"
    Then I see a heading containing "Log in"

  Scenario: Submit with valid credentials
    Given I type "rnd+rider@vnmoof.com" into field with label "Email"
    And I type "Password1!" into field with label "Password"
    And I click button with label "Log in"
    Then I see one "My VanMoof | VanMoof" heading

  Scenario: Submit with invalid credentials
    Given I type "rnd+rider@vnmoof.com" into field with label "Email"
    And I type "Massword1!" into field with label "Password"
    Then I see one alert with "Your credentials do not much our records" text

  Scenario: Submit with no internet connection
    Given I type "rnd+rider@vnmoof.com" into field with label "Email"
    And I type "Password1!" into field with label "Password"
    And I simulate no internet connection
    Then I see one alert with "Something went wrong" text

  Scenario: Submit with server error
    Given I type "rnd+rider@vanmoof.com" into field with label "Email"
    And I type "Password!" into field with label "Password"
    And I intercept "/login" to return status "500"
    Then I see one alert with "Something went wrong" text
