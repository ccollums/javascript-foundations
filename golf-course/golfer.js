class Golfer {
  constructor({name, handicap}) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

calculateAvg(par) {
  var sum = this.handicap + par;
  return `I usually shoot a ${sum} on average.`
}

playRound(golfcourse) {
  if (golfcourse.difficulty === 'hard') {
    this.frustration = 500;
  } else if (golfcourse.difficulty === 'moderate') {
    this.frustration = 100;
  }
  }

hitTheRange() {
  this.confidence+=10;
}

marvel(golfcourse) {
  if (golfcourse.features.includes('great views', 'wildlife')) {
    return 'I love the great views and wildlife on this course!';
  } else if (golfcourse.features.includes('undulating greens', 'creative layout')) {
    return 'I love the undulating greens and creative layout on this course!';
  }
}

whatYaShoot(num) {
  if (num === 0) {
    this.frustration = 10;
    return 'Booyah!';
  } else if (num >= 0) {
    this.frustration+=20;
    return 'Doh!';
  } else if (num <= 0) {
    this.frustration = 0;
    return 'I AM THE GREATEST GOLFER ALIVE!';
  }
}

}


module.exports = Golfer;
