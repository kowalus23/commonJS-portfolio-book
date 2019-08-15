import game from './game/index'
import convert from './github/converter';

const ghRepoMock = {
  name: 'brains',
  stargazers_count: 32,
  license: { spdx_id: 'MIT' },
  test: 'nothing'
};

alert(convert(ghRepoMock));
console.log(convert(ghRepoMock));

game();
