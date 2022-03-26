let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let acerto = false;
let tentativas = 3;

alert("Vamos tentar acertar um número de 0 a 10");
let resposta = prompt("Qual número você acha que é?");

while (acerto == false && tentativas > 0) {
  if (resposta == numero) {
    acerto = true;
    alert(`Parabéns, você acertou! O número era mesmo ${numero}`);
    break;
  } else {
    tentativas--;
  }
  if (tentativas > 0) {
    resposta = prompt("Você vai ter mais uma tentativa!");
  }
}

if (acerto == false) {
  alert(`Que pena! você não acertou. A resposta era: ${numero}`);
}
