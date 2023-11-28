document.addEventListener('DOMContentLoaded', function() {
    var conteudoAdicional = document.querySelectorAll('.page');
    var verMaisMenosBtn = document.getElementById('ver-mais-menos-btn');

    // Inicialmente, esconde os conteúdos adicionais
    for (var i = 2; i < conteudoAdicional.length; i++) {
        conteudoAdicional[i].style.display = 'none';
    }

    // Adiciona evento para o botão "Veja Mais / Menos"
    verMaisMenosBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Alterna a visibilidade dos próximos 2 conteúdos
        for (var i = 2; i < conteudoAdicional.length; i++) {
            if (conteudoAdicional[i].style.display === 'none') {
                conteudoAdicional[i].style.display = 'block';
            } else {
                conteudoAdicional[i].style.display = 'none';
            }
        }

        // Alterna o texto do botão entre "Veja Mais" e "Veja Menos"
        verMaisMenosBtn.textContent = (verMaisMenosBtn.textContent === 'Ver Todos') ? 'Veja Menos' : 'Ver Todos';
    });
});