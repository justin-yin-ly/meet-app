import { useState } from "react";

const NumberOfEvents = () => {
    const [eventNum, setEventNum] = useState('32');
    
    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventNum(value);
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