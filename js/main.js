

//get a random card
var randomCard = Card.randomCard();
//can check things on object
console.log(randomCard.id);
//can call prototype methods on this instance
console.log(randomCard.testOutput());
//render out to the page.
$(".randomCard").html(randomCard.render());


//creating with new syntax
var customCard = new Card({
	id : 1,
	name : "Custom Card"
});

//can call prototype methods on this instance
console.log(customCard.testOutput());

