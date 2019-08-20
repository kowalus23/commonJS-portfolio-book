const apiUrlDialog = 'https://official-joke-api.appspot.com/random_joke';
const apiUrlChuck = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
import JokeDialog from './JokeDialog';
import JokeChuckN from './JokeChuck';

export default async function () {
  try {
    const response = await fetch(apiUrlDialog);

    if (response.ok) {
      const obj = await response.json();
      const jokeDialog = new JokeDialog(obj);
      jokeDialog.showJoke();

      if (!jokeDialog.isTypeProgramming()) {
        const response = await fetch(apiUrlChuck);
        if (response.ok) {
          const obj = await response.json();
          const jokeChuckN = new JokeChuckN(obj);
          jokeChuckN.showJoke();
          return;
        }
        throw Error('Error!!!');
      } else {
        return;
      }
    }
    throw Error('Error!');
  } catch (err) {
    console.log(err);
    return [];
  }
}
