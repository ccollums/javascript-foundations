class Roadrace {
  constructor({title, city}) {
    this.name = title;
    this.location = city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance+=miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    for (var i = 0; i <this.participants.length; i++) {
      if (this.participants[i].name && !this.participants[i].completedRaces.includes(this.name)) {
        this.participants[i].completedRaces.push(this.name)
        this.participants[i].milesRun+=this.distance;
    }
  }
}
}

module.exports = Roadrace;
