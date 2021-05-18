# Feature: The Internet Guinea Pig Website

  # Scenario Outline: As a user, I can log into the secure area

  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |

Feature: The Cucumber No Chromedriver test
  Scenario: Sample Passing test
    Given I am testing
    When I perform the test
    Then I should see success

  Scenario: Sample Failing test
    Given I am testing
    When I perform the test
    Then I should see failure