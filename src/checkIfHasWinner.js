const hasEqual = (gameSequence, a, b, c) => {
    if (gameSequence[a] === "" || gameSequence[b] === "" || gameSequence[c] === "") {
        return false;
    }
    if ((gameSequence[a] === gameSequence[b]) && (gameSequence[b] === gameSequence[c])) {
        return true;
    }
}


const checkIfHasWinner = (gameSequence, count) => {
    //for check row
    for (let index = 0; index < 3; index++) {
        let start = index * 3;
        if (hasEqual(gameSequence, start, start + 1, start + 2)) {
            return `${gameSequence[start]} win`;
        }

    }

    // for check column

    for (let index = 0; index < 3; index++) {
        if (hasEqual(gameSequence, index, index + 3, index + 6)) {
            return `${gameSequence[index]} win`;
        }

    }
    if (hasEqual(gameSequence, 0, 4, 8)) {
        return `${gameSequence[0]} win`;
    } if (hasEqual(gameSequence, 2, 4, 6)) {
        return `${gameSequence[2]} win`;
    }
    if (count < 10) {
        return "";
    }

    return "equal not any one win"

}

export default checkIfHasWinner