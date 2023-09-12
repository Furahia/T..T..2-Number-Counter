document.addEventListener('DOMContentLoaded', function () {
    contador();
});

function contador() {
    let x = 0;
    const elementsWithDataValor = document.querySelectorAll('*[data-valor]');

    setInterval(intervalo, 100);

    function intervalo() {
        x++;

        for (const element of elementsWithDataValor) {
            const valor = parseInt(element.getAttribute('data-valor'), 10);

            if (x > valor) {
                continue;
            } else {
                element.textContent = x;
            }
        }
    }
}

