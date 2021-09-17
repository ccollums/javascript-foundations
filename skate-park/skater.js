class Skater {
  constructor({name, skill, tricks, cash}) {
    this.name = name;
    this.skill = skill;
    this.tricks = tricks;
    this.money = cash;
    this.frustration = 0;
  }

practice(trick) {
  if (trick === 'kickflip' && !this.tricks.kickflip) {
    this.frustration++;
    if (this.frustration === 3) {
      this.tricks.kickflip = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    }
  } else if (trick === 'treflip' && !this.tricks.treflip) {
      this.frustration++;
        if (this.frustration === 3) {
          this.frustration = 0;
            this.tricks.treflip = true;
            return `I just learned to ${trick}!!!`;
  }
} else if (trick === 'bigSpin' && !this.tricks.bigSpin) {
      this.frustration++;
        if (this.frustration === 3) {
          this.frustration = 0;
          this.tricks.bigSpin = true;
          return `I just learned to ${trick}!!!`;
  }
}
}
}









// if (!this.tricks.treflip) {
// } else if (!this.tricks.kickflip) {
//   this.frustration++;
// } else if (!this.tricks.bigSpin) {
//   this.frustration++;
// }


module.exports = Skater;
