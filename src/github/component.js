import getRepos from './service';
import {dom} from '@fortawesome/fontawesome-svg-core';

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
        ${this.renderHeader()}
      <table>
        <tbody>
            ${repos.map(repo => repo.toTableRow())
              .join('\n')}
        </tbody>
      </table>
    `);
    dom.i2svg({node: this.shadowRoot})
  }

  renderStyles() {
    return (`
      <styles>
       
      </styles>
    `)
  }

  renderHeader() {
    const logo = document.getElementById('gh-logo')
      .content
      .cloneNode(true);
    const h2 = document. createElement('h2');
    h2.appendChild(logo);
    return h2.outerHTML;
  }
}
