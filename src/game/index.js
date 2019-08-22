import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';

export default () => {
  alert('Wylosowano liczbę z przedzialu 1-50. Zgaduj!');
  let num = getNum();
  let attempts = 1;
  while (num !== TO_FIND) {
    info(num, TO_FIND);
    num = getNum();
    attempts += 1;
  }
  success(attempts);
}
