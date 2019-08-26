import { BlogPost, Header } from './component';

export default () => {
  customElements.define('blog-post', BlogPost);
  customElements.define('blog-header', Header);
};
