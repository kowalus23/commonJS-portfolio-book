import { Joke } from './model';

const JOKE_URL = 'https://official-joke-api.appspot.com/jokes/random';
const FALLBACK_JOKE_URL = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';

export async function getJoke() {
  try {
    const response = await fetch(JOKE_URL);
    const joke = await response.json();
    if (joke.type === 'programming') {
      return new Joke(joke);
    }
    const { value: { joke: punchline } } = await (await fetch(FALLBACK_JOKE_URL)).json();
    return new Joke({punchline});
  } catch (err) {
    console.warn(err);
    return new Joke({
      setup: 'setup test',
      punchline: 'punchline test'
    });
  }
}
