
const oldHability = ["HTML", "CSS", "JavaScript", "PL/SQL"];
const newHability = ["React", "Vue", "Tailwind", "AWS Cloud"];
const habilities = document.getElementById("tablaHabilidades");

const loadHabilities = () => {

    fila = document.createElement("tr"); 
    fila.id = "mainHeader";

    const celdaHeader = document.createElement("td"); 
    celdaHeader.colSpan = 2; 
    celdaHeader.textContent = "Tecnologias";
    fila.appendChild(celdaHeader); 
    habilities.appendChild(fila);


    fila = document.createElement("tr"); 
    fila.id = "secondHeader";

    const celda0 = document.createElement("td"); 
    celda0.textContent = "Adqueridas"; 
    fila.appendChild(celda0); 

    const celda1 = document.createElement("td"); 
    celda1.textContent = "Deseadas"; 
    fila.appendChild(celda1); 
                            
    habilities.appendChild(fila); 


    for (let i = 0; i < 4; i++) {
        fila = document.createElement("tr"); 
        
        const celda0 = document.createElement("td"); 
        celda0.textContent = oldHability[i]; 
        fila.appendChild(celda0); 

        const celda1 = document.createElement("td"); 
        celda1.textContent = newHability[i]; 
        fila.appendChild(celda1); 

        habilities.appendChild(fila); 
    }

}

document.addEventListener("DOMContentLoaded",async ()=>{
    loadHabilities();
});
