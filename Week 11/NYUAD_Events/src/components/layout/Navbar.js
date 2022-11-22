import { Link } from "react-router-dom"

import styles from "./Navbar.module.css";
//styles (can be any name) is a JS object where everything that we define in CSS will be properties

function Navbar() {
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
                    </li>
                </ul>
            </nav>

        </header>


    )
}

export default Navbar;

//Comments:
//Link prevents making requests to the server and instead loads the required component into the screen

{/* <header class="header" id="heading1">
    <!-- Logo -->
    <a href="./index.html" id="logo"><img src="./assets//typerrr_logo.png" alt="logo"></a>
    <nav>
        <ul class="nav_links">
            <!-- Linking Navbar options to different sections of the website -->
            <li><a href="#lb_heading">Leaderboard</a></li>
        </ul>
    </nav>
</header> */}