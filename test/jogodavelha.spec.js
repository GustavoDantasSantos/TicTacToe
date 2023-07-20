const { jogoDaVelha } = require('../src/jogodavelha');

describe('XP Farm - Jogo da velha', () => {
  test('deve chamar a função jogoDaVelha e retorna o tabuleiro ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro);
  });
  test('imprimir tabuleiro ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    jogadorX = 1;
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro, jogadorX);
  });
});
