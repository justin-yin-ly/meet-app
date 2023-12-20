// src/components/Event.js

import { useState } from "react";

const Event = ({event}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <li className="event">
            <h3>{event.summary}</h3>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button className="details-button" onClick={() => {
                setShowDetails(!showDetails)
            }}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails ? (<div className="event-details">
                <p><b>Event Details</b></p>
                <p>{event.description}</p>
            </div>) : 
            null}
        </li>
    );
}

export default Event;