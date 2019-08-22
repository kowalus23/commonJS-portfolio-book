import initMd from 'markdown-element';
// import game from './game/index'
// import convert from './github/converter';
// import main from './github/index';
// import joke from './joke/index';
import { getBlogPost } from './github/service'
//
// const ghRepoMock = {
//   name: 'brains',
//   stargazers_count: 32,
//   license: { spdx_id: 'MIT' },
//   test: 'nothing'
// };
//
getBlogPost('1.md').then((blogPost) => {
  const md = document.createElement('mark-down');
  md.textContent = blogPost;
  document.body.appendChild(md);
});

// main();
// joke();
// alert(convert(ghRepoMock));
// game();
