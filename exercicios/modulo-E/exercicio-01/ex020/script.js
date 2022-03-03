function contar() {
    let start = document.querySelector('#input01')
    let end = document.querySelector('#input02')
    let pass = document.querySelector('#input03')
    let res = document.querySelector('#res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(pass.value)

        if (p <= 0) {
            p = 1
            alert('Passo inválido! Considerando PASSO 1')
        }

        // CONTAGEM CRESCENTE
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `\u{1f449} ${c}`
        }

        // CONTAGEM DECRESCENTE
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `\u{1f449} ${c}`
        }

        res.innerHTML += ` \u{1f3c1} <br> Fim`
    }
}