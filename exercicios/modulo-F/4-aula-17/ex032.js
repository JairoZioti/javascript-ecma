/* ##### OBJETOS ##### 

    EXEMPLO DE ARRAY

    let num = [5, 8, 4]

    num 5   8   4    
       [0] [1] [2]
    
    EXEMPLO DE OBJETO

    let amigo = {nome: 'José', sexo: 'M', peso: '85.4', engordar(p){}}

    amigo José    M   85.4   [function]
          nome  sexo  peso   engordar()


*/

amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p) {
        this.peso += p
        console.log(`${amigo.nome} engordou ${p} Kg`);
        return p.value
    }
}

Peso = 3
amigo.engordar(Peso)

console.log(`${amigo.nome} agora pesa ${amigo.peso} Kg`);
