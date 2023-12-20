import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    let eventsNumTextbox;

    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
        eventsNumTextbox = NumberOfEventsComponent.queryByRole('textbox');
    });

    test('has an element with "textbox" role', () => {
        expect(eventsNumTextbox).toBeInTheDocument();
    });

    test('has default value of 32', () => {
        expect(eventsNumTextbox).toHaveValue('32')
    });

    test('value of textbox in component changes according to user input', async () => {
        const user = userEvent.setup();
        await user.type(eventsNumTextbox, '{backspace}{backspace}10');
        expect(eventsNumTextbox).toHaveValue('10')
    });
});