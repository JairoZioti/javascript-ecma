let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores);

/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[2]);
console.log(valores[4]);
console.log(valores[5]);
*/

console.log(`A 'variável valores' agora é uma  'array vector', pois ela tem um total de ${valores.length} elementos, e cada elemento tem 1 conteúdo`);

console.log('');

for (pos = 0; pos < valores.length; pos++) {
    valores.sort()
    console.log(`A posição de índice [${pos}] tem o valor ${valores[pos]}`);
}
