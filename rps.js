'use strict';
function rockPaperScissorLizardSpock(hand) {
    if (hand !==1 && hand !== 2 && hand !== 3 && hand !== 4 && hand !== 5 && hand !== 6 && hand !== 7 && hand !== 8 && hand !== 9) {
        throw new Error('Not a valid Argument');
    }

    const randomNum = Math.floor(Math.random() * 9) + 1;

    if (hand === randomNum) {
        return 'The game is tied'
    }

    if (hand === 1) {
        if (randomNum === 2) {
            return 'You Lose! Scissors cuts paper'
        }else {
            return 'You Win! Paper covers Rock'
        }
    }

    if (hand === 3) {
        if (randomNum === 4) {
            return 'You Lose! Rock crushes Lizard'
        }else {
            return 'You Win! Lizard poisons Spock'
        }
    }

    if (hand === 5) {
            if (randomNum === 6) {
                return 'You Lose, Spock smashes Scissors'
            }else {
                return 'You Win! Scissors decapitates Lizard'
            }
    }

    if (hand === 7) {
            if (randomNum === 8) {
             return 'You Lose! Lizard eats Paper'
            }else {
            return 'You Win! Paper disproves Spock'
         }
    }
    
    if (hand === 9) {
            if (randomNum === 10) {
                return 'You Lose! Spock vaporizes Rock'
            }else {
                return 'You Win! Rock crushes Scissors'
        }
    }
       
}

try {
    console.log(rockPaperScissorLizardSpock(1));
    console.log(rockPaperScissorLizardSpock(2));
    console.log(rockPaperScissorLizardSpock(3));
    console.log(rockPaperScissorLizardSpock(4));
    console.log(rockPaperScissorLizardSpock(5));
    console.log(rockPaperScissorLizardSpock(6));
    console.log(rockPaperScissorLizardSpock(7));
    console.log(rockPaperScissorLizardSpock(8));
    console.log(rockPaperScissorLizardSpock(9));
    console.log(rockPaperScissorLizardSpock(10));
}catch(e) {
    console.error(e.message);
}