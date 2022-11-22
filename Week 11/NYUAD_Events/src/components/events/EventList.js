import EventItem from "./EventItem";
import styles from "./EventList.module.css";

function EventList(props) {
    return (
        <ul className={styles.list}>
            {props.events.map((event) => {
                <EventItem key={event.id} event={event} />
            })}
        </ul>
    );

}

export default EventList;

// key attribute is always needed while returning new elements