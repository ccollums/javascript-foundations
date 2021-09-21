class VendingMachine {
  constructor({id, isBroken}) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }

  addSnacks(snackName) {
    // this.snacks.push(snackName);
    // console.log(snackName.name)
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snackName.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
  } else {
    this.snacks.push(snackName);
}
}
}
}

module.exports = VendingMachine;
