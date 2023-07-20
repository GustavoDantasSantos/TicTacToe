const { jogoDaVelha } = require('../src/jogodavelha');

describe('XP Farm - Jogo da velha', () => {
  test('deve chamar a função jogoDaVelha e retorna o tabuleiro ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro);
  });
  test('deve imprimir tabuleiro ', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro);
  });
  test('deve mostrar que o jogador X populou a primeira casa do array', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    jogadorX = true;
    casaOndeJogaX = 1;
    expect(jogoDaVelha(tabuleiro, jogadorX, casaOndeJogaX)).toStrictEqual(
      tabuleiro
    );
  });
  test('deve mostrar mensagem de erro caso o jogador escolha uma casa maior que 9', () => {
    tabuleiro = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    jogadorX = true;
    casaOndeJogaX = 10;
    expect(jogoDaVelha(tabuleiro, jogadorX, casaOndeJogaX)).toBe(
      'Onde você quer jogar é inválido'
    );
  });
});
