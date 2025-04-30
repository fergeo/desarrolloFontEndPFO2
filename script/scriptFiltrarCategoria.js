const buscador = document.getElementById("buscador");
const contenedor = document.getElementById("peliculasFatvoritas");

const buscarPeliculas = async () => {
    try {
        const peliculas = await getData(); 
        const texto = buscador.value.trim().toLowerCase();
        if(texto.length > 0){
            const filtradas = peliculas.filter(p =>
                p.title.toLowerCase().includes(texto)
            );
    
            //console.log(filtradas);
    
            indice = 0;
            contenedor.innerHTML = "";
            containerWrite(filtradas);
        }

    } catch (error) {
        console.error("Error al filtrar películas:", error);
    }
};

buscador.addEventListener("input", buscarPeliculas);