describe('XP Farm - Jogo da velha', () => {
  test('deve chamar a função jogoDaVelha e retorna o tabuleiro ', () => {
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    expect(jogoDaVelha(tabuleiro)).toStrictEqual(tabuleiro);
  });
});
