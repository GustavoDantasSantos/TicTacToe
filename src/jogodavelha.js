function jogoDaVelha(tabuleiro) {
  imprimirTabuleiro(tabuleiro);
  return tabuleiro;
}

function imprimirTabuleiro(tabuleiro) {
  console.log(`
    ${tabuleiro[0]} | ${tabuleiro[1]} | ${tabuleiro[2]}
    -----------
    ${tabuleiro[3]} | ${tabuleiro[4]} | ${tabuleiro[5]}
    -----------
    ${tabuleiro[6]} | ${tabuleiro[7]} | ${tabuleiro[8]}`);
}

module.exports = {
  jogoDaVelha,
};
