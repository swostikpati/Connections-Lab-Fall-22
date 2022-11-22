import Card from "../ui/Card";
import styles from "./CreateEventForm.module.css";
import { useRef } from "react";


function CreateEventForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const dateInputRef = useRef();
    const locationInputRef = useRef();
    const descInputRef = useRef();

    function formSubmitHandler(e) {
        e.preventDefault();

        let eventData = {};

        eventData["title"] = titleInputRef.current.value;
        eventData["img"] = imageInputRef.current.value;
        eventData["date"] = dateInputRef.current.value;
        eventData["location"] = locationInputRef.current.value;
        eventData["desc"] = descInputRef.current.value;

        // console.log(eventData);
        props.onCreateEvent(eventData);
    }

    return (
        <Card>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <div className={styles.control}>
                    <label htmlFor="title">Event Title</label>
                    <input type="text" id="title" ref={titleInputRef} required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="image">Event Banner</label>
                    <input type="url" id="image" ref={imageInputRef} required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="date">Event Date</label>
                    <input type="date" id="date" ref={dateInputRef} required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="location">Event Location</label>
                    <input type="text" id="location" ref={locationInputRef} required />
                </div>
                <div className={styles.control}>
                    <label htmlFor="description">Event Description</label>
                    <textarea type="text" id="description" rows="4" ref={descInputRef} required />
                </div>
                <div className={styles.actions}>
                    <button>Add Event</button>
                </div>
            </form>
        </Card>
    );
}

export default CreateEventForm;

// htmlFor is used instead of for - JS keyword
// useRef persists the results from mutable objects
