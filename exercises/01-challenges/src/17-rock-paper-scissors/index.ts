/**
 * Abigail and Benson are playing Rock, Paper, Scissors.
 * Each game is represented by an array of length 2, 
 * where the first element represents what Abigail played and the second element represents what Benson played.
 * Given a sequence of games, determine who wins the most number of matches and output the winners name. If they tie, output "Tie!".
 * R stands for Rock
 * P stands for Paper
 * S stands for Scissors
 */

function rockPaperScissors(games: string[][]) {
    let abigail = 0;
    let benson = 0;
    games.forEach(item => {
        if (item[0] === item[1]) {
            return
        } else {
            if (item[0] === `R` && item[1] === `S` || item[0] === `P` && item[1] === `R` || item[0] === `S` && item[1] === `P`) {
                abigail++
            } else {
                benson++
            }
        }
    })
    if (abigail === benson) {
        return `Tie!`
    } else {
        if (abigail > benson) {
            return `Abigail`
        }
    }
    return `Benson`
}

export { rockPaperScissors };