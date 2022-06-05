export const CalculateWinner = (array) => {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    let winner, winningMove = [];
    conditions.forEach((condition) => {
        if (array[condition[0]] == array[condition[1]] && array[condition[0]] == array[condition[2]]) {
            winner = array[condition[0]];
            if (winner) winningMove = condition;
            return
        }
    })
    console.log(`\nWinner: ${winner}\nWinning Move: ${winningMove}\n`);
    return { winner, winningMove };
}