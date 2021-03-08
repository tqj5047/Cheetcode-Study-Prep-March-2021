let suit = ['Spade', 'Heart', 'Club', 'Diamond']
let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
let convert = {
  'A': 1,
  'J': 11,
  'Q': 12,
  'K': 13
}
class Card {
  constructor(suit, number) {
    this.suit = suit;
    this.number = number;
  }
  get Number() {
    return this.number
  }
  get Suit() {
    return this.suit
  }
  get DisplayNumber() {
    if (this.number in convert) {
      return convert[this.number]
    } else {
      return this.number
    }
  }
  get color() {
    if (this.suit == 'Heart' || this.suit == 'Club') {
      return red;
    } else {
      return black
    }
  }
}
let card1 = new Card('Spade', 'J')
console.log(card1.number)
class Deck {
  constructor(cards = this.newDeck()) {
    this.cards = cards;
  }
  newDeck() {
    return suit.flatMap((suit) => {
      return number.map((number) => { return new Card(suit, number) })
    })
  }
  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      let index = Math.floor(Math.random() * (i + 1))
      let temp = this.cards[i]
      this.cards[i] = this.cards[index]
      this.cards[index] = temp
    }
  }

}
let deck = new Deck()
deck.shuffle()
console.log(deck)
