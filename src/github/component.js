//   import getRepos from './service';
import getRepos from './service';

export class GitHubRepos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const repos = (await getRepos());
    this.shadowRoot.innerHTML = (`
        ${this.renderStyles()}
      <table>
        <tbody>
            ${repos.map(repo => repo.toTableRow())
              .join('\n')}
        </tbody>
      </table>
    `);
  }

  renderStyles() {
    return (`
      <styles>
       
      </styles>
    `)
  }
}
