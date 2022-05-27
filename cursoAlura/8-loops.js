console.log('Trabalhando com condicionais');

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`

);

// declarando as variaveis
const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";


console.log("Destinos possíveis:");
console.log(listaDeDestinos);


 if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Venda realizada");
    listaDeDestinos.splice(1,1); // Removendo item
    temPassagemComprada = true;
}
else {
    console.log("Comprador não é maior de idade, não vender");
    temPassagemComprada = false;
} 

console.log(listaDeDestinos);

console.log("\nEmbarque:")
if(idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem");
} 
else {
    console.log("Você não pode embarcar");
}
