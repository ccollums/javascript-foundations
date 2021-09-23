class LunchBox {
  constructor({owner, madeOf, shape, color}) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.snacks = [];
  }

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnack = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy() === true) {
        healthySnack.push(this.snacks[i].type);
      }
      }
      return healthySnack;
    }
  }


module.exports = LunchBox;
