import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('When the user first opens the app, all events should be in collapsed view', ({ given, when, then }) => {
        let AppComponent;
        given('user first opens the app', () => {
            AppComponent = render(<App />);
        });

        let EventListDOM;
        when('events first display', async () => {
            const AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                // Make sure that the events list actually exists first and that we aren't just looking at a blank list
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('all events should be in collapsed view', async () => {
            const EventDetails = EventListDOM.querySelectorAll('.event .event-details');
            expect(EventDetails.length).toBe(0);
        });
        
    });

    test('User should be able to click on an event to view its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventComponent;
        given('user wants to see an event\'s details', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                // Make sure that the events list actually exists first and that we aren't just looking at a blank list
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

            EventComponent = EventListDOM.querySelector('.event');
        });

        when('user clicks on an event', async () => {
            const user = userEvent.setup();
            const ShowButton = EventComponent.querySelector('.details-button');
            await user.click(ShowButton);
        });

        then('event expands to display additional information', () => {
            const EventDetails = EventComponent.querySelector('.event-details');
            expect(EventDetails).toBeInTheDocument();
        });
    });

    test('User should be able to click on an expanded event to collapse it and hide details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventComponent;
        let user;
        let ShowButton;
        given('user no longer wants to see an event\'s details', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
            
            await waitFor(() => {
                // Make sure that the events list actually exists first and that we aren't just looking at a blank list
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

            EventComponent = EventListDOM.querySelector('.event');

            // Make sure the event is in its expanded view first
            user = userEvent.setup();
            ShowButton = EventComponent.querySelector('.details-button');
            await user.click(ShowButton);
            const EventDetails = EventComponent.querySelector('.event-details');
            expect(EventDetails).toBeInTheDocument();
        });

        when('user clicks on an expanded event', async () => {
            await user.click(ShowButton);
        });

        then('event collapses to hide details', () => {
            const EventDetails = EventComponent.querySelector('.event-details');
            expect(EventDetails).not.toBeInTheDocument();
        });
    });
});