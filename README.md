# Meet App
## Overview
The Meet App is a web application that allows users to view details about events and manage ones they're curious about. Users are able to filter events by city, view event details, specify the amount of events they want to see, use the app even when offline, install the app as a shortcut to their homescreen, and display events through a chart view.

## Using This App

## Links

## Dependencies

## Features/User Stories

### Feature 2: Show/Hide Event Details
As a user, I should be able to expand and hide event details so that I can learn more about upcoming events and then hide them again to declutter my view.

**Scenario 1:** Given the user first opens the app, when the events first display, then all events should be in collapsed view.

**Scenario 2:** Given the user wants to see more event details, when they click on an event, then the event expands to display additional information.

**Scenario 3:** Given the user no longer wants to see an event's expanded details, when they click on the event, then the event collapses to hide its details.

### Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events I want to see so that I can view more or less events according to my preferences.

**Scenario 1:** Given the user hasn't specified an amount of events to display, when the user views the list of events, then 32 events are displayed by default.

**Scenario 2:** Given the user wants to change the amount of events displayed, when the user specifies an amount, then the list of events changes to the amount specified.

### Feature 4: Use the App When Offline
As a user, I should be able to use the app offline so that I can view event data even when I don't have an internet connection.

**Scenario 1:** Given the user lacks an internet connection, when the user opens the app, then they will be able to view any data that was already cached.

**Scenario 2:** Given the user lacks an internet connection, when the user changes the search conditions prompting new information, then the app will display an error.

### Feature 5: Add an App Shortcut to the Home Screen
As a user, I should be able to install the app as a shortcut to  my home screen so that I can access it more conveniently.

**Scenario 1:** Given the user wants more convenient access to the app, when the user chooses to install the app, then the app will appear as a shortcut on their device home screen.

### Feature 6: Display Charts Visualizing Event Details
As a user, I should be able to display event details as a chart so that I can visualize event data easier.

**Scenario 1:** Given the user is viewing event details, when the user clicks the option for a chart display, then the app will visualize upcoming events for each city in a chart.
