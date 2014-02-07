

//get a random card
var randomCard = Card.randomCard();

//get all cards
var allCards = Card.allCards();
// console.log(allCards);

var findCard = Card.findById(4);
// console.log(find);

var findHero = Hero.findById(3);
console.log(findHero.testOutput());
var allHeroes = Hero.allHeroes();

//can check things on object
console.log(randomCard.id);
//can call prototype methods on this instance
console.log(randomCard.testOutput());
//render out to the page.
$(".randomCard").html(randomCard.render());
$(".findBy").html(findCard.render());

var heroHtml;
for (var i = 0, len = allHeroes.length; i < len; i++){
  heroHtml += allHeroes[i].render();
}

$(".portraits").html(heroHtml);

var html;
for (var i = 0, len = 10; i < len; i++) {
  html += allCards[i].render();
};

$("#card-list").html(html);


//creating with new syntax
var customCard = new Card({
	id : 1,
	name : "Custom Card"
});

//can call prototype methods on this instance
console.log(customCard.testOutput());

