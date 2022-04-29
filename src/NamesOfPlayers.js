import { useEffect, useState } from "react";
import "./NamesOfPlayers.css";
const initial = ["", ""];
const NamesOfPlayers = () => {

    const [players, setPlayers] = useState(initial);

    useEffect(() => {
        const firstPlayerText = prompt("enter your name (first one (X))");
        const secondPlayerText = prompt("enter your name (second one (O))");
        setPlayers([firstPlayerText, secondPlayerText]);

    }, []);
    return (

        <div className="nameOfPlayers">
            <span>first player :{players[0]}</span>
            <span>{players[1]}: second player</span>
        </div>
    )

}
export default NamesOfPlayers;