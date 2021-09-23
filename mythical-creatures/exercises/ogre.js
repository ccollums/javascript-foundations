class Ogre {
  constructor({name, abode}) {
    this.name = name;
    this.home = abode || 'Swamp' ;
    this.swings = 0;
  }

  swingAt(human) {
      this.swings++;
    }

  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre() === true && human.encounterCounter === 6) {
      this.swings++;
      human.knockedOut = true;
    } else if (human.noticesOgre() === true) {
      this.swings++;
    }
  }

apologize(human) {
  human.knockedOut = false;
}
  }





module.exports = Ogre;
