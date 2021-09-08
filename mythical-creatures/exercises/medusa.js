var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
  var scaredStatue = new Statue(victim.name)
  if (this.statues.length <= 2) {
    this.statues.push(scaredStatue);
  } else if (this.statues.length >= 3) {
    var releasedVictim = new Person(this.statues[0].name)
    this.statues.shift();
    this.statues.push(scaredStatue);
    releasedVictim.mood = 'relieved';
    return releasedVictim;
  }
}
}





module.exports = Medusa;
