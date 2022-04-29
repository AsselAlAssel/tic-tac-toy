const GameButton = (props) => {
    const buttonClickHandler = (event) => {
        props.onClick(event.target.getAttribute('data-index'))

    }
    return (

        <button
            data-index={props.index}
            onClick={event => buttonClickHandler(event)}
            className={props.text.length >= 1 ? "disable" : null}
        >{props.text}</button>
    )
}
export default GameButton;