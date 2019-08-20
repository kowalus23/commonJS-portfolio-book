import getJoke from "../joke/service";

export default async function() {
  await getJoke();
};
