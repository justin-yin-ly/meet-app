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
                value={eventNum}
                onChange={handleInputChanged}
            />
        </div>
    );
}

export default NumberOfEvents;