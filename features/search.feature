Feature: Test search function

Scenario: When someone clicks the search button
    Given we loaded our web page
    When I click the search button
    Then the body background color should be blue