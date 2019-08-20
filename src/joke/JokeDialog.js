export default class {
  constructor({ id, punchline, setup, type }) {
    this.id = id;
    this.punchline = punchline;
    this.setup = setup;
    this.type = type;
  }

  showJoke() {
    alert(`- ${this.punchline} \n - ${this.setup}`);
  }

  isTypeProgramming() {
    return this.type === 'programming';
  }
}
