console.log("Atribuição de variáveis");

const primeiroNome = "Vivian"; // Atribuindo a variável inicialmente
const sobrenome = "Nadoti";

// Concatenação de variáveis(usando o +)
console.log(primeiroNome + sobrenome); // sem espaçamento
console.log(primeiroNome, sobrenome); // a virgula serve como separador de itens
console.log(primeiroNome + " " + sobrenome); // adicionando um espaço entre primeiroNome e o sinal de concatenação "+"

// Interpolação de variáveis (usando o ${})
console.log(`Meu primeiroNome é ${primeiroNome} ${sobrenome}`);

// Sobescrevendo a variável:
//primeiroNome = primeiroNome + sobrenome; // Resulta em erro: TypeError: Assignment to constant variable

// constant é um tipo de variável que não pode ser modificada uma vez que sua atribuição original foi feita.
// atribuí todas as variáveis como const, então a sobrescrição de dados não é possível

// Atribuindo a variável para permitir mudanças:
//let primeiroNome = "Vivian";   -Com o let pode reatribuir o valor

// O JavaScript permite mudar o tipo das variáveis livremente, mas essa não é uma boa prática, o correto é a atribuição seja mais constante,
// uma vez que a mudança de estados na programação é algo complexo que pode desencadiar em muitos erros.

// boas práticas:
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

// -------------------------
//tipo const: os valores da variável não podem se modificar
//tipo let:  podemos reatribuir o valor 
//boas práticas: manter uma variável constante a fim de evitar erros e inconsistências em nosso programa.
// -------------------------

let idade; // declarando variável
idade = 26; // atribuindo valor
idade = idade+1;
console.log(idade);
