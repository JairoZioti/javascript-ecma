/* ##### ENTENDENDO ARRAYS E VETORES #####

VAMOS FAZER UM EXEMPLO USANDO UM ESTACIONAMENTO

Vamos criar uma variável chamada "vaga" e atribuir a ela três conteúdos entre colchetes

===> let vaga = [carro01, carro02, carro03] <=== 

Essa variável que declaramos é do tipo ARRAY ou VECTOR
Um ARRAY, VECTOR ou VARÁVEL COMPOSTA é uma variável que tem vários elementos, cada elemento é composto por seu valor e uma chave de indentificação
Para a indentificação de cada elemento usamos "indentificador de índice",  uma chave que vai indentificar cada uma delas.

vaga[0] ===> recebeu carro01
vaga[1] ===> recebeu carro02
vaga[2] ===> recebeu carro03

*/

let num = [5, 8, 2, 9, 3] 

num.push(1) // "num.push(elemento)" adiciona um elemento a mais no último índice da ARRAY.
num.sort() // "num.push()" organiza a ARRAY em ordem crescente ou alfabética.



console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);