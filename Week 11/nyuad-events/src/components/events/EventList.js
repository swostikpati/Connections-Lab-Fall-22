import EventItem from "./EventItem.js";
import styles from "./EventList.module.css";

function EventList(props) {
    return (
        <ul className={styles.list}>
            {
                props.events.map((event) => {
                    console.log(event);
                    return <EventItem key={event.id} event={event} />
                    //returning something in .map() is extremely important
                })
            }
        </ul>
    );

}

export default EventList;

// key attribute is always needed while returning new elements