import getRepos from './service';

export default async function () {
  (await getRepos()).forEach(r => console.log(r))
}
