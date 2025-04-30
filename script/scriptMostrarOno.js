// Para ocultar o no la sección de Sobre Mi.

const hideSobreMi = document.getElementById("hideSobreMi");
const unhideSobreMi = document.getElementById("unhideSobreMi");
const contenidoSobreMi = document.getElementById("contenidoSobreMi");

unhideSobreMi.style.display = 'none';

hideSobreMi.addEventListener('click', () => {
    if (contenidoSobreMi.style.display === 'none') {
        contenidoSobreMi.style.display = 'block';
    } else {
        contenidoSobreMi.style.display = 'none';
        hideSobreMi.style.display = 'none';
        unhideSobreMi.style.display = 'block';
    }
});

unhideSobreMi.addEventListener('click', () => {
    if (contenidoSobreMi.style.display === 'none') {
        //contenidoSobreMi.style.display = 'block';
        contenidoSobreMi.style.display = "flex";
        contenidoSobreMi.style.flexDirection = "row";
        contenidoSobreMi.id = 'contenidoSobreMi';
        hideSobreMi.style.display = 'block';
        unhideSobreMi.style.display = 'none';
    } else {
        contenidoSobreMi.style.display = 'none';
    }
});



// Para ocultar o no la sección de Proyectos.
const hideProyectos = document.getElementById("hideProyectos");
const unhideProyectos = document.getElementById("unhideProyectos");
const contenidoProyectos = document.getElementById("contenidoProyectos");

unhideProyectos.style.display = 'none';

hideProyectos.addEventListener('click', () => {
    if (contenidoProyectos.style.display === 'none') {
        contenidoProyectos.style.display = 'block';
    } else {
        contenidoProyectos.style.display = 'none';
        hideProyectos.style.display = 'none';
        unhideProyectos.style.display = 'block';
    }
});

unhideProyectos.addEventListener('click', () => {
    if (contenidoProyectos.style.display === 'none') {
        contenidoProyectos.style.display = 'block';
        hideProyectos.style.display = 'block';
        unhideProyectos.style.display = 'none';
    } else {
        contenidoProyectos.style.display = 'none';
    }
});



// Para ocultar o no la sección de Habilidades.

const hideHabilidades = document.getElementById("hideHabilidades");
const unhideHabilidades = document.getElementById("unhideHabilidades");
const tabla = document.getElementById("tablaHabilidades");

unhideHabilidades.style.display = 'none';

hideHabilidades.addEventListener('click', () => {
    if (tabla.style.display === 'none') {
        tabla.style.display = 'block';
    } else {
        tabla.style.display = 'none';
        hideHabilidades.style.display = 'none';
        unhideHabilidades.style.display = 'block';
    }
});

unhideHabilidades.addEventListener('click', () => {
    if (tabla.style.display === 'none') {
        tabla.style.display = 'block';
        hideHabilidades.style.display = 'block';
        unhideHabilidades.style.display = 'none';
    } else {
        tabla.style.display = 'none';
    }
});


// Para ocultar o no la sección de Contacto.

const hideContacto = document.getElementById("hideContacto");
const unhideContacto = document.getElementById("unhideContacto");
const formContacto = document.getElementById("formContacto");

unhideContacto.style.display = 'none';

hideContacto.addEventListener('click', () => {
    if (formContacto.style.display === 'none') {
        formContacto.style.display = 'block';
    } else {
        formContacto.style.display = 'none';
        hideContacto.style.display = 'none';
        unhideContacto.style.display = 'block';
    }
});

unhideContacto.addEventListener('click', () => {
    if (formContacto.style.display === 'none') {
        formContacto.style.display = 'block';
        hideContacto.style.display = 'block';
        unhideContacto.style.display = 'none';
    } else {
        formContacto.style.display = 'none';
    }
});


// Para ocultar o no la sección de Peliculas Favoritas
const hidePeliculas = document.getElementById("hidePeliculas");
const unhidePeliculas = document.getElementById("unhidePeliculas");
const peliculasFatvoritas = document.getElementById("peliculasFatvoritas");
const btnPeliculas = document.getElementById("btnPeliculas");
const buscar = document.getElementById("buscar");

unhidePeliculas.style.display = 'none';

hidePeliculas.addEventListener('click', () => {
    if (peliculasFatvoritas.style.display === 'none') {
        peliculasFatvoritas.style.display = 'block';
    } else {
        peliculasFatvoritas.style.display = 'none';
        btnPeliculas.style.display = 'none';
        buscar.style.display = 'none';
        hidePeliculas.style.display = 'none';
        unhidePeliculas.style.display = 'block';
    }
});

unhidePeliculas.addEventListener('click', () => {
    if (peliculasFatvoritas.style.display === 'none') {
        btnPeliculas.style.display = 'block';
        buscar.style.display = 'block';
        //peliculasFatvoritas.style.display = 'block';
        peliculasFatvoritas.style.display = "flex";
        peliculasFatvoritas.style.flexDirection = "row";
        hidePeliculas.style.display = 'block';
        unhidePeliculas.style.display = 'none';
    } else {
        peliculasFatvoritas.style.display = 'none';
    }
});