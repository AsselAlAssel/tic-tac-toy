import { useEffect, useState } from "react";
import checkStatusForTheGame from "./checkStatusForTheGame";
import GameButton from "./GameButton";
import "./GamePanel.css"

const buttonsText = ["", "", "", "", "", "", "", "", ""];

const GamePanel = (props) => {
    const [gameSequence, setGameSequence] = useState(buttonsText);



    const clickGameButtonHandler = (index) => {
        buttonsText[index] = (props.count % 2 !== 0 ? "X" : "O");
        setGameSequence(buttonsText);
        props.onChangeCount();
    }

    const gameButtons = gameSequence.map((element, index) => {
        return <GameButton key={index} text={element} index={index} onClick={clickGameButtonHandler} />
    })

    useEffect(() => {
        if (props.count > 5) {
            const status = checkStatusForTheGame(gameSequence, props.count);
            props.onChangeStatus(status);
        }
    })

    return (
        <div className="gamePanel">
            <div className="gamePanel__panelButtons">
                {gameButtons}
            </div>
        </div>
    )
}

export default GamePanel;