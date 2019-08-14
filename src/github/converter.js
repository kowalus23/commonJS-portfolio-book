import { GitHubRepo } from './model';

export default ({ name, stargazers_count: stars, license, ...rest }) => new GitHubRepo(
  {
    name,
    stars,
    license: license.spdx_id,
    rest
  }
);
