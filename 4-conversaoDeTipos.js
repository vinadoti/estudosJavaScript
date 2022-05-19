console.log("Conversão de Tipos");

// Quando adicionamos um texto a outro, não chamamos essa operação de soma, mas sim de concatenação.
console.log("2" + "2");

// Para realizar a conversão de tipos, utilizar o parseInt, este "int" ser refere a um número inteiro:
// Conversão explicita
console.log(parseInt("2") + parseInt("2"));

// No caso de divisões, o comportamento do leitor é outro, pois uma divisão só faz sentido com elementos numéricos.
// Conversão implicita
console.log("10" / "2");

// Sem itens númericos, não é uma operação possível pois não se trata de números..
console.log("Ricardo" / "2"); // NaN - "not a number"


//O JavaScript é uma linguagem fracamente tipada, então ele sempre tentará realizar conversões de maneira implícita a fim de executar corretamente as declarações


console.log("7" / "2") // Resulta em 3,5
// forçar a conversão por meio do parseInt
console.log(parseInt("7" / "2")) // Resulta em 3

// um número com casa decimal é chamado de "pontos flutuantes"
console.log(6.5);
// para escrever números com casa decimal, sempre utilizar pontos (.) e não vírgulas:
console.log(6,5); // Resulta em: 6 5