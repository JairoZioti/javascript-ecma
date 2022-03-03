/* ##### FUNÇÕES JAVASCRIPT #####

    FUNÇÕES:
    . São "ações" executadas assim que chamadas ou em decorrência de algum "evento"
    . Uma "função" pode receber "parâmetros" e retornar um resultado

    toda "função" pode ter os seguintes fatores:

    . Uma chamada
    . Um conjunto de parâmetros  ===> nem toda função usa parâmetros
    . Uma ação
    . Um retorno                 ===> nem toda função tem retorno

    VAMOS ILUSTRAR UMA FUNÇÃO:


    function ação(parâmetro){
        # código de comando # ===> ação da função
        return res            ===> retorno da função
    }
    ação(5)   ===> chamada da função

*/
// ##### VAMOS PARA PRÁTICA #####


function par_imp(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}


console.log(par_imp(11));