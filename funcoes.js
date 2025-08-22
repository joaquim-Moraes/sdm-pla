//Funçao Declarativa
function saudacao(nome){
    return `Olá, ${nome}`;
}

console.log(saudacao("Joaquim"));

// Função Anônima
const soma = function(a,b) {
    return a + b;
}
console.log(soma(5, 10));

function simples(){
    let a = 5
    let b = 7
    let c = a + b 
    console.log(`O valor da soma é ${c}`);
}
simples()