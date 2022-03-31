# [7 Days Of Code](https://7daysofcode.io/)

<details>
<summary>Lógica de Programação Javascript</summary>
<details>
<summary>Dia 01 - Operações Booleanas</summary>

Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

O que não faz necessariamente muito sentido.

(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção "Inspecionar" e a aba "Console". Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

> Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

```
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

</details>

<details>
<summary>Dia 02 - Variáveis</summary>

Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.

Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.

Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!

Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

```
Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
```

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

```

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
```

</details>
<details>
<summary>Dia 03 - Fluxo de decisão</summary>
Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

```
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.
```

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

</details>

<details>
<summary>Dia 04 - Mais loops e randomização</summary>

Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
DICA
Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.

Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.

</details>

<details>
<summary>Dia 05 - Arrays e coleções</summary>
Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

Depois que você resolver o desafio de hoje, com certeza não fará mais isso!

Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

```
Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
Frutas: banana, tomate, maçã, uva, abacate
Laticínios: leite vegetal, leite de vaca, leite em pó
Congelados:
Doces: chiclete e bala de ursinho
```

</details>
<details>
<summary>Dia 06 - Remoção de Arrays</summary>
Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

</details>
<details>
<summary>Dia 07 - Funções em Javascript</summary>
Esta foi uma semana e tanto, né?

Você praticou muita coisa sobre lógica de programação com Javascript, mas ainda falta uma coisa muito importante: organizar o seu código.

E sim, isso é algo obrigatório para aprender como pessoa desenvolvedora, pois uma hora ou outra na sua carreira você vai precisar dar manutenção no seu código criado, ou até ajeitar algo no código que outra pessoa escreveu.

Imagina só se esse código estiver todo bagunçado?

Uma ótima prática é sempre separar cada trecho do seu código que realizará alguma função específica em blocos de código ainda menores, que poderão ser reutilizados e chamados a qualquer outro momento ao longo do seu programa. São as chamadas funções.

Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?

Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".

</details>
</details>

<details>
<summary>HTML e CSS</summary>
<sumamry>Dia 01 - Cabeçalho</summary>
<details>
Para isso, te enviaram um layout no Figma. O Figma é um software que muitos designers utilizam para criar protótipos. E a partir desse protótipo que eu vou disponibilizar, você vai transformá-lo em código e dar vida real ao projeto! Beleza?

Não se preocupe, porque você não vai precisar editar nada no Figma ou nem mesmo baixar o aplicativo. Basta [acessar esse link](https://www.figma.com/file/mm3MLozvUDGhDRTxSLlGL5/7daysOfCode-HTML-CSS?node-id=0%3A1&utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+HTML+e+CSS+1%2F7%3A+Cabe%C3%A7alho&utm_campaign=%5BAlura+%237Days+of+Code%5D%28HTML+++CSS%29+Dia+1%3A+Cabe%C3%A7alho) e você já vai conseguir visualizar o layout! Lá, você também poderá visualizar todos os valores para espaçamento, cores do projeto, tamanhos de texto, e muito mais!

Agora que você já abriu o Figma do projeto, você conseguiu ver o que a empresa espera que você entregue ao final dos próximos 7 dias.

Neste primeiro dia, você vai desenvolver o cabeçalho da aplicação, chamado normalmente de Navbar, que contempla o logo, o menu com as páginas e também os dois botões do canto direito, como aqui abaixo:</details>

</details>
