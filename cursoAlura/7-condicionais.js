console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

// declarando as variaveis
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos possíveis:");
console.log(listaDeDestinos);


// "se" o valor for menor de 18 algo acontece, no caso, um outro bloco de código é acionado e uma remoção de elemento é feita da lista
// simbolizando uma compra.

/* if (idadeComprador >= 18) {
    console.log("Comprador maior de idade, venda realizada");
    listaDeDestinos.splice(1,1); // Removendo item
}
else if (estaAcompanhada) { // A pessoa é menor de idade          
    console.log("Comprador está acompanhado, venda realizada");
    listaDeDestinos.splice(1,1); // Removendo item
} else {
    console.log("Comprador não é maior de idade, não vender");
}  */

 if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Venda realizada");
    listaDeDestinos.splice(1,1); // Removendo item
}
else {
    console.log("Comprador não é maior de idade, não vender");
} 

console.log(listaDeDestinos);

console.log("\nEmbarque:")
if(idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem");
} 
else {
    console.log("Você não pode embarcar");
} 

// -------------------------
// operadores lógicos
// -------------------------

// idadeComprador = 18;  -  atribuição de valor
// idadeComprador == 18;  -  comparação
// idadeComprador > 18;  -   Maior
// idadeComprador < 18;  -   Menor
// idadeComprador >= 18;  -   Maior igual
// idadeComprador <= 18;  -   Menor igual
// || - Ou
// && - E