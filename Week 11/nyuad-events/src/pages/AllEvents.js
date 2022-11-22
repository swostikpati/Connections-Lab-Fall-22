import EventList from "../components/events/EventList";
import { useState, useEffect } from "react";

function AllEventsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedEvents, setLoadedEvents] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://nyuad-events-6fe6a-default-rtdb.firebaseio.com/events.json")
            .then((res) => { return res.json(); })
            .then((data) => {
                let events = [];

                for (let key in data) {
                    const event = {
                        id: key,
                        ...data[key] // distribute remaining data using spread operator
                    }

                    events.push(event);
                }
                console.log(events);

                setIsLoading(false);
                setLoadedEvents(events);
            })
            .catch((e) => { console.log(e); })
    }, []);

    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    return (<div>
        <h1>All Events</h1>
        <EventList events={loadedEvents} />

    </div>);
}

export default AllEventsPage;

// useEffect - is needed to prevent a infinite loop
//unless the dependecies change, useEffect doesn't executre the contents of the function