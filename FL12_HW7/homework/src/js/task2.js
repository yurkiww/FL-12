let game = confirm('Do you want to play a game?');
let attempts = 3;
let prize = 100;
let range = 9;

if (game) {
  let randNum = Math.floor(Math.random() * range);
  console.log(randNum);

  while (attempts !== 0) {
    let attempt = prompt(`
    Enter a number from 0 to 8
    Attempts left: ${attempts}
    Total prize: 
    Possible prize in current attempt: ${prize}
    `);

    attempt = Number(attempt);
    if (randNum === attempt && attempts === 3) {
      break;
    } else if (randNum === attempt && attempts === 2) {
      prize = prize - 50;
      break;
    } else if (randNum === attempt && attempts === 1) {
      prize = prize - 75;
      break;
    }

    attempts--;
    console.log(attempts);
  }

  alert(`Thank you for your participation. Your prize is: ${prize}$`);
} else {
  alert('You did not become a billionaire, but can.');
}
