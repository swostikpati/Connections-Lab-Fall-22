import EventList from "../components/events/EventList";
import { useState, useEffect } from "react";

// const data = [
//     {
//         id: "e1",
//         title: "Game Night",
//         img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//         date: "2022-12-20",
//         location: "Baraha",
//         description: "Come and play games"
//     },
//     {
//         id: "e2",
//         title: "Midnight breakfast",
//         img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
//         date: "2023-03-02",
//         location: "Dining Hall East",
//         description: "Have Amazing food"
//     }
// ]

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