class Centaur {
  constructor({name, type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.counter++;
    if (this.layingDown === true || this.counter >= 3) {
    // if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
    // } else if (this.standing === true) {
      return 'Twang!!!';
    }
  }

  run() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!'
    }
  }

  sleep() {
    if (this.layingDown = true && !this.standing) {
      this.cranky = false;
      return 'ZZZZ';
    } else {
    return 'NO!';
  }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
  } else {
    return 'Not while I\'m laying down!';
  }
}
}




module.exports = Centaur;
