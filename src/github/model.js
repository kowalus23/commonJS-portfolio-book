export class GitHubRepo {
  constructor({name, stars, license, rest}) {
    this.name = name;
    this.stars = stars;
    this.license = license;
    this.rest = rest;
  }

  get starsInfo() {
    return this.stars > 0 ? `has (${this.stars}) stars` : '';
  }

  toString() {
    return `${this.name} ${this.starsInfo}`;
  }
}
