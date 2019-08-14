export default ({ name, stargazers_count: stars, license, ...rest }) => (
  {
    name,
    stars,
    license: license.spdx_id,
    rest
  }
);
