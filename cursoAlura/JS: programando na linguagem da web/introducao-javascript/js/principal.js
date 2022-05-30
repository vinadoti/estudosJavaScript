
console.log(document.querySelector("h1")); // retorna o elemento h1 - não é recomendado

console.log(document.querySelector(".titulo")); // retorna o titulo - recomendado

var titulo = document.querySelector("h1"); // seleciona o primeiro elemento h1 e armazena na variavel titulo - não é recomendado

var title = document.querySelector(".titulo"); // seleciona a classe titulo e armazena na variavel title - recomendado

console.log(titulo); // <h1>Aparecida Nutrição</h1>

console.log(title); // <h1>Aparecida Nutrição</h1>

console.log(titulo.textContent); // textContent retorna o texto do elemento

title.textContent = "Aparecida Nutricionista"; // altera o conteúdo do elemento
