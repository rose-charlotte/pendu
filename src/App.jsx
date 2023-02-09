import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./composants/Header";
import BodyPendu from "./composants/BodyPendu";
import Keyboard from "./composants/keyboard/Keyboard.jsx";
import WordToFind from "./composants/wordTofind/WordToFind";
import GetStarted from "./composants/GetStarted";

const data = ["a", "b", "c"];
function App() {
    const [keysPressed, setKeysPressed] = useState([]);
    const [word] = useState("bamboula");

    console.log("mon mot est", word);

    console.log("keysPressed", keysPressed);

    const onKeyPressed = letter => {
        setKeysPressed([...keysPressed, letter]);
    };

    return (
        <>
            <Header />
            <BodyPendu />
            <Keyboard keyboardValue={keysPressed} onKeyPressed={onKeyPressed} />
            <WordToFind word={word} />
            <GetStarted />
        </>
    );
}

export default App;
