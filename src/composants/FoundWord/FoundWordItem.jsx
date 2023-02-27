import PropTypes from "prop-types";

import styles from "./FoundWordItem.module.css";

function FoundWordItem({ letter, keysPressed }) {
    return letter && keysPressed.some(key => key === letter) ? (
        <span className={styles.letter}>{letter}</span>
    ) : (
        <span className={styles.letter}>_</span>
    );
}

FoundWordItem.propTypes = {
    letter: PropTypes.string.isRequired,
    keysPressed: PropTypes.array.isRequired,
};

export default FoundWordItem;
