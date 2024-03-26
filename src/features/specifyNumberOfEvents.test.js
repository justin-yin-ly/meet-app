import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('Display a default number of events before the user has typed anything', ({ given, when, then }) => {
        let AppComponent;
        given('user has not specified amount of events to display', () => {

        });

        when('user views list of events', () => {
            AppComponent = render(<App />);
        });

        then(/^(\d+) events are displayed by default$/, async (arg0) => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list')
    
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });
    });

    test('When the user types in an amount of events to display, the event list updates to match the amount they typed', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('user wants to change the amount of events to display', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list')
    
            // Make sure event list exists
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            })
        });

        when('user inputs an amount of events to display', async () => {
            const user = userEvent.setup();
            const NOEDOM = AppDOM.querySelector('#number-of-events');
            const NOEInput = within(NOEDOM).queryByRole('textbox');

            await user.type(NOEInput, '{backspace}{backspace}3');
        });

        then('event list updates to display the amount of events specified by the user', async () => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(3);
            })
        });
    });
});