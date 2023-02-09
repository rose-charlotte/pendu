import PropTypes from "prop-types";
import { useState } from "react";

import KeyboardUnit from "./KeyboardUnit";
import "./style.css";

function Keyboard({ onKeyPressed }) {
    const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    return (
        <div className="keyboard">
            {letters.map(letter => (
                <KeyboardUnit key={letter} letter={letter} onKeyboardUnitClick={onKeyPressed} />
            ))}
        </div>
    );
}

Keyboard.propTypes = {
    onKeyPressed: PropTypes.func.isRequired,
};

export default Keyboard;
