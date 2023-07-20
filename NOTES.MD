# Notas

O exercício envolve desenvolver um jogo da velha aderindo as regras do TDD.

### link [https://pt.wikihow.com/Jogar-Jogo-da-Velha]

### Regras do jogo:

O jogo da velha é uma brincadeira antiga, clássica e simples — que só exige papel, lápis e duas pessoas. Ele é um jogo de "soma zero", ou seja, duas pessoas igualmente habilidosas nunca conseguem derrotar uma à outra. No entanto, se você seguir as dicas e estratégias listadas abaixo, vai ter muito mais chances de ser vitorioso nas partidas.

Cenários TDD
1 – Criação do tabuleiro:  
Game Board Creation...  
 | |
-+-+-
| |
-+-+-
| |
Board Created.

The game will start with player X
2 – Player X ganhou na linha vertical
Player X:
X| |
-+-+-
X|O|
-+-+-
X| |O
PLAYER X WON!

3 – Player O ganhou na linha horizontal  
Player O:
X| |X
-+-+-
O|O|O
-+-+-
X| |
PLAYER O WON!

4 – Player X ganhou com uma linha diagonal
Player X:
X| |
-+-+-
O|X|
-+-+-
O| |X
PLAYER X WON!

5 – Jogo termina com um empate  
Player X:
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O
GAME ENDS WITH A DRAW!

### DOMINIOS:

- Criar board
- Com 9 posicões
- Tem jogador que ira ser o X e outro que sera o O
- Pode ganhar na horizontal, vertical, diagonal
- Ir jogando até alguem ganhar ou gerar empate
- Empate é quando todas as posicoes foram preenchidas e nenhum jogador fez tres posicoes que podem ganhar ( quarto item da lista )
- Mostra qual jogador venceu
- Mostra o board

- **Labels**  
  ✅ done  
  🚧 WIP  
  ❌ ERROR  
  ⚠️ TODO

## Pomodoro 1 🍅

[✅] Criar Setup
[✅] Entender o kata
[✅] Criar os dominios
[] Criar um teste que deve ser possivel chamar a função jogoDaVelha e retorna o tabuleiro
