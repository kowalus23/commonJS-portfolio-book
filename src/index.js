import style from './styles/index.scss';
import initMd from 'markdown-element';
import startGame from './game/index'
import startJoke from './joke/index';
import initAboutMe from './about-me/index'
import initBlog from './blog/index';
import initGhRepos from './github/index';

initAboutMe();
initBlog();
initGhRepos();

window.controls = {
  startGame,
  startJoke
};
