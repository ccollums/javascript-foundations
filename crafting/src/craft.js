class Craft {
  constructor({type, materials}) {
    this.name = type
    this.materials = materials;
    this.completed = false;
    this.cost = 0;
  }

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!'
  }

  calculateProjectTotal() {
    for (var i = 0; i < this.materials.length; i++) {
      this.cost += this.materials[i].calculateMaterialCost();
    }
    return this.cost;
  }
}

module.exports = Craft;
