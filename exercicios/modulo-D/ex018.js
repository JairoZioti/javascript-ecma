function carregar() {
    let msg = document.querySelector('#msg')
    let msg2 = document.querySelector('#msg2')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = './image018/manhaP.png'
        document.querySelector('body').style.background = '#d9d0b3'
        msg2.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = './image018/tardeP.png'
        document.querySelector('body').style.background = '#edaa75'
        msg2.innerHTML = 'Boa Tarde!'
    } else {
        //  BOA NOITE
        img.src = './image018/noiteP.png'
        document.querySelector('body').style.background = '#03314a'
        msg2.innerHTML = 'Boa Noite!'
    }
}