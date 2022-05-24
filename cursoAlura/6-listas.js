console.log('Trabalhando com listas');

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';

// Cada variável foi declarada individualmente, o que não parece é uma boa prática. 
// Podemos imprimir estas variáveis, mas é um processo muito trabalhoso, afinal teríamos de digitar muito código para apresentar todos os destinos:
console.log('Destinos possíveis:');
console.log(salvador,saoPaulo,rioDeJaneiro);

// Para facilitar e agilizar o processo, existe uma estrutura de dados chamada array, em que podemos armazenar diversos dados. 
// A maneira de declarar um array é: utilizando a palavra new e o tipo da estrutura Array

const listaDeDestinos = new array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

// ------------------------- Adicionar elemento -------------------
// Podemos adicionar novas cidades destino no array, declaramos a lista e elas vão ser atualizada dinamicamente.

//Para realizar essa atualização utiliza o comando push, que irá adicionar itens dentro de listaDeDestinos:
listaDeDestinos.push(`Curitiba`);  // inclui uma nova cidade no construtor, o local em que a lista está declarada e constituída.
console.log(listaDeDestinos);

// a listaDeDestinos está declarada como const, isto é, seu valor não pode ser alterado, mas conseguimos sim adicionar novos elementos à lista, 
//pois ela não deixa de ser uma lista. Não é possível, contudo, fazer com que listaDeDestinos mude de valor. 

// ------------------------- Remover elemento -------------------
// Para remover um elemento da lista utilizamos o splice, um comando que possibilitará a remoção em listaDeDestinos.
// Precisaremos declarar a posição inicial e a quantidade de itens a serem deletados, para que a remoção seja feita.

listaDeDestinos.splice(1,1); // Remove da lista São Paulo
console.log(listaDeDestinos);

// ------------------------- Exibir elemento -------------------
// Para comportamento de exibição, adicionaremos entre colchetes a posição da cidade que desejamos exibir 

console.log(listaDeDestinos[1]); // Rio de Janeiro
console.log(listaDeDestinos[1], listaDeDestinos[0]); // imprimi duas cidades específicas