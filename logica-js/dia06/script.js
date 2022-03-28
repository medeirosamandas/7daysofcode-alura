let resposta = "sim";
let frutas = [];
let doces = [];
let congelados = [];
let laticinios = [];
let comida;

alert("Vamos montar nossa lista de compras!");

while (resposta == "sim") {
  let desejo = prompt(
    "Você deseja incluir um item, excluir um item ou sair do programa?"
  );
  if (desejo == "incluir") {
    comida = prompt("Qual comida você deseja inserir?");
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
    alert(`Lista de compras:
            Frutas: ${frutas}
            Laticínios: ${laticinios}
            Congelados: ${congelados}
            Doces: ${doces}`);
  } else if (desejo == "excluir") {
    alert(`Lista de compras:
    Frutas: ${frutas}
    Laticínios: ${laticinios}
    Congelados: ${congelados}
    Doces: ${doces}`);
    comida = prompt("Qual item você deseja excluir? Digite o seu nome");
    let existe;

    for (let i = 0; i < frutas.length; i++) {
      if (frutas[i] == comida) {
        existe = true;
        frutas.splice(i, 1);
        alert(`Excluído item ${comida}`);
      }
    }
    for (let i = 0; i < laticinios.length; i++) {
      if (laticinios[i] == comida) {
        existe = true;
        frutas.splice(i, 1);
        alert(`Excluído item ${comida}`);
      }
    }
    for (let i = 0; i < congelados.length; i++) {
      if (congelados[i] == comida) {
        existe = true;
        frutas.splice(i, 1);
        alert(`Excluído item ${comida}`);
      }
    }
    for (let i = 0; i < doces.length; i++) {
      if (doces[i] == comida) {
        existe = true;
        frutas.splice(i, 1);
        alert(`Excluído item ${comida}`);
      }
    }
    if (existe == false) {
      alert("Item não encontrado!");
    } else {
      alert(`Lista de compras:
        Frutas: ${frutas}
        Laticínios: ${laticinios}
        Congelados: ${congelados}
        Doces: ${doces}`);
    }
  } else {
    alert("Fim da lista");
    alert(`Lista de compras:
      Frutas: ${frutas}
      Laticínios: ${laticinios}
      Congelados: ${congelados}
      Doces: ${doces}`);
    break;
  }
  resposta = prompt("Deseja continuar a mexer na lista?");
}
