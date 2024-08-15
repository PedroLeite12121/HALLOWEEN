// Pega os IDs do HTML e passa como variável pro JS
var sectionExt = document.getElementById('sectionExt')
var sectionInt = document.getElementById('sectionInt')
var text = document.getElementById('text')
var retornar = document.getElementById('retornar')

function section(elemento) { // Função que ativa as sections internas
    let header, imagem, descricao; // Declara variáveis que auxiliam na alteração do contéudo

    switch(elemento) { // Switch case básico
        case 'fantasia':
            header = 'Hábitos e Costumes - Fantasias'; // Muda o header
            imagem = './habitosIMG/fantasias.png'; // Muda a fonte da imagem
            descricao = 'Fantasias'; // Muda a descrição da aba interna
            break;
        case 'historia':
            header = 'Hábitos e Costumes - Histórias de Terror';
            imagem = './habitosIMG/fantasma.png';
            descricao = 'Histórias de terror';
            break;
        case 'abobora':
            header = 'Hábitos e Costumes - Abóbora Lanterna';
            imagem = './habitosIMG/jackolantern.png';
            descricao = 'Abóboras lanterna';
            break;
        case 'doce':
            header = 'Hábitos e Costumes - Doces ou Travessuras';
            imagem = './habitosIMG/doces.png';
            descricao = 'Doces ou travessuras';
            break;
        case 'cores':
            header = 'Hábitos e Costumes - Cores Preto e Laranja';
            imagem = './habitosIMG/cores.png';
            descricao = 'Cores preto e laranja';
    }

    sectionExt.style.display = 'none'; // Oculta a section principal
    sectionInt.style.display = 'flex'; // Revela a section interna
    text.innerText = header; // Muda o header
    sectionInt.innerHTML = `<img src="${imagem}"><p>${descricao}</p>`; // Muda a imagem e descrição da aba interna
    retornar.innerHTML = '<a href="javascript:voltar()" id="retornar">Voltar</a>'; // Muda o comportamento do botão voltar, ao invez de te enviar para a página principal, oculta a section interna e revela a section principal
}

function voltar() {
    sectionExt.style.display = 'flex'
    sectionInt.style.display = 'none'
    retornar.innerHTML = '<a href="../../index.html" id="retornar">Voltar</a>'
    text.innerText = 'Halloween - Hábitos e Costumes' 
}