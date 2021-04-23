class Carta {
  constructor(nome, naipe, valor = 0) {
    this.nomeCompleto = nome + naipe;
    this.nome = nome;
    this.naipe = naipe;
    this.valor = valor;
    this.url =
      "./SVG-cards-1.3/" +
      this.getName(nome) +
      "_of_" +
      this.getNaipe(naipe) +
      ".svg";
  }
  getName(nome) {
    switch (nome) {
      case "A":
        return "ace";
      case "J":
        return "jack";
      case "Q":
        return "queen";
      case "K":
        return "king";
      default:
        return nome;
    }
  }
  getNaipe(naipe) {
    switch (naipe) {
      case "♤":
        return "spades";
      case "♢":
        return "diamonds";
      case "♡":
        return "hearts";
      case "♧":
        return "clubs";
      default:
        return null;
    }
  }
}

//Fábricas
class Cartas {
  static criar() {
    let naipes = "♤♢♡♧".split("");
    let nomes = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",");
    let cartas = [];
    for (let naipe of naipes) {
      for (let i = 0; i < nomes.length; i++) {
        cartas.push(new Carta(nomes[i], naipe, i + 1));
      }
    }
    return cartas;
  }
  static criarTruco() {
    let naipes = "♤♢♡♧".split("");
    let nomes = "Q,J,K,A,2,3".split(",");
    let cartas = [];
    for (let naipe of naipes) {
      for (let i = 0; i < nomes.length; i++) {
        cartas.push(new Carta(nomes[i], naipe, i + 1));
      }
    }
    return cartas;
  }
}

class Baralho {
  constructor(cartas) {
    this.cartas = cartas;
    this.embaralhar();
    this.pilhas = {};
  }

  comprarUma(nomeDaPilha, quantidade) {
    let aux = this.cartas.splice(0, quantidade);
    try {
      this.pilhas[nomeDaPilha] = this.pilhas[nomeDaPilha].concat(aux);
    } catch (e) {
      this.pilhas[nomeDaPilha] = aux;
    }
    return aux;
  }
  comprarUmaDeBaixo(quantidade) {
    return this.cartas.pop();
  }
  //criar jogadores(nome e quantidade)
  //criar os baralhos de acordo com jogo
  //

  /* Problema movimento de cartas:
      Permitir comprar cartas do baralho e do descarte
      Permitir o jogador descartar
      Permitir o jogador baixar cartas na sua área
      Permitir o jogador colocar cartas na mesa (matar a carta)
      Permitir cartas do deck para mesa
      Permitir voltar todas as cartas usadas para o deck
   */

  /*Movimento das cartas
comprar sempre uma ou pode ser mais?
comprar (sai do topo do deck vai para o jogador)
comprar (sai de baixo do deck vai para o jogador)
comprar (sai do jogador vai para outro jogador)
comprar (sai do jogador vai para  descarte)
comprar (sai do jogador vai para  mesaGeral)
comprar (sai do jogador vai para  areaJogoDele)
comprar (sai do descarte vai para jogador)
*/

  embaralhar() {
    this.cartas.sort(() => Math.random() - 0.5);
  }
}

class Truco {}

class Uno {}

export { Carta, Cartas, Baralho };

// let cartas = Cartas.criarTruco()
// let deck = new Baralho(cartas)
// let jog1 = deck.comprar()
// console.log(deck.cartas)
