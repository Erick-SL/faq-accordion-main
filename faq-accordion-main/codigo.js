document.addEventListener('DOMContentLoaded', function() {
    let infos = document.querySelectorAll('.front .info');

    infos.forEach(function(info) {
        let h2 = info.querySelector('h2');
        let img = info.querySelector('.icone');
        let p = info.nextElementSibling; 

        h2.addEventListener('click', function() {
            fecharTodosParagrafos();
            p.classList.toggle('aberto');
            toggleIcone(img, p.classList.contains('aberto'));
        });

        img.addEventListener('click', function() {
            fecharTodosParagrafos();
            p.classList.toggle('aberto');
            toggleIcone(img, p.classList.contains('aberto')); 
        });
    });

    function fecharTodosParagrafos() {
        let todosParagrafos = document.querySelectorAll('.front p');
        todosParagrafos.forEach(function(paragrafo) {
            paragrafo.classList.remove('aberto');
            let img = paragrafo.previousElementSibling.querySelector('.icone');
            toggleIcone(img, false);
        });
    }

    function toggleIcone(img, aberto) {
        if (aberto) {
            img.setAttribute('src', 'assets/images/icon-minus.svg');
        } else {
            img.setAttribute('src', 'assets/images/icon-plus.svg');
        }
    }
});
