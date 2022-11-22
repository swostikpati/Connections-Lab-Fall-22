import styles from "./EventItem.module.css";

function EventItem(props) {
    const { event } = props;
    console.log(event);
    return (
        <li className={styles.item}>
            <div className={styles.image}>
                <img src={event.image} alt={event.title}></img>
            </div>
            <div className={styles.content}>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
            </div>
            <div className={styles.actions}>
                <button>Add to Favorites</button>
            </div>
        </li>
    );
}

export default EventItem;