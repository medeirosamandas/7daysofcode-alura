const soma = (num1, num2) => {
  return num1 + num2;
};
const subtracao = (num1, num2) => {
  return num1 - num2;
};
const multiplicacao = (num1, num2) => {
  return num1 * num2;
};
const divisao = (num1, num2) => {
  return num1 / num2;
};

let resposta;

resposta = prompt(
  "Digite qual opção você quer: somar, subtrair, dividir, multiplicar ou sair"
);

while (resposta != "sair") {
  let numero1 = prompt("Insira o primeiro número");
  let numero2 = prompt("Insira o segundo número");

  switch (resposta) {
    case "somar":
      alert(`A resposta é: ${soma(Number(numero1), Number(numero2))}`);
      break;
    case "subtrair":
      alert(`A resposta é: ${subtracao(numero1, numero2)}`);
      break;
    case "dividir":
      alert(`A resposta é: ${divisao(numero1, numero2)}`);
      break;
    case "multiplicar":
      alert(`A resposta é: ${multiplicacao(numero1, numero2)}`);
      break;
    default:
      alert("deu ruim");
  }

  resposta = prompt(
    "Digite qual opção você quer: somar, subtrair, dividir, multiplicar ou sair"
  );
}
