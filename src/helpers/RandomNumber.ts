class RandomNumber {
  static generate(min : number = 0, max : number = 10 ) {
    return Math.floor(Math.random() * (max - min)) + min
  }
}

export {RandomNumber}