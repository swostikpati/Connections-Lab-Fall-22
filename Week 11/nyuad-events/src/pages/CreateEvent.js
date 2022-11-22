import CreateEventForm from "../components/events/CreateEventForm";
import { useNavigate } from "react-router-dom";


function CreateEventsPage() {
    const navigate = useNavigate();

    function addEventHandler(eventData) {
        //make sure to add .json in the end of the url
        fetch("https://nyuad-events-6fe6a-default-rtdb.firebaseio.com/events.json", {
            method: "POST",
            body: JSON.stringify(eventData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => {
                navigate("/");
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            <h1>Create New Event</h1>
            <CreateEventForm onCreateEvent={addEventHandler} />
        </div>

    );
}

export default CreateEventsPage;

// useNavigate allows us to navigate back - new form of useHistory