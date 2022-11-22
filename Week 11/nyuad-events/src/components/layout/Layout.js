import Navbar from "./Navbar";
import styles from "./Layout.module.css";

function Layout(props) {
    return (
        <div>
            <Navbar />
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;