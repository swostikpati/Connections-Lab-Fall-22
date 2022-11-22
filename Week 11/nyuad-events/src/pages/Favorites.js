
import { useContext } from "react";
import EventList from "../components/events/EventList";
import FavoritesContext from "../store/favorite-context";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>No favorite events yet</p>
    }
    else {
        content = <EventList events={favoritesCtx.favorites} />

    }

    return <div>
        <h1>Favorites</h1>
        {content}
    </div>;
}

export default FavoritesPage;