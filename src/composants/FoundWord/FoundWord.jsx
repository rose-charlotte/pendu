import FoundWordItem from "./FoundWordItem";
import PropTypes from "prop-types";

function FoundWord({ word, keysPressed }) {
    return word
        .split("")
        .map((letter, index) => (
            <FoundWordItem letter={letter} keysPressed={keysPressed} key={`${word.length}_${index}`} />
        ));
}

FoundWord.propTypes = {
    word: PropTypes.string.isRequired,
    keysPressed: PropTypes.array.isRequired,
};
export default FoundWord;
