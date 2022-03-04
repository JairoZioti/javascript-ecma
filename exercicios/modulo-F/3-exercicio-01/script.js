let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0
        media = 0

        for (pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] < maior)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O menor número informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>O maior número informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media.toFixed(2)}</strong>.</p>`
    }
}