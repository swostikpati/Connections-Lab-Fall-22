import Card from "../ui/Card";
import styles from "./EventItem.module.css";
import { useContext } from "react";

import FavoritesContext from "../../store/favorite-context";

function EventItem(props) {
    const event = props.event;
    const favoritesCtx = useContext(FavoritesContext);
    const itemFavorite = favoritesCtx.checkFavorite(event.id);

    function favoriteStatusHandler() {
        if (itemFavorite) {
            favoritesCtx.removeFavorite(event.id);
        }
        else {
            favoritesCtx.addFavorite(event);
        }

    }
    return (
        // <div>Yo</div>
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={event.img} alt={event.title}></img>
                </div>
                <div className={styles.content}>
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <p>{event.desc}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={favoriteStatusHandler}>{itemFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
                </div>
            </Card>
        </li>
    );
}

export default EventItem;

//useContext allows us to make a link with the context