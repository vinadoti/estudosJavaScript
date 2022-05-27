console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

// declarando as variaveis
const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false; // inicia com o valor false, e apenas caso a passagem tenha sido comprada esse valor é modificado.
const destino = "Salvador"; // se o destino for igual a Salvador, a passagem será comprada.


console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

console.log("\n -------------------");
console.log("\n Usando o while para percorrer a lista de destinos:");

//  if (idadeComprador >= 18 || estaAcompanhada == true) {
// inseri toda uma operação dentro de uma variável para organizar: 

const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;

// O resultado das operações de verificação de maioridade e de acompanhado resultarão no retorno de podeComprar, em que a venda de passagens está liberada. 

// Mapear a lista com um contador para  enumerarmos a posição dos itens.
let contador = 0; // A variável contador se iniciará com o valor 0, o elemento inicial da lista. 
while (contador < listaDeDestinos.length) { // enquanto o contador for menor que o tamanho da lista, o laço irá rodar, imprimindo os itens da lista.
    console.log(`\n Destino Disponível: ${listaDeDestinos[contador]}`);
    contador++;
}

console.log("\n -------------------");
console.log("\n Usando o while com o if e else:");

// O nome de todas as cidades está sendo exibido, mas queremos exibir apenas aquela a ser verificada para a compra. 
// Então cria uma condição de visualização. 

let cont = 0
while(cont<3){
    if(listaDeDestinos[cont] == destino){
        console.log("\n Destino existe"); 
    }else{ 
        console.log("\n Destino não existe");
    }
    cont += 1;
} 

console.log("\n -------------------");
console.log("\n Usando o while com o break:");

// Dessa maneira o elemento apontado pelo contador é o mesmo da lista? 
// Caso sim, exibiremos a mensagem de existência do destino, caso não, teremos outra correspondente.

// O laço de repetição while é utilizado para repetir um bloco de código enquanto uma condição for verdadeira.
// No momento em chegarmos ao while(), configuraremos para que ao encontrar o elemento de buscado, a execução deve ser interrompida.

// utilizaremos o comando break. Além disso, criaremos novas variáveis destinoExiste, que será do tipo let com valor false, 
// e seu valor será alterado se o destino existir, então passará a true. Neste caso, não precisaremos mais utilizar o else:
let contadorBreak = 0;
let destinoExiste = false
while(contadorBreak < 3){

    if(listaDeDestinos[contadorBreak] == destino){
        destinoExiste = true;
        break; // O break serve para interromper a execução do laço de repetição.
    }
    contadorBreak += 1;
}

// O break é utilizado para interromper a execução do laço de repetição, e não para interromper a execução de um bloco de código.
// Ao colocarmos um break dentro do laço estamos falando para o interpretador que quando ele chegar nessa linha ele deve sair do 
// laço independentemente de outras condições.

// Uma vez que o laço estiver terminado ou que a condição for executada, iremos executar um console.log() que nos declarará se o destino existe ou não.
console.log("\n Destino existe: ", destinoExiste);

console.log("\n -------------------");
console.log("\n Usando o if no lugar do while:");

//  inseriremos ao final do código um novo if para podeComprar e destionoExiste. Se essas duas condições forem verdadeiras iremos desejar ao cliente uma boa viagem.
// Caso contrário, enviaremos um aviso de falha no sistema.

if(podeComprar && destinoExiste){
    console.log("\n Compra realizada com sucesso");
} else {
    console.log("\n Falha na compra");
}

console.log("\n -------------------");
console.log("\n Usando for:");

// Para o caso do for, a contagem deverá ser dividida em três partes: inicialização, condição e incremento.
// 1ª - let i = 0  ---> inicia o contador com o valor 0. 
// 2ª - while (i < listaDeDestinos.length) ---> enquanto o contador for menor que o tamanho da lista, o laço irá rodar.
// 3ª - i++ ---> comando que deverá ser executado ao final do loop, neste caso para evitar o loop infinito, incrementa o contador.

for (let i = 0; i < listaDeDestinos.length; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        console.log("\n Destino existe");
    }
}

console.log("\n -------------------");