/*. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
*/

let todasAsTecs = [];

let area = prompt(
  "Você gostaria de seguir para a área de frontend ou backend?"
);
if (area == "frontend") {
  let linguagem = prompt("Você gostaria de aprender React ou Vue?");
  todasAsTecs.push(linguagem);
  let fullstack = prompt(
    "E agora, você gostaria de se especializar mais em front (digite 1) ou estudar back pra ser fullstack (digite 2)?"
  );
  alert("Que ótimo!");
} else {
  let linguagem = prompt("Você gostaria de aprender Java ou C#?");
  todasAsTecs.push(linguagem);
  let fullstack = prompt(
    "E agora, você gostaria de se especializar mais em back (digite 1) ou estudar front pra ser fullstack (digite 2)?"
  );
  alert("Que ótimo!");
}
let outrasTecs = prompt(
  "Há mais alguma tecnologia na qual você gostaria de se especializar ou de conhecer? (digite 1 para sim e 2 para não)"
);

while (outrasTecs == 1) {
  let tec = prompt("Qual seria essa tec?");
  todasAsTecs.push(tec);

  alert(tec + " é top");

  outrasTecs = prompt(
    "Há mais alguma tecnologia na qual você gostaria de se especializar ou de conhecer? (digite true para sim e false para não)"
  );
}

alert(
  `Aqui temos a lista das linguagens que voce se interssou a conhecer/aprender: ${todasAsTecs}`
);
