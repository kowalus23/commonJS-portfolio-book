import { getBlogPost } from '../github/service';
import style from './style.scss';

class HtmlElementWithContent extends HTMLElement {
  constructor(tag, tagStyle, content) {
    super();
    const element = document.createElement(tag);
    element.className = tagStyle;
    element.innerHTML = `
      <div class="container">
        ${content}
      </div>
    `;
    this.appendChild(element);
  }
}

export class Header extends HtmlElementWithContent {
  constructor() {
    super('header', 'header', `
     
				        <h1 class="header-heading">From Advanced to Basics</h1>
		
    `);

  }
}

export class Navigation extends HtmlElementWithContent {
  constructor() {
    super('nav', 'nav-bar', `
        <ul class="nav">
				    <li><a href="#">Blog</a></li>
				    <li><a href="#">Contact</a></li>
				    <li><a href="../index.html">About me</a></li>
			  </ul>
    `);
  }
}

export class BlogPost extends HTMLElement {
  static get observedAttributes() {
    return ['post-name'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  async render() {
    this.clean();
    const name = this.getAttribute('post-name');
    const md = document.createElement('mark-down');
    md.textContent = (await getBlogPost(`${name}.md`));
    this.shadow.appendChild(md);
  }

  clean() {
    this.shadow.childNodes.forEach(child => child.remove());
  }
}
