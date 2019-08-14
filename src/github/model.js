export class GitHubRepo {
  constructor({name, stars, license}) {
    this.name = name;
    this.stars = stars;
    this.license = license;
  }

  toStirng() {
    return `${this.name} (${this.stars})`
  }
}
