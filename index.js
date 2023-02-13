//Time to play WAR

//defining what makes up a player
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

//our players have arrived
let player1 = new Player('KC');
console.log(`Welcome player 1: ${player1.name}`)
let player2 = new Player('CW');
console.log(`Welcome player 2: ${player2.name}`)

//create a deck of 52 cards with suits and values
class Cards {
    constructor() {
        this.suited = ['\u2660', '\u2665', '\u2663', '\u2666'];
        this.faced = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        this.valued = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.card = [];
        console.log(this.suited);
    }

//I wanted to print the cards to the console, before they got shuffled
    createCards() { 
        for(let c = 0; c < this.suited.length; c++) {
            for(let d = 0; d < this.faced.length; d++) {
                const cardSuit = this.suited[c];
                const cardValue = this.valued[d];
                const cardFace = this.faced[d];
                this.card.push({cardSuit, cardValue, cardFace})
            }
        }
        console.log("The Full Deck: ", this.card)
    }
}

let allCards = new Cards()
allCards.createCards();

//methods to:
    //create deck
    //shuffle
    //deal 
//for loop to iterate over the suits and faces 
//then push the cards to the deck  
class Deck {
    constructor() {
        this.suits = ['\u2660', '\u2665', '\u2663', '\u2666'];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        this.deck = [];
    }    
    createDeck() { 
        for(let s = 0; s < this.suits.length; s++) {
            for(let f = 0; f < this.faces.length; f++) {
                const suit = this.suits[s];
                const numValue = this.values[f];
                const faceValue = this.faces[f];
                this.deck.push({suit, numValue, faceValue})
            }
        }
    }

//time to shuffle - fisher yates style
    shuffleDeck() {
        for(let i = this.deck.length -1; i > 0; i--) {
            let a = Math.floor(Math.random() * i);
            let shuffle = this.deck[i];
            this.deck[i] = this.deck[a];
            this.deck[a] = shuffle;
        }
        console.log("The Shuffled Deck: ", this.deck)
    }


//deal to the players
    dealDeck() {
        player1.hand = this.deck.slice(0, 26);
        console.log(player1.name,"'s hand equals 26 cards: ", player1.hand)
        player2.hand = this.deck.slice(26, 52);
        console.log(player2.name,"'s hand equals 26 cards: ", player2.hand)
    }   
}

//testing to make sure the hands got split
/*
function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}
*/

function testThis(x) {
    if(x != 26) {
        throw new Error('Players can not have more than 26 cards');
    }
    return x;
}


//why don't template literals work for this? This returns:
//"KC's hand equals 26 cards: [object Object]"
//        player1.hand = this.deck.slice(0, 26);
//        console.log(`${player1.name}'s hand equals 26 cards: ${player1.hand}`)
//        player2.hand = this.deck.slice(26, 52);
//        console.log(`${player2.name}'s hand equals 26 cards: ${player2.hand}`)
//    }   
//}

let cardDeck = new Deck()
cardDeck.createDeck();
cardDeck.shuffleDeck();
cardDeck.dealDeck();

//time to play
class War {
    //comparing the cards with conditionals to see who wins each round
    compareCards() {
        for (let round = 0; round < 26; round++) {
            console.log(player1.name, player1.hand[round]);
            console.log(player2.name, player2.hand[round]);

            if(player1.hand[round].numValue > player2.hand[round].numValue) {
                player1.score += 1;
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player1.name} wins.
                
                `)
            } else if(player2.hand[round].numValue > player1.hand[round].numValue) {
                player2.score += 1;
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`${player2.name} wins.
                
                `)
            } else {
                console.log(`${player1.name} score: ${player1.score}`)
                console.log(`${player2.name} score: ${player2.score}`)
                console.log(`This round is a tie.
                
                `)   
            }  
        }
    }

    whoWon() {
        //conditionals to determine who has higher score
        if(player1.score > player2.score) {
            console.log(`${player1.name} won the game.`)
        } else if (player2.score > player1.score) {
            console.log(`${player2.name} won the game.`)
        } else {
            console.log(`The game finished in a tie.`)
        }
    }
}

let startGame = new War();
startGame.compareCards();
startGame.whoWon();

