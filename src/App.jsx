import { useEffect, useState } from "react";
import "./App.css";
import Header from "./composants/Header";
import BodyPendu from "./composants/BodyPendu";
import Keyboard from "./composants/keyboard/Keyboard.jsx";

import GetStarted from "./composants/GetStarted";
import FoundWord from "./composants/FoundWord/FoundWord";
import WonPage from "./composants/WonPage";
import LostPage from "./composants/LostPage";
import ReturnButton from "./composants/ReturnButton";

const GameStatus = {
    Lost: "Lost",
    NotStarted: "NotStarted",
    Playing: "Playing",
    Won: "Won",
};

function App() {
    const [keysPressed, setKeysPressed] = useState([]);
    const [word, setWord] = useState();
    const [errorCount, setErrorCount] = useState(0);
    const [gameStatus, setGameStatus] = useState(GameStatus.NotStarted);

    const onGetStarted = newWord => {
        setKeysPressed([]);
        setErrorCount(0);
        setWord(newWord);
        setGameStatus(GameStatus.Playing);
    };

    console.log("mon mot est", word);

    console.log("keysPressed", keysPressed);

    const onKeyPressed = letter => {
        setKeysPressed([...keysPressed, letter]);
    };

    useEffect(() => {
        if (!word) return;

        const letterArray = word.split("");

        const errors = keysPressed.reduce(
            (errCount, key) => (letterArray.some(letter => letter === key) ? errCount : errCount + 1),
            0
        );

        setErrorCount(errors);

        if (errors === 7) {
            setGameStatus(GameStatus.Lost);
        }

        if (letterArray.every(letter => keysPressed.includes(letter))) {
            setGameStatus(GameStatus.Won);
        }
    }, [keysPressed]);

    const onClick = () => {
        console.log("je return");
        setGameStatus(GameStatus.NotStarted);
    };
    return (
        <>
            <Header />
            {gameStatus === GameStatus.Playing && (
                <>
                    <BodyPendu errorCount={errorCount} />
                    <FoundWord word={word} keysPressed={keysPressed} />
                    <Keyboard keyboardValue={keysPressed} onKeyPressed={onKeyPressed} />

                    <ReturnButton gameStatus={gameStatus} onClick={onClick} />
                </>
            )}
            {gameStatus === GameStatus.Won && <WonPage />}
            {gameStatus === GameStatus.Lost && <LostPage />}
            {gameStatus !== GameStatus.Playing && <GetStarted setWord={onGetStarted} />}
        </>
    );
}

export default App;
