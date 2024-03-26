Feature: Show/hide event details
  Scenario: When the user first opens the app, all events should be in collapsed view
    Given user first opens the app
    When events first display
    Then all events should be in collapsed view
  Scenario: User should be able to click on an event to view its details
    Given user wants to see an event's details
    When user clicks on an event
    Then event expands to display additional information
  Scenario: User should be able to click on an expanded event to collapse it and hide details
    Given user no longer wants to see an event's details
    When user clicks on an expanded event
    Then event collapses to hide details