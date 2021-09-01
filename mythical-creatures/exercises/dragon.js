

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eating = 0;
   }
   greet() {
     return `Hi, ${this.rider}!`;
   }

   eat() {
     this.eating ++;
    if (this.eating === 3) {
      return this.hungry = false;
    }
  }
}










module.exports = Dragon;
