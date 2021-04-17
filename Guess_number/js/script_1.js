let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Event on check button
document.querySelector('.check').addEventListener('click', function() {
    
    let guessNumber = Number(document.querySelector('.guess').value);
    // console.log(guessNumber, typeof guessNumber);

    // When no input
    if (!guessNumber) {
        displayMessage('⛔️ NO input !!');

    // When guess right number
    } else if (guessNumber === randomNumber){
        displayMessage('🤩 Yeahhhhh !!');
        document.querySelector('.inner_number').textContent = randomNumber;

        document.querySelector('.inner_number').style.fontSize = '15rem';
        document.querySelector('body').style.backgroundColor = '#754646';
        document.querySelector('.inner_number').style.backgroundColor = '#222';
        document.querySelector('.inner_number').style.color = '#fff';
        document.querySelector('.guess').style.display = 'none';
        document.querySelector('.check').style.display = 'none';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
        // When guess higher or lower and check score
    } else if (score > 1) {
        if (guessNumber !== randomNumber) {
            displayMessage(guessNumber > randomNumber ? "📈 Too High !!" : "📉 Too Low !!");
            score--
            document.querySelector('.score').textContent = score;
        }
    } else {
        displayMessage('🤪 You Lost !!');
        document.querySelector('.score').textContent = 0;
        document.querySelector('.guess').style.display = 'none';
        document.querySelector('.check').style.display = 'none';
    }
})

// Event on again button
document.querySelector('.again').addEventListener('click', function() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    // console.log(randomNumber);
    score = 20;

    document.querySelector('.inner_number').textContent = '?';
    document.querySelector('.inner_number').style.fontSize = '12rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.check').style.display = 'block';
    document.querySelector('.guess').style.display = 'block';
    document.querySelector('.guess').value = '';

    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
})
