import { BlogPost, Body, Footer, Header, Navigation } from './component';

export default () => {
  customElements.define('blog-header', Header);
  customElements.define('blog-nav', Navigation);
  customElements.define('blog-body', Body);
  customElements.define('blog-footer', Footer);

  customElements.define('blog-post', BlogPost);
};
