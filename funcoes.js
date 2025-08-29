//Funçao Declarativa
function saudacao(nome){
    return `Olá, ${nome}`;
}



// // Função Anônima
// const soma = function(a,b) {
//     return a + b;
// }
// console.log(soma(5, 10));

// function simples(){
//     let a = 5
//     let b = 7
//     let c = a + b 
//     console.log(`O valor da soma é ${c}`);
// }
// console.log(saudacao('Lucas'))
// console.log(saudacao('vitor'))

const multiplicar = (a,b) => a * b;

function Descobriridade(idade){
    return idade
}

const alturas = function(altura){
    return altura
}

const curso = (cursando) => cursando;


//console.log(`Você é melhor de todos ${Descobriridade(19)}`)
//console.log("Você tem uma altura de ",alturas(1.70))
// console.log(curso("Ciência da Computação"))
// console.log("O que você esta curando ",curso("ads"))


 function imprimir(idadamr,alturam,cursam){
    console.log(`Você tem ${Descobriridade(idadamr)} anos e de ${alturas(alturam)} altura e cursa ${curso(cursam)}`)
}


console.log(imprimir(20,1.90,"ciencia da computação"));


// function imprimir(idade,altura,curso){
//     console.log(idade,altura,curso)
// }
// imprimir(19,alturas(),curso())

(function(){
    console.log("Função auto-invocada");
})();

function processa(valor, callback){
    const resultado = callback(valor)
    console.log(`Resultado${resultado}`)

}

async function processarAsync(valor,callback) {
    const resultado = await callback(valor);
    console.log(`Resultado${resultado}`)
}