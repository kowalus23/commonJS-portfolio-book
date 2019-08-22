const DIALOG_URL = 'https://official-joke-api.appspot.com/random_joke';
const CHUCK_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
import JokeDialog from './JokeDialog';
import JokeChuck from './JokeChuck';

async function alternateResponse() {
  const response = await fetch(CHUCK_URL);
  if (response.ok) {
    const obj = await response.json();
    const jokeChuck = new JokeChuck(obj);
    jokeChuck.showJoke();
  }
}

export default async function () {
  try {
    const response = await fetch(DIALOG_URL);

    if (response.ok) {
      const obj = await response.json();
      const jokeDialog = new JokeDialog(obj);
      if (jokeDialog.isTypeProgramming()) {
        jokeDialog.showJoke();
      } else {
        await alternateResponse();
      }
    } else {
      await alternateResponse();
    }
    throw Error('Response not 200')
  } catch (err) {
    console.log(err);
    return [];
  }
}
