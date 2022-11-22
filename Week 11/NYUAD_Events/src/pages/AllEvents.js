import EventList from "../components/events/EventList";

const data = [
    {
        id: "e1",
        title: "First Event",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        date: "",
        location: "",
        description: ""
    },
    {
        id: "e2",
        title: "Second Event",
        img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        date: "",
        location: "",
        description: ""
    }
]

function AllEventsPage() {
    return (<div>
        <h1>All Events</h1>
        <EventList events={data} />

    </div>);
}

export default AllEventsPage;

/* <ul>
    {data.map((event) => {
        return <li key={event.id}>{event.title}</li>
    })}
</ul> */