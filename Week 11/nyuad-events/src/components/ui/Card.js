import styles from "./Card.module.css";

function Card(props) {
    return (<div className={styles.card}>
        {props.children}
    </div>);
}

export default Card;

// .children() is a special prop that every component receives by default and bascially provides everything within the tags