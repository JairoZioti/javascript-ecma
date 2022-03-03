// ##### FORMATAÇÃO PADRÃO #####

let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores); ===> Formatação padrão, exibe os valores entre colchetes
//console.log(`${valores}`); ===> Formatação template string, exibe os valores sem colchetes

/*
console.log(valores[0]); ===> Formata somente o valor da chave [0] exibindo o elemento ===> 8
console.log(valores[1]); ===> Formata somente o valor da chave [1] exibindo o elemento ===> 1
console.log(valores[2]); ===> Formata somente o valor da chave [2] exibindo o elemento ===> 7
console.log(valores[2]); ===> Formata somente o valor da chave [3] exibindo o elemento ===> 4
console.log(valores[4]); ===> Formata somente o valor da chave [4] exibindo o elemento ===> 2
console.log(valores[5]); ===> Formata somente o valor da chave [5] exibindo o elemento ===> 9
*/

console.log(`A 'variável valores' agora é uma  'array vector', pois ela tem um total de ${valores.length} elementos, e cada elemento tem 1 conteúdo`);

console.log('');

/* ##### ESTRUTURA DE REPETIÇÃO PARA FORMATAÇÃO DE ARRAY #####

    Conforme fomos aumentando os elementos de uma ARRAY fica muito trabalhoso usar o método padrão descrito acima para a formatação das ARRAYS.
    Então em vez de digitar várias vezes o mesmo comando com valores de chaves diferentes, criamos uma estrutura de repetição.
*/
for (let pos = 0; pos < valores.length; pos++) // a variável "pos" representa a posição do índice de uma ARRAY.
{
    valores.sort() // organizando os índices pelos elementos com valores crescentes
    console.log(`A posição de índice [${pos}] tem o valor ${valores[pos]}`);
}
