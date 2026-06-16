let temaLocal = localStorage.getItem('tema') || 'Escuro';

if (temaLocal === 'Claro') {
    mudarTema()
}

function mudarTema() {
    document.body.classList.toggle('lightTheme');
    const corTema = document.body.classList.contains('lightTheme') ? 'Claro' : 'Escuro';
    localStorage.setItem('tema', corTema);
    document.getElementById('tema').innerHTML = corTema === 'Claro' ? 'Escuro' : 'Claro';
}

let tamanhoFonte = parseInt(localStorage.getItem('--tamanho-fonte') || 16);
alterarFonte(tamanhoFonte);

function alterarFonte(tamanho) {
    document.documentElement.style.setProperty('--tamanho-fonte', tamanho + 'px');
    localStorage.setItem('--tamanho-fonte', tamanho);
}

function diminuirFonte() {    
    if (tamanhoFonte > 1) {
        tamanhoFonte -= 1;
        alterarFonte(tamanhoFonte)
    }
}

function restaurarFonte() {
    tamanhoFonte = 16;
    alterarFonte(tamanhoFonte)
}

function aumentarFonte() {   
    tamanhoFonte += 1;
    alterarFonte(tamanhoFonte)
}