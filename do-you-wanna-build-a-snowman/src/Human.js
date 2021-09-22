var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {snowballs: 0, coal: 0, buttons: 0, carrots: 0}
  }

gatherMaterials(material, amount) {
  this.materials[material] += amount;
}

buildASnowman() {
  var snowman1 = new Snowman(this.materials);
  return snowman1;
}

placeMagicHat() {
  var snowman2 = new Snowman(this.materials);
  snowman2.canWearMagicHat();
  if (!snowman2.magicHat) {
    return `I guess I didn\'t build it correctly.`
  } else {
    return `Woah, this snowman is coming to life!`;
  }
}
}


module.exports = Human;
