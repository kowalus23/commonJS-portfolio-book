export default class {
  constructor({ type, value: { id, joke, categories } }) {
    this.type = type;
    this.id = id;
    this.joke = joke;
    this.categories = categories;
  }

  showJoke() {
    alert(`${this.joke}`);
  }
}
