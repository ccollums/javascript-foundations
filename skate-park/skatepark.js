class SkatePark {
  constructor({name, year, type, features, isPrivate, price}) {
    this.name = name;
    this.yearFounded = year;
    this.style = type;
    this.features = features;
    this.isPrivate = isPrivate || false;
    this.cost = price || 0;
    this.occupants = [];
  }


  admit(skater) {
    if (this.isPrivate && this.occupants <= 2) {
      if (skater.money >= this.cost) {
        var newMoney = skater.money - this.cost;
        skater.money = newMoney;
      } else {
          return `Sorry, you don't have enough money.`;
      }
      this.occupants.push(skater);
      return `Welcome to Curbside, the cost will be $${this.cost}.00.`;
    } else if (this.occupants <= 2) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
  } else if (this.occupants === 3) {
    return `Sorry, we are at max capacity. Thank you for understanding.`;
}
console.log(this.occupants)
console.log(skater)
}
}


module.exports = SkatePark;
