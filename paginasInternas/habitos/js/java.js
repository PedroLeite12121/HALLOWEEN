var sectionExt = document.getElementById('sectionExt')
var sectionInt = document.getElementById('sectionInt')
var text = document.getElementById('text')
var retornar = document.getElementById('retornar')

function fsection(elemento) {
    if(elemento == 'fantasia') {
        sectionExt.style.display = 'none'
        sectionInt.style.display = 'flex'
        text.innerText = 'Hábitos e Costumes - Fantasias'
        sectionInt.innerHTML = '<section id="sectionInt" class="sectionInt">\n<img id="img" src="./habitosIMG/fantasias.png">\n<p>um texto muito aleatorio</p>\n</section>'
        retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">voltar</a>'
    } else if(elemento == 'historia') {
        sectionExt.style.display = 'none'
        sectionInt.style.display = 'flex'
        text.innerText = 'Hábitos e Costumes - Histórias de Terror'
        sectionInt.innerHTML = '<section id="sectionInt" class="sectionInt">\n<img id="img" src="./habitosIMG/fantasma.png">\n<p>um texto muito aleatorio</p>\n</section>'
        retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">voltar</a>'
    } else if(elemento == 'abobora') {
        sectionExt.style.display = 'none'
        sectionInt.style.display = 'flex'
        text.innerText = 'Hábitos e Costumes - Áboboras Lanterna'
        sectionInt.innerHTML = '<section id="sectionInt" class="sectionInt">\n<img id="img" src="./habitosIMG/jackolantern.png">\n<p>um texto muito aleatorio</p>\n</section>'
        retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">voltar</a>'
    } else if(elemento == 'doce') {
        sectionExt.style.display = 'none'
        sectionInt.style.display = 'flex'
        text.innerText = 'Hábitos e Costumes - Doces ou Travessuras'
        sectionInt.innerHTML = '<section id="sectionInt" class="sectionInt">\n<img id="img" src="./habitosIMG/doces.png">\n<p>um texto muito aleatorio</p>\n</section>'
        retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">voltar</a>'
    } else {
        sectionExt.style.display = 'none'
        sectionInt.style.display = 'flex'
        text.innerText = 'Hábitos e Costumes - Cores Preto e Laranja'
        sectionInt.innerHTML = '<section id="sectionInt" class="sectionInt">\n<img id="img" src="./habitosIMG/cores.png">\n<p>um texto muito aleatorio</p>\n</section>'
        retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">voltar</a>'
    }
}

function voltar() {
    sectionExt.style.display = 'flex'
    sectionInt.style.display = 'none'
    retornar.innerHTML = '<a href="../../index.html" id="retornar">retornar</a>'
}