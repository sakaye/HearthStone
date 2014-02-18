

//get all cards
var allCards = Card.allCards();

//render out all cards
var cardHtml = '';
for (var i = 0, len = allCards.length; i < len; i++) {
  cardHtml += allCards[i].render();
};

$("#card-list").html(cardHtml);


//get all heroes
var allHeroes = Hero.allHeroes();

//render out heroes
var heroHtml = '';
for (var i = 0, len = allHeroes.length; i < len; i++){
  heroHtml += allHeroes[i].render();
}
var portraits = $(".portraits");
portraits.html(heroHtml);

//function to select a hero for a deck
portraits.on("click", ".portrait", function(){
  //get the hero's class
  heroClass = $(this).data("heroclass");

  //change background color so signal selected hero
  portraits.find(".is-active").removeClass("is-active");
  $(this).parent(".hero").addClass("is-active");

  //filter cards based on hero selected
  var filteredCards = Card.filterByHero(heroClass);

  //render out all flitered cards
  var cardHtml = '';
  for (var i = 0, len = filteredCards.length; i < len; i++) {
    cardHtml += filteredCards[i].render();
  };
  $("#card-list").html(cardHtml);
});











