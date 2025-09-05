// let numeros = [5,10,15,20,25,30];

// console.log(numeros);

// Colocar um elemento no final do array
// numeros.push(35)
// console.log(numeros);
// Colocar um elemento no começo do array
// numeros.unshift(1)

// console.log(numeros);

// numeros.forEach((numeros,index) => { 
//     console.log(`O número ${numeros} está na posição ${index}`);
// })

let misto = [12,"cachorro",8,true,"gato",false,3.14,{chave:"valor"},[1,2,3]]
// console.log(misto);
// console.log("Array misto",misto.length)
// console.log(misto[misto.length - 1])


// for(let i = 0; i < misto.length; i++){
//     console.log(`O objeto da lista ${i}:`,misto[i]);
// }


frutas = ["banana","maçã","laranja","uva","abacaxi"]

// for(let fruta of frutas){
//     console.log(fruta);
// }

// for(let indice in frutas){
//     console.log(indice,frutas[indice]);
// }

// frutas.pop()
// frutas.shift()
// frutas.splice(1,3)
// console.log(frutas);

// let mapa = new Map()
// mapa.set("nome","João")
// mapa.set("idade",25)
// console.log(mapa.get("nome"));


// let conjunto = new Set([1,2,3,4,5,6,7,8,9,10])
// console.log(conjunto);
// conjunto.add(11)
// conjunto.delete(1)

// conjunto.forEach(valor  => console.log(valor));

let pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo",
    endereco: {rua: "Rua A", 
    numero: 100}   
}

console.log(pessoa.endereco.rua);