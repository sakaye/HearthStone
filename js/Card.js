//Class for a single card
var Card = (function() {

	// Constuctor function
	// this function gets returned along with any prototype
	// or static calls and whenever "new Card({id : 3, name : 'test'})"
	// gets called.
	function Card(data) {
		//var rarities = ["Free","Common","Uncommon","Rare","Epic"];
		this.id = data.id;
		this.name = data.name;
		this.abilities = data.abilities;
		this.rarity = data.rariety;
		this.heroClass = data.class;
		this.cost = data.cost;
		this.type = data.type;
	};

	// prototype methods are able to use this syntax once an instance
	// has been created. (new Card({id : 3, name: "Argent Commander"}))
	Card.prototype.testOutput = function(){
		return this.id + " - " + this.name + " - " + this.type;
	};

	Card.prototype.render = function(){
		var displayRarity = Card.getRarity(this.rarity);
		//get the html
		var source = $("#fullCard").html();
		var template = Handlebars.compile(source);
		//get the dynamic output, and pass this instance of the card data in.
		var output = template({card : this, rarity : displayRarity});
		return output;
	};

	//this is a static function that is called by using
	// Card.findById(3) instead of new syntax
	Card.findById = function(cardId){
		//we will fill this card when we find the right id
		var result;
		//loop through and find the card with the correct id
		for (var i = 0, len = window.cardData.length; i < len; i++){
			var cd = window.cardData[i];
			if (cd.id === cardId){
				//found it set data and break out of loop
				result = cd;
				break;
			}
		}
		//create an instance of this card with the right data.
		return new Card(result);
	};

	Card.randomCard = function(){
		var randomIndex = Math.round(Math.random() * window.cardData.length);
		var randomCardData = window.cardData[randomIndex];
		return new Card(randomCardData);
	};

	Card.allCards = function(){
		var cards = [];
		for (var i = 0, len = window.cardData.length; i < len; i++){
			cd = window.cardData[i];
			currentCard = new Card(cd);
			cards.push(currentCard);
		}
		return cards;
	}

	Card.getRarity = function(rarityId){
		var rarities = ["Free","Common","Uncommon","Rare","Epic"];
		return rarities[rarityId];
	};

	Card.filterByHero = function(heroClass){
		var cards = [];
		for (var i = 0, len = window.cardData.length; i < len; i++){
			cd = window.cardData[i];
			if (cd.class === heroClass || cd.class === ""){
				currentCard = new Card(cd);
				cards.push(currentCard);
			}
		}
		return cards;
	};

	return Card;
})();











