import getRepos from './service';

export default async function () {
  (await getRepos()).forEach(repo => console.log(repo))
}
