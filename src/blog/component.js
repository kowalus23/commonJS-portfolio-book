import { getBlogPost, getBlogPostNames } from '../github/service';
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
    super('header', 'header', `<h1 class="header-heading">From Advanced to Basics</h1>`);
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

export class Footer extends HtmlElementWithContent {
  constructor() {
    const copyright = `&copy; Copyright ${new Date().getFullYear()}`;
    super('footer', 'footer', copyright);
  }
}

export class Body extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const posts = await getBlogPostNames();
    this.shadowRoot.innerHTML = (`
     <section>
       ${this.renderStyles()}
      <div class="container">
       <main>
        ${posts.reverse()
      .map(postName => `<blog-post post-name="${postName}"></blog-post>`)
      .join('<hr>')}
       </main>
       <aside>
         <slot name="side-menu"></slot>
       </aside>
      </div>
     </section>
    `);
  }

  renderStyles() {
    return (`
      <style>
     .container {
         max-width: 70em;
         margin: 0 auto;
     }

     section {
        overflow: hidden;
        padding: 1em 1.25em;
        background-color: #ffffff;
     }

     main, aside {
        margin-bottom: 1em;
     }
     @media (min-width: 55em) {
        section {
            padding: 2em 3em;
        }
        main {
            float: left;
            width: 65%;
            margin-right: 5%;
            margin-bottom: 1em;
        }
        aside {
            float: left;
            width: 30%;
            margin-bottom: 1em;
        }
     }
    </style>
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
    this.shadow.appendChild(document.createElement('style')).innerHTML = `
      pre {
      width: 100%;
      overflow-X: auto;
      }
    `;
  }

  clean() {
    this.shadow.childNodes.forEach(child => child.remove());
  }
}
