Feature: Specify number of events
  Scenario: Display a default number of events before the user has typed anything
    Given user has not specified amount of events to display
    When user views list of events
    Then 32 events are displayed by default
  Scenario: When the user types in an amount of events to display, the event list updates to match the amount they typed
    Given user wants to change the amount of events to display
    When user inputs an amount of events to display
    Then event list updates to display the amount of events specified by the user