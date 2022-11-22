import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import FavoritesContext from "../../store/favorite-context";
import { useContext } from "react";
import logo from "../../assets/nyuad_events_logo.png";
//styles (can be any name) is a JS object where everything that we define in CSS will be properties

function Navbar() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={styles.header} id={styles["#heading1"]}>
            {/* <div>Logo</div> */}
            <img className={styles.logo} src={logo} alt="logo"></img>
            <nav>
                <ul className={styles.nav_links}>
                    <li>
                        <Link to="/">All Events</Link>
                    </li>
                    <li>
                        <Link to="/create-event">Create Event</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites<span className={styles.fav_span}>{favoritesCtx.totalFavorites}</span></Link>

                    </li>
                </ul>
            </nav>

        </header >


    )
}

export default Navbar;

//Comments:
//Link prevents making requests to the server and instead loads the required component into the screen

