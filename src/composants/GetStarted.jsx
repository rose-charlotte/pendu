import PropTypes from "prop-types";

function GetStarted({ setWord }) {
    const onGetStarted = () => {
        const response = fetch("https://trouve-mot.fr/api/random")
            .then(response => response.json())

            //.then(words => console.log(words));
            .then(words => setWord(words.at(0).name));
    };

    // const randomWord = () => {
    //     const randomNumber = Math.floor(Math.random() * 10);
    //     console.log(randomNumber);
    //     const word = [
    //         "montagne",
    //         "vacances",
    //         "voiture",
    //         "avion",
    //         "ordinateur",
    //         "telephone",
    //         "bijou",
    //         "chaise",
    //         "balancoire",
    //         "trotinette",
    //     ];

    //     return word[randomNumber];
    // };

    return (
        <button type="button" className="startButton" onClick={onGetStarted}>
            Get Started
        </button>
    );
}

GetStarted.propTypes = {
    setWord: PropTypes.func.isRequired,
};

export default GetStarted;
