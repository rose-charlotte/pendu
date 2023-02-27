import PropTypes from "prop-types";

function ReturnButton({ onClick }) {
    return <button onClick={onClick}>Return</button>;
}
ReturnButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default ReturnButton;
