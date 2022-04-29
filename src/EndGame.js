import "./EndGame.css";
const EndGame = (props) => {

    return (
        <div className="container__endGame">
            <p>{props.status}</p>
            <button onClick={() => window.location.reload()}>play again</button>

        </div>
    )
}


export default EndGame;