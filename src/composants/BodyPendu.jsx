import PropTypes from "prop-types";

function BodyPendu({ errorCount }) {
    return (
        <div style={{ height: 264 }}>
            {errorCount === 0 ? null : <img src={`src/assets/images/Hangman-${errorCount}.png`} alt="image-pendu" />}
        </div>
    );
}

BodyPendu.propTypes = {
    errorCount: PropTypes.number.isRequired,
};

export default BodyPendu;
