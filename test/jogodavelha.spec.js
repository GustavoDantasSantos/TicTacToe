const { jogoDaVelha } = require('../src/jogodavelha');

describe('XP Farm - Jogo da velha', () => {
  test('deve chamar a função jogoDaVelha e retorna o tabuleiro ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro);
  });
  test('deve passar o numero 1 e o jogador X deve ser colocado na primeira casa do array ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    jogadorX = 1;
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro, jogadorX);
  });
});
