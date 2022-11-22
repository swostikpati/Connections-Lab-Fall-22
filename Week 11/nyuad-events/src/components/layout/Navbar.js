import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import FavoritesContext from "../../store/favorite-context";
import { useContext } from "react";
//styles (can be any name) is a JS object where everything that we define in CSS will be properties

function Navbar() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header} id={styles["#heading1"]}>
            <div>Logo</div>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link to="/">All Events</Link>
                    </li>
                    <li>
                        <Link to="/create-event">Create Events</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                        <span>{favoritesCtx.totalFavorites}</span>
                    </li>
                </ul>
            </nav>

        </header>


    )
}

export default Navbar;

//Comments:
//Link prevents making requests to the server and instead loads the required component into the screen

