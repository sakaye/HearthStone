//Class for a hero
var Hero = (function() {

  //Contructor function
  function Hero(data) {
    this.id = data.id;
    this.name = data.name;
    this.heroClass = data.class;
  };

  Hero.prototype.testOutput = function(){
    return this.id + " - " + this.name + " - " + this.heroClass;
  };

  Hero.prototype.render = function(){
    var source = $("#heroPortrait").html();
    var template = Handlebars.compile(source);
    var output = template({hero : this});
    return output;
  };

  Hero.findById = function(heroId){
    var result;
    for (var i = 0, len = window.heroData.length; i < len; i++) {
      var hd = window.heroData[i];
      if (hd.id === heroId){
        result = hd;
        break;
      }
    }
    return new Hero(result);
  };

  Hero.allHeroes = function(){
    var Heroes = [];
    for (var i = 0, len = window.heroData.length; i < len; i++) {
      hero = window.heroData[i];
      heroObj = new Hero(hero);
      Heroes.push(heroObj);
    }
    return Heroes;
  }

  return Hero;
})();