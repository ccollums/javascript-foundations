class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
    this.cursed = false;
  }

  robShip() {
    if (this.booty <= 400) {
    this.booty += 100;
    return 'YAARRR!'
  }
    if (this.booty >= 500) {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!'
    }
  }

  liftCurse() {
    if (this.booty >= 500) {
    this.booty -= 300;
    this.cursed = false;
    return 'Your curse has been lifted!'
  } else {
    return 'You don\'t need to lift a curse!'
  }
  }
}


module.exports = Pirate;
