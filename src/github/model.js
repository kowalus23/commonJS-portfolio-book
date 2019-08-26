export class GitHubRepo {
  constructor({ name, stars, license, url, rest }) {
    this.name = name;
    this.stars = stars;
    this.license = license;
    this.url = url;
    this.rest = rest;
  }

  get starsInfo() {
    return this.stars > 0 ? `has (${this.stars}) stars` : '';
  }

  toString() {
    return `${this.name} ${this.starsInfo}`;
  }

  toTableRow() {
    return (`
      <tr onclick="location.assign('${this.url}')">
        <td>
          ${this.name}
        </td>
        <td>
          ${this.starsInfo}
        </td>
    `);
  }
}
