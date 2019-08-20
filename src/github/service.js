import { GitHubRepo } from './model';

const REPOS_URL = 'https://api.github.com/users/kowalus23/repos';
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
    const response = await fetch(REPOS_URL);
    if (response.ok) {
      return (await response.json())
        .filter(r => !FORBIDDEN_REPOS.includes(r.name))
        .map(convert);
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return [];
  }
}
