import style from './styles/index.scss';
import initMd from 'markdown-element';
import startGame from './game/index'
import startJoke from './joke/index';
import initAboutMe from './about-me/index'
import initBlog from './blog/index';
// import convert from './github/converter';
// import main from './github/index';
//
// const ghRepoMock = {
//   name: 'brains',
//   stargazers_count: 32,
//   license: { spdx_id: 'MIT' },
//   test: 'nothing'
// };
//
initAboutMe();
initBlog();

window.controls = {
  startGame,
  startJoke
};
// main();
// joke();
// alert(convert(ghRepoMock));
// game();
