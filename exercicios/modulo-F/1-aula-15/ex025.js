/* ##### BUSCANDO VALORES DENTRO DE ARRAYS #####

    num.indexOf(elemento) ===> essa função vai encontrar a chave onde o elemento se encontra

    vamos ao exemplo:

            let vaga = [carro01, carro02, carro03, carro04, carro05]
        chave índice =    [0]      [1]      [2]      [3]      [4]


        vaga.indexOf(carro04) [3] ===> o método indexOf buscou o elemento carro02 e retornou a chave [3]
        vaga.indexOf(carro02) [1] ===> o método indexOf buscou o elemento carro02 e retornou a chave [1]

    Quando buscamos por um elemento que não existe na ARRAY o indexOf retorna uma chave -1
    
        vaga.indexOf(carro07) [-1] ===> o método indexOf não encontrou o elemento carro07 e retornou a chave [-1]

*/
// ##### VAMOS NA PRÁTICA #####


let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

console.log(num);

console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(5)

if (pos == -1) {
    console.log('O valor não foi encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}