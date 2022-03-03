function gerar() {
    let num = document.querySelector('#input')
    let tab = document.querySelector('#seltab')

    // ##### MÉTODO WHILE ##### \\
    /*
        if (num.value.length == 0) {
            alert('Por favor, digite um número!')
        } else {
            n = Number(num.value)
            c = 1
            tab.innerHTML = '' 
    
            while (c <= 10) {
                item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++
            }
        }
    
    */

    // ##### MÉTODO FOR ##### \\

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        n = Number(num.value)
        tab.innerHTML = ''

        for (c = 1; c <= 10; c++) {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
