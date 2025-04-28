 // Leer visitas desde localStorage
let visitas = localStorage.getItem('visitas');

 // Si no existe, empieza en 0
if (!visitas) {
    visitas = 1;
} else {
    visitas = parseInt(visitas) + 1;
}

// Guardar visitas de nuevo
localStorage.setItem('visitas', visitas);

// Mostrar en la página
document.getElementById('visitante').innerText = visitas;