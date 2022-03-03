let valores = [8, 1, 7, 4, 2, 9]

console.log(`A 'variável valores' agora é uma  'array vector', pois ela tem um total de ${valores.length} elementos, e cada elemento tem 1 conteúdo`);

console.log('');

for (pos in valores) {
    valores.sort()
    console.log(`A posição de índice [${pos}] tem o valor ${valores[pos]}`);
}