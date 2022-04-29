import { useState } from "react";
import EndGame from "./EndGame";
import GamePanel from "./GamePanel";
import NamesOfPlayers from "./NamesOfPlayers";
import "./App.css"

const App = () => {
  const [statusGame, setStatusGame] = useState("");
  const [count, setCount] = useState(1);
  const onChangeCount = () => {
    setCount(count => count + 1);
  }
  const onChangeStatus = (newStatus) => {
    setStatusGame(newStatus);
  }
  return (
    <div className="container">
      <NamesOfPlayers />
      <h2 className="container__turn">{count % 2 !== 0 ? "X" : "O"} turn</h2>
      <GamePanel onChangeStatus={onChangeStatus} onChangeCount={onChangeCount} count={count} />
      {statusGame && <EndGame status={statusGame} />}
    </div>
  )
}

export default App;