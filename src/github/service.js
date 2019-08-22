import { GitHubRepo } from './model';

const REPOS_URL = 'https://api.github.com/users/kowalus23/repos';
const POSTS_URL = 'https://github.com/kowalus23/portfolio-book-posts/tree/master/blog/en/posts/'
const FORBIDDEN_REPOS = ['basic-hooks-usage', 'ES6-exercises', 'Project-Warsztaty'];

const convert = ({ name, stargazers_count: stars, license, ...rest }) => new GitHubRepo(
  {
    name,
    stars,
    license: license ? license.spdx_id : '',
    rest
  }
);


export default async function getRepos() {
  try {
    const response = await fetch(POSTS_URL);
    if (response.ok) {
      return (await response.json())
        .filter(repo => !FORBIDDEN_REPOS.includes(repo.name))
        .map(convert);
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return [];
  }
}

export async function getBlogPost(name = '0.md') {
  try {
    const response = await fetch(`${POSTS_URL}${name}`, {mode: 'no-cors'});
    if (response.ok) {
      return (await response.text())
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return [];
  }
}
