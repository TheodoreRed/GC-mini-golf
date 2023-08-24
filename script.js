let playerName = prompt("Welcome to mini golf! What is your name?");
let totalPutts = 0;
let par, result, holes;

while (true) {
    holes = parseInt(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes?`));
    if (holes === 3 || holes === 6) break;
}

par = holes * 3;

for (let i = 1; i <= holes; i++) {
    let putts = parseInt(prompt(`How many putts for hole ${i}? (par: 3)`));
    totalPutts += putts;
}

result = totalPutts - par;
result = result > 0 ? `+${result}` : result;

if (result < 0) {
    console.log(`Great job, ${playerName}! Your total par was: ${result}.`);
} else if (result > 0) {
    console.log(`Nice try, ${playerName}! Your total par was: ${result}.`);
} else {
    console.log(`Good game, ${playerName}! Your total par was: ${result}.`);
}