let botaoMenu = document.getElementById('botaoMenu');
let barraLateral = document.getElementById('barralateral');

// Função para alternar a barra lateral
function alternarBarra() {
    event.preventDefault();
    if (barraLateral.style.display === 'flex') {
        barraLateral.style.display = 'none';
        barraLateral.style.position = 'none';
    } else {
        barraLateral.style.display = 'flex';
        botaoMenu.style.rotate = '180deg';
    }
}

// Função para fechar a barra lateral
function fecharBarra() {
    barraLateral.style.display = 'none';
}
document.addEventListener('click', function(event) {
    if (!barraLateral.contains(event.target) && !botaoMenu.contains(event.target)) {
        fecharBarra();
    }
});
// Eventos
botaoMenu.addEventListener('click', alternarBarra);
barraLateral.addEventListener('mouseleave', fecharBarra);