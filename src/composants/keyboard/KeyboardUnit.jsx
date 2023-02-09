import PropTypes from "prop-types";
import "./style.css";

function KeyboardUnit({ letter, onKeyboardUnitClick }) {
    const onClick = () => {
        onKeyboardUnitClick(letter);
    };

    return (
        <button type="button" className="keyboardUnit" onClick={onClick}>
            {letter}
        </button>
    );
}

KeyboardUnit.propTypes = {
    letter: PropTypes.string.isRequired,
    onKeyboardUnitClick: PropTypes.func.isRequired,
};

export default KeyboardUnit;
