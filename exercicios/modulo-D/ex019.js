function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let input = document.querySelector('#txtano')
    let res = document.querySelector('#res')

    if (input.value.length == 0 || input.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sex = document.getElementsByName('radsex')
        let idade = ano - input.value
        let genero
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './image019/menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './image019/jovemH.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './image019/homem.png')
            } else {
                // Idoso
                img.setAttribute('src', './image019/idoso.png')
            }
        }
        
        else if (sex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './image019/menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './image019/jovemM.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './image019/mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './image019/idosa.png')
            } 
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}