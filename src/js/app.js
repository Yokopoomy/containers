export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    this.characters.forEach((element) => {
      if (JSON.stringify(element) === JSON.stringify(character)) {
        throw new Error('Already on the team');
      }
    });
    this.characters.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.characters.add(character);
    });
  }

  toArray() {
    return [...this.characters];
  }
}
