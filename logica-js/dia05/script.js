let resposta = "sim";
let frutas = [];
let doces = [];
let congelados = [];
let laticinios = [];

alert("Vamos montar nossa lista de compras!");

while (resposta == "sim") {
  let comida = prompt("Qual comida você deseja inserir?");
  let categoria = prompt(
    "Esse comida inserida se encaixa em qual das opções a seguir? frutas, laticínios, congelados, doces"
  );
  if (categoria == "frutas" || categoria == "fruta") {
    frutas.push(comida);
  } else if (categoria == "doces" || categoria == "doce") {
    doces.push(comida);
  } else if (categoria == "congelados" || categoria == "congelado") {
    congelados.push(comida);
  } else if (categoria == "laticínios" || categoria == "laticínio") {
    laticinios.push(comida);
  } else {
    alert("Categoria inválida, insira novamente");
    let categoria = prompt(
      "Esse comida inserida se encaixa em qual das opções a seguir? frutas, laticínios, congelados, doces"
    );
    if (categoria == "frutas" || categoria == "fruta") {
      frutas.push(comida);
    } else if (categoria == "doces" || categoria == "doce") {
      doces.push(comida);
    } else if (categoria == "congelados" || categoria == "congelado") {
      congelados.push(comida);
    } else if (categoria == "laticínios" || categoria == "laticínio") {
      laticinios.push(comida);
    }
  }
  resposta = prompt("Você deseja adicionar mais um item na lista?");
}

alert(`Lista de compras:
Frutas: ${frutas}
Laticínios: ${laticinios}
Congelados: ${congelados}
Doces: ${doces}`);
