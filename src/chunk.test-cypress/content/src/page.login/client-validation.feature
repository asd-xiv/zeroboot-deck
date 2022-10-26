Feature: Login Page - Client-side form validation

  Background:
    Given I open page with URL "/login"
    And I see multiple headings containing
    | Log in   |
    | New here |

  Scenario: Submit empty
    When I click button with label "Log in"
    Then I see multiple texts
    | Field is required |
    | Field is required |

  Scenario: Submit with invalid email
    Given I type "asd" into field with label "Email"
    When I click button with label "Log in"
    Then I see multiple texts
    | Invalid email format |
    | Field is required    |
