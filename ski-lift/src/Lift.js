var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, skipass) {
    var skier = new Skier(name);
    skier.hasLiftTicket = skipass;
    if (skier.hasLiftTicket === true && this.limit > this.skiers.length) {
    this.skiers.push(skier);
  } else if (skier.hasLiftTicket === true) {
    return `Sorry, ${skier.name}. Please wait for the next lift!`;
  } else {
    return `Sorry, ${skier.name}. You need a lift ticket!`
  }
}

startLift() {
  var neededSkiers = this.limit-this.skiers.length
  if (this.skiers.length === this.limit) {
    this.safetyBar = 'down'
  } else if (neededSkiers > 1){
    return `We still need ${neededSkiers} more skiers!`
  } else {
    return `We still need ${neededSkiers} more skier!`
  }
}
}

module.exports = Lift;
