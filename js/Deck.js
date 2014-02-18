//Class for a card deck
var Deck = (function() {

  //Constructor function
  function Deck(data) {
    this.id = (data) ? data.id : '';
    this.name = (data) ? data.name : '';
    this.cards = (data) ? data.cards : [];
    this.hero = (data) ? data.hero : '';
  };

  Deck.prototype.addCardToDeck = function(cardId){
    var card = { "cardId":cardId };
    var index = this.cards.indexOf(card);
    console.log(index);
    if ( index == -1 ){ //card is not found in the array
      card.qty = 1;
      this.cards.push(card);
    }
    else { //card is found in the array and we need to update the qty or remove
      card = this.cards[index];
      if ( card.qty >= 2 ){ //if the card qty has 2 or more we need to remove the card
        this.cards.splice(index, 1);
      }
      else { //update the cards qty to 2
        card.qty = 2;
        this.cards.splice(index, 1);
        this.cards.push(card);
      }
    }
  };

  return Deck;
})();