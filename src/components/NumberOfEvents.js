import { useState } from "react";

const NumberOfEvents = ({setCurrentNOE, setErrorAlert}) => {
    const [eventNum, setEventNum] = useState("32");
    
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventNum(value); 
        setCurrentNOE(value);

        let alertText;
        if (isNaN(value) || value < 0) {
          alertText = "You have entered an invalid number of events."
        } else {
          alertText = ""
        }
        setErrorAlert(alertText);
    }

    return (
        <div id='number-of-events'>
            <input
                type="text"
                data-testid="event-num-input"
                value={eventNum}
                onChange={handleInputChanged}
            />
        </div>
    );
}

export default NumberOfEvents;