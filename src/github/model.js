export class GitHubRepo {
  constructor({name, stars, license, rest}) {
    this.name = name;
    this.stars = stars;
    this.license = license;
    this.rest = rest;
  }

  toString() {
    return `${this.name} has (${this.stars})stars`;
  }
}
