
console.log(document.querySelector("h1")); // retorna o elemento h1 - não é recomendado

console.log(document.querySelector(".titulo")); // retorna o titulo - recomendado

var titulo = document.querySelector("h1"); // seleciona o primeiro elemento h1 e armazena na variavel titulo - não é recomendado

var title = document.querySelector(".titulo"); // seleciona a classe titulo e armazena na variavel title - recomendado

console.log(titulo); // <h1>Aparecida Nutrição</h1>

console.log(title); // <h1>Aparecida Nutrição</h1>

console.log(titulo.textContent); // textContent retorna o texto do elemento

title.textContent = "Aparecida Nutricionista"; // altera o conteúdo do elemento

// ------------------------------------------------------------------------------------------------
// Para calcular o IMC do primeiro paciente

var paciente = document.querySelector("#primeiro-paciente"); // seleciona o primeiro paciente

var tdPeso = paciente.querySelector(".info-peso"); // seleciona o peso do primeiro paciente
var peso = tdPeso.textContent; // armazena o peso do primeiro paciente

var tdAltura = paciente.querySelector(".info-altura"); // seleciona a altura do primeiro paciente
var altura = tdAltura.textContent; // armazena a altura do primeiro paciente

var tdImc = paciente.querySelector(".info-imc"); // seleciona o IMC do primeiro paciente

// variaveis para verificar se o peso e altura são validos
var pesovalido = true;
var alturavalida = true; 

// estrutura de repetição para verificar se o peso é valido 
if (peso == 0 || peso == "") {
    pesovalido = false;
    tdImc.textContent = "Peso inválido !";
} 

// estrutura de repetição para verificar se a altura é valida 
if (altura == 0 || altura == "") {
    alturavalida = false;
    tdImc.textContent = "Altura inválida !";
}

// estrutura de repetição para calcular o IMC
if (pesovalido && alturavalida) {
    var imc = peso / (altura * altura); // calcula o IMC
    tdImc.textContent = imc.toFixed(2);  // altera o conteúdo do IMC para 2 casas decimais
}

// ------------------------------------------------------------------------------------------------

