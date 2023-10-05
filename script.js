$(document).ready(function() {
    // Ocultar todas las opciones al cargar la página, excepto la opción 1
    $('.opcion').hide();
    $('#opcion1').show();

    // Mostrar la opción correspondiente al hacer clic en el enlace de la lista
    $('a[data-option]').click(function() {
        var opcion = $(this).data('option');
        $('.opcion').hide();
        $('#' + opcion).show();
    });
});

var subtitulos = [
    "Lorem ipsum dolor sit amet",
    "Curabitur blandit massa eu nisl consequat",
    "Vivamus nec mi ut orci vehicula",
    "Quisque scelerisque lorem"
];

var index = 0;
var subtituloElement = document.getElementById("subtituloTexto");

// Función para cambiar el subtitulo cada 2 segundos
function cambiarSubtitulo() {
    subtituloElement.innerText = subtitulos[index];
    index = (index + 1) % subtitulos.length;
}

// Iniciar el carrusel
setInterval(cambiarSubtitulo, 2000);