import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";
import mockData from "../mock-data";

describe('<Event /> component', () => {
    let EventComponent;
    const event = mockData[0]

    /*  Prior to this, I had a variable allEvents which was supposed to use getEvents
        to set itself and then be used in the test cases instead of mockData. It wasn't
        working properly, returning as undefined. Just to make sure I know for myself in the
        future, I wanted to keep this as a note. I was confused for a while as to why it
        wasn't setting the event prop for the Event component properly, but looking over
        the code again, I believe it was because I was calling getEvents as is, instead of using
        it in an asynchronous await call; at least, that's what I'd seen in other instances
        where getEvents was used.
    */
   
    beforeEach(() => {
        EventComponent = render(<Event event={event}/>);
    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(mockData[0].created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });

    test('by default, event details section should be hidden', () => {
        expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
    });

    test('shows the details section when the user clicks on the show details button', async () => {
        const user = userEvent.setup();
        const showButton = EventComponent.container.querySelector('.details-button');
        await user.click(showButton);
        expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();
    });

    test('hides the details section when the user clicks on the hide details button', async () => {
        const user = userEvent.setup();
        const hideButton = EventComponent.container.querySelector('.deatils-button');
        await user.click(hideButton);
        expect(EventComponent.container.querySelector('.event-details')).not.toBeInTheDocument();
    });
});