const themeToggle = document.getElementById('cambiarModo');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('modo-oscuro');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('modo-oscuro');
        localStorage.setItem('theme', 'light');
    }
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('modo-oscuro');
    themeToggle.checked = true;
}





const adquiridas = ["HTML", "CSS", "JavaScript", "PL/SQL"];
const deseadas = ["React", "Vue", "Tailwind", "AWS Cloud"];
const habilidades = document.getElementById("habilidades");


const tablaHabilidades = () => {
    const totalFilas = adquiridas.length;

    for (let i = 0; i < totalFilas; i++) {
        const fila = document.createElement('tr');

        let celda = document.createElement('td');
        celda.textContent = adquiridas[i];
        fila.appendChild(celda);

        celda = document.createElement('td');
        celda.textContent = deseadas[i];
        fila.appendChild(celda);

        habilidades.appendChild(fila);
    }
}
