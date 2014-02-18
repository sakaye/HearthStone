//Class for a card deck
var Deck = (function() {

  //Constructor function
  function Deck(data) {
    this.id = (data) ? data.id : '';
    this.name = (data) ? data.name : '';
    this.cards = (data) ? data.cards : '';
    this.hero = (data) ? data.hero : '';
  };

  Deck.prototype.addCardToDeck = function(cardId){
    return this.cards.push(cardId);
  };

  return Deck;
})();