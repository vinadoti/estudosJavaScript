
var title = document.querySelector(".titulo"); // seleciona a classe titulo e armazena na variavel title - recomendado

title.textContent = "Aparecida Nutricionista"; // altera o conteúdo do elemento

// ------------------------------------------------------------------------------------------------
// Para calcular o IMC do primeiro paciente

var pacientes = document.querySelectorAll(".paciente"); // seleciona todos os pacientes

for (var i = 0; i < pacientes.length; i++) { // estrutura de repetição para calcular o IMC de todos os pacientes
    var paciente = pacientes[i]; // armazena o paciente atual

    var tdPeso = paciente.querySelector(".info-peso"); // seleciona o peso do paciente atual
    var peso = tdPeso.textContent; // armazena o peso do paciente atual

    var tdAltura = paciente.querySelector(".info-altura"); // seleciona a altura do paciente atual
    var altura = tdAltura.textContent; // armazena a altura do paciente atual

    var tdImc = paciente.querySelector(".info-imc"); // seleciona o IMC do paciente atual

    // variaveis para verificar se o peso e altura são validos
    var pesovalido = true;
    var alturavalida = true;

    // estrutura de repetição para verificar se o peso é valido 
    if (peso == 0 || peso == "") {
        pesovalido = false;
        tdImc.textContent = "Peso inválido !";
        paciente.classList.add("paciente-invalido"); // adiciona a classe paciente-invalido ao paciente
    }

    // estrutura de repetição para verificar se a altura é valida 
    if (altura == 0 || altura == "") {
        alturavalida = false;
        tdImc.textContent = "Altura inválida !";
        paciente.classList.add("paciente-invalido"); // adiciona a classe paciente-invalido ao paciente
    }

    // estrutura de repetição para calcular o IMC
    if (pesovalido && alturavalida) {
        var imc = peso / (altura * altura); // calcula o IMC
        tdImc.textContent = imc.toFixed(2);  // altera o conteúdo do IMC para 2 casas decimais
    }
}

// ------------------------------------------------------------------------------------------------

