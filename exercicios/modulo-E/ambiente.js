/* Repetições em Javascript */

let c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

/*
##### Testa primeiro, executa depois

let c = 1                      |
while (c <= 6) {               | ===> esse é o método mais usado pelos programadores.
    console.log(`Passo ${c}`)  |
    c++                        |
}


##################################################


##### Executa primeiro, testa depois

let c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)


##################################################


##### Executa todos comandos #####

console.log(`Passo ${c}`)
console.log(`Passo ${c}`)
console.log(`Passo ${c}`)
console.log(`Passo ${c}`)
console.log(`Passo ${c}`)
console.log(`Passo ${c}`)


##################################################


Todos os comandos executaram as mesmas funções de escrever no console 6 vezes.

*/