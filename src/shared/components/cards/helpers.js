export class CardConverter {
  constructor({ dealerCards, playerCards }) {
    this.suits = {spades: '♠︎', hearts: '♥︎', clubs: '♣︎',  diamonds: '♦︎'};
    this.values = [
      'A',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ];
    this.dealerCards = dealerCards || [];
    this.playerCards = playerCards || [];
  }

  convertDealtCards() {
    this.dealerCards = this.dealerCards.map(card => this.convertCard(card))
    this.playerCards = this.playerCards.map(card => this.convertCard(card))
  }

  convertCard(card) {
    const suitSymbol = this.suits[card.suit]
    const rankSymbol = this.values[card.rank - 1];

    return { suit: suitSymbol, value: rankSymbol };
  }
}
