import PropTypes from "prop-types";

import LetterToFind from "./LetterToFind";

function WordToFind({ word }) {
    return (
        <div>
            <LetterToFind letter={word} />

            {console.log("wordToFind=", word)}
        </div>
    );
}

WordToFind.propTypes = {
    word: PropTypes.string.isRequired,
};

export default WordToFind;
