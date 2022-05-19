# O que é JavaScript? 

![](https://miro.medium.com/max/1400/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg)

## Definição de alto nível ⚠️

JavaScript é uma linguagem de programação que permite implementar itens complexos em páginas web. 
toda vez que uma página da web faz mais do que simplesmente mostrar informação estática,
mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc...
o JavaScript provavelmente está envolvido. É a terceira camada do bolo das tecnologias padrões da web (HTML,CSS E JS).

----

## O que ele pode realmente fazer? 🤔

O núcleo da linguagem JavaScript consiste em alguns benefícios comuns da programação que permite a você fazer coisas como:

 - Armazenar conteúdo útil em variáveis.
 - Operações com pedaços de texto (conhecidos como "strings" em programação). 
 - Executar o código em resposta a determinados eventos que ocorrem em uma página da Web.
 - E muito mais!

O que é ainda mais empolgante é a funcionalidade construída no topo do núcleo da linguagem JavaScript. As APIs (Application Programming Interfaces - Interface de Programação de Aplicativos)

----

## APIs 🔻

APIs são conjuntos prontos de blocos de construção de código que permitem que um desenvolvedor implemente programas que seriam difíceis ou impossíveis de implementar. Eles fazem o mesmo para a programação que os kits de móveis prontos para a construção de casas - é muito mais fácil pegar os painéis prontos e parafusá-los para formar uma estante de livros do que para elaborar o design, sair e encontrar a madeira, cortar todos os painéis no tamanho e formato certos, encontrar os parafusos de tamanho correto e depois montá-los para formar uma estante de livros.

Elas geralmente se dividem em duas categorias:

📌 **APIs de navegadores** já vem implementadas no navegador, e são capazes de expor dados do ambiente do computador, ou fazer coisas complexas e úteis. Por exemplo:

- A API DOM (Document Object Model) permite manipular HTML e CSS, criando, removendo e mudando HTML, aplicando dinamicamente novos estilos para a  página, etc. Toda vez que uma janela pop-up aparecer em uma página, ou algum novo conteúdo sendo exibido, isso é o DOM em ação.
- A API de Geolocalização recupera informações geográficas. É assim que o Google Maps consegue encontrar a localização e colocar em um mapa.
- As APIs Canvas e WebGL permite criar gráficos 2D e 3D animados. (Chrome Experiments e webglsamples)
- APIs de áudio e vídeo como HTMLMediaElement (en-US) e WebRTC permitem fazer coisas com multimídia, tanto tocar música e vídeo em uma página da web, como capturar vídeos com a câmera e exibir no computador de outra pessoa (Snapshot).

📌 **APIs de terceiros** não estão implementados no navegador automaticamente, e geralmente tem que pegar seu código e informações em algum lugar da Web. Por exemplo:

- A API do Twitter permite fazer coisas como exibir seus últimos tweets no seu website.
- A API do Google Maps permite inserir mapas customizados no site e outras diversas funcionalidades.

----

## O que JavaScript está fazendo na sua página web? 

Quando carrega uma página web no seu navegador, você está executando seu código (o HTML, CSS e JavaScript) dentro de um ambiente de execução (a guia do navegador). Isso é como uma fábrica que pega a matéria prima (o código) e transforma em um produto (a página web).
Um uso muito comum do JavaScript é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, por meio da API do Document Object Model. Observe que o código em seus documentos web geralmente é carregado e executado na ordem em que aparece na página. Se o JavaScript carregar e tentar executar antes do carregamento do HTML e CSS afetado, poderão ocorrer erros.

### Segurança do navegador 📌
Cada guia do navegador tem seu próprio espaço para executar código (esses espaços são chamados de "ambientes de execução", em termos técnicos) — isso significa que na maioria dos casos o código em cada guia está sendo executado separadamente, e o código em uma guia não pode afetar diretamente o código de outra guia — ou de outro website. Isso é uma boa medida de segurança — se esse não fosse o caso, então hackers poderiam começar a escrever código para roubar informações de outros websites, e fazer outras coisas más.

### Ordem de execução do JavaScript 📌
Quando o navegador encontra um bloco de código JavaScript, ele geralmente executa na ordem, de cima para baixo. Isso significa que você precisa ter cuidado com a ordem na qual você coloca as coisas. Por exemplo:

```javascript
const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);

function atualizarNome() {
  const nome = prompt('Informe um novo nome:');
  para.textContent = 'Jogador 1: ' + nome;
}
```

Aqui nós estamos selecionando um parágrafo (linha 1) e anexando a ele um event listener (linha 3). Então, quando o parágrafo recebe um clique, o bloco de código atualizarNome() (linhas 5 a 8) é executado. O bloco de código atualizarNome()(esses tipos de bloco de código reutilizáveis são chamados "funções") pede ao usuário que informe um novo nome, e então insere esse nome no parágrafo, atualizando-o.

Se você inverte a ordem das duas primeiras linhas de código, ele não funcionaria — em vez disso, você receberia um erro no console do navegador — TypeError: para is undefined. Isso significa que o objeto para não existe ainda, então nós não podemos adicionar um event listener a ele.

### Código interpretado x compilado 📌

Você pode ouvir os termos interpretado e compilado no contexto da programação. JavaScript é uma linguagem interpretada — o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem que transformar o código em algo diferente antes do navegador executa-lo.

Linguagens compiladas, por outro lado, são transformadas (compiladas) em algo diferente antes que sejam executadas pelo computador. Por exemplo, C/C++ são compiladas em linguagem Assembly, e depois são executadas pelo computador.

JavaScript é uma linguagem de programação leve e interpretada. O navegador recebe o código JavaScript em sua forma de texto original e executa o script a partir dele. Do ponto de vista técnico, a maioria dos intérpretes modernos de JavaScript realmente usa uma técnica chamada compilação just-in-time para melhorar o desempenho; o código-fonte JavaScript é compilado em um formato binário mais rápido enquanto o script está sendo usado, para que possa ser executado o mais rápido possível. No entanto, o JavaScript ainda é considerado uma linguagem interpretada, pois a compilação é manipulada em tempo de execução, e não antes.

### Lado do servidor x Lado do cliente 📌

Você pode também ouvir os termos lado do servidor (server-side) e lado do cliente (client-side), especialmente no contexto de desenvolvimento web. Códigos do lado do cliente são executados no computador do usuário — quando uma página web é visualizada, o código do lado do cliente é baixado, executado e exibido pelo navegador.

Códigos do lado do servidor, por outro lado, são executados no servidor e o resultado da execução é baixado e exibido no navegador. Exemplos de linguagens do lado do servidor populares incluem PHP, Python, Ruby, e ASP.NET. E JavaScript! JavaScript também pode ser usada como uma linguagem server-side, por exemplo, no popular ambiente Node.js 

### Código dinâmico x estático 📌

A palavra dinâmico é usada para descrever tanto o JavaScript client-side como o server-side — essa palavra se refere a habilidade de atualizar a exibição de uma página web/app para mostrar coisas diferentes em circunstâncias diferentes, gerando novo conteúdo como solicitado. Código do lado do servidor dinamicamente gera novo conteúdo no servidor, puxando dados de um banco de dados, enquanto que JavaScript do lado do cliente dinamicamente gera novo conteúdo dentro do navegador do cliente, como criar uma nova tabela HTML com dados recebidos do servidor e mostrar a tabela em uma página web exibida para o usuário. Os significados são ligeiramente diferente nos dois contextos, porém relacionados, e ambos (JavaScript server-side e client-side) geralmente trabalham juntos.

Uma página web sem atualizações dinâmicas é chamada de estática — ela só mostra o mesmo conteúdo o tempo todo.

----

## Como adicionar JavaScript na página?

O JavaScript é inserido na sua página de uma maneira similar ao CSS. Enquanto o CSS usa o elemento ```<link>``` para aplicar folhas de estilo externas e o elemento ```<style>``` para aplicar folhas de estilo internas, o JavaScript só precisa de um amigo no mundo do HTML — o elemento ```<script>```.

### JavaScript interno

- [Exemplo](/cursoW3Schools/exemplos/testeJsInterno.html)

### JavaScript externo

 > continuar daqui - [Exemplo](/cursoW3Schools/testeJsInterno)

## Fontes

- [mdn web docs](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript)