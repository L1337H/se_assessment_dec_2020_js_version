initial = {
    1: [1, 0, 0],
    2: [2, 1, 2],
    3: [2, 1, 0],
}

function getColor(board, pos) {
    color = 0
    for (let i = 0; i < board[pos].length; i++) {
        const item = board[pos][i];
        if (item != 0) {
            color = item
        } else {
            break
        }
    }
    return color
}


function getSpace(board, pos) {
    space = 0

    for (let i = board[pos].length - 1; i >= 0; i--) {
        const item = board[pos][i];

        if (item === 0) {
            space++
        } else {
            break
        }
    }

    return space
}

function editBoard(board, endPos, pos) {
    let color = null

    for (let i = board[pos].length - 1; i >= 0; i--) {
        const item = board[pos][i];

        if (item != 0) {
            color = item
            board[pos][i] = 0

            break
        }
    }

    for (let i = board[pos].length - 1; i >= 0; i--) {
        const item = board[pos][i];

        if (item === 0) {
            board[endPos][i] = color
            break
        }
    }

    return board
}

function move(board, pos, endPos, lastColor) {
    if (pos === endPos) {
        return false
    }

    if (getSpace(board, pos) === 3) {
        return false
    }

    if (getSpace(board, endPos) === 0) {
        return false
    }

    moveColor = getColor(board, endPos)
    endColor = getColor(board, pos)

    if (moveColor !== endColor && endColor !== 0) {
        return false
    }

    // hier breakt es
    board = editBoard(board, pos, endPos)

    if (getColor(board, pos) === moveColor) {
        // console.log((board, endPos, pos))
        // console.log((move(newBoard, endPos, pos)))
        state = move(board, endPos, pos, endColor)

        if (!state) {
            return false
        }
    }

    return true
}

function firstMove(board, pos, endPos) {
    return move(board, pos, endPos, null)
}

console.log(firstMove(initial, 3, 1))
console.log(firstMove(initial, 1, 3))
console.log(firstMove(initial, 2, 3))
console.log(firstMove(initial, 2, 2))
console.log(firstMove(initial, 3, 2))
// console.log((getColor(initial, 1)))
// console.log((getSpace(initial, 1)))
// console.log((getColor(initial, 2)))
// console.log((getSpace(initial, 2)))
// console.log((getColor(initial, 3)))
// console.log((getSpace(initial, 3)))