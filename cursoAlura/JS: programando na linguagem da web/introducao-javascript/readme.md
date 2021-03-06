# Anotações sobre as aulas

## Tag ```<script>```
Tudo que declaramos dentro da tag ```<script>``` é interpretado como Javascript quando o navegador passar por ali.

No caso abaixo:

``` javascript
<script>
alert("Olá mundo");
</script>
```

Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função ```alert()```, que é responsável por exibir uma pop up com a mensagem Olá mundo.

## DOM (Document Object Model)

O DOM é a representação do HTML para o JavaScript, acessível por uma palava do JavaScript chamada ```document```.

O ```document``` é uma variável muito importante do Javascript. Ela contém o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.

O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável ```document``` é quem contêm o DOM.

Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um ```<h1>``` ou um estilo de um elemento, na verdade estamos alterando a representação em memória, o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

### método ```querySelector()```

Para modificar apenas um pedaço do document, usamos o método ```querySelector()```, passando como parâmetro o que queremos encontrar.

Quando desejamos pegar apenas parte do HTML, devemos utilizar a função ```querySelector()```. A função querySelector faz a busca através de seletores CSS para trazer o HTML que você está interessado.

Por exemplo, no caso abaixo:

```
<h1 class="titulo"> Meu primeiro site</h1>
```

Podemos buscar este ```<h1>``` passando o seletor CSS correto para a função querySelector. Utilizando o seletor de tag, podemos buscar assim:

```
document.querySelector("h1");
```

E utilizando um seletor CSS de classe, ficaria assim:

```
document.querySelector(".titulo");
```

A função querySelector() nos retorna apenas um elemento, independentemente do que passarmos para a mesma.

### método ```querySelectorAll()```

Essa função nos retorna um array, com todos os elementos 

### Limitando as casas decimais de um número

 Alguns número possuem diversas casas decimais, tornando o número imenso. Podemos melhorar isso utilizando uma função que limita esta quantidade. Essa função é ```toFixed()```, que recebe como parâmetro a quantidade de casas decimais a serem exibidas depois do ponto.

 ### Percorrendo uma lista com o ```lenght```

 Todo array possui uma propriedade chamada length, que nos informa o seu tamanho. Então usamos ela para percorrer até o tamanho da lista

 ### Alterar o CSS aplicado

 Se adicionarmos ```style.color```, podemos alterar a cor da fonte na linha.
 Para conseguirmos alterar a cor da fonte usamos a propriedade ```color```, para modificar o fundo, usamos a propriedade ```backgroundColor```. Porém, se tentarmos escrever da mesma forma como é feito no CSS (```background-color```), nosso código não funcionará. Quando queremos modificar um estilo com duas palavras, o hífen (-) não é aceito pela linguagem JavaScript. Teremos que utilizar o padrão Camel Case - no qual as palavras compostas ou frases são iniciadas com maiúsculas e unidas sem espaços.

 Porém o local correto para definirmos o estilo da página é no arquivo CSS. 

 É importante mantermos essa separação dos "mundos": o HTML é utilizado para marcar os elementos, o JavaScript para adicionar dinamismo e manipular a página, enquanto o CSS é responsável por estilizar. Logo, o ideal não é modificar o estilo da linha no código JavaScript, então qual é o meio termo entre não modificar o estilo diretamente, mas conseguir alterá-lo, no JavaScript?

É uma boa prática, em vez de adicionarmos um estilo, incluirmos uma classe ao elemento.

De volta ao JavaScript, assim como temos o ```style``` para acesso aos estilos e o ```textContent``` para acessarmos o conteúdo de texto de um elemento, teremos a ```classList``` para acessarmos as classes. E usando o método ```add```, adicionaremos a classe desejada.

Exemplo:
```
paciente.classList.add("paciente-invalido");
```
