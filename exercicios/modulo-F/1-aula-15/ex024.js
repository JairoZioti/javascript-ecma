// ##### FORMATAÇÃO SIMPLIFICADA #####

let valores = [8, 1, 7, 4, 2, 9] // Variável composta

console.log(`A 'variável valores' agora é uma  'array vector', pois ela tem um total de ${valores.length} elementos, e cada elemento tem 1 conteúdo`);

console.log('');

/* ##### ESTRUTURA DE REPETIÇÃO PARA FORMATAÇÃO SIMPLIFICADA DE ARRAY #####

    Esse é o método mais usado pelos desenvolvedores.
    
    Para a simplificação do código vamos usar o "for ( in )".
*/
for (let pos in valores) // Para cada 'pos' dentro de 'valores' eu vou executar um 'bloco' 
{
    valores.sort()
    console.log(`A posição de índice [${pos}] tem o valor ${valores[pos]}`);
}

/* A sintax do FOR só funciona  para ARRAYS e OBJETOS*/