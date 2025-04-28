//consumo de api movie db
const apiKey = '02a836944430b48cf79647737764b191';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

const url_img = "https://image.tmdb.org/t/p/w200";
const query = 'Inception';
let page = 1;
let indice = 0;


const next = document.querySelector(".siguiente");
const prev = document.querySelector(".anterior");
const container = document.getElementById("peliculasFatvoritas");

const getData = async ()=>{
    const response = await fetch(`${url}`);
    const dataJson = await response.json();
    const results = await dataJson.results;
    return results;
}  


const containerWrite = (results)=>{
    for (result of results){
        const movieCard = document.createElement("div");
        movieCard.innerHTML = `
                    <div class="pelicula">
                        <div class="card-face card-front">
                            <img class="imgFavoritas" src="${url_img}${result.poster_path}" alt=${result.title}>
                        </div>
                        <div class="card-face card-back">
                            <p>${result.title}</p>
                        </div>
                        <div class="card-ditail">
                            <p>${result.overview}</p>
                        </div>
                    </div>
        ` ;
        movieCard.classList.add("card-container")
        movieCard.classList.add("p-3")
        container.appendChild(movieCard);
    }
}

next.addEventListener("click",async()=>{
    const results = await getData();

    if (indice + 3 < results.length)  {
        indice += 3;
        container.innerHTML="";
        containerWrite(results.slice(indice, indice + 3));
        if(page == 1){
            prev.classList.toggle("hide");
        }
        page++;
        document.getElementById("pagina").innerHTML = "Pagina " + page;
    }
        
});

prev.addEventListener("click",async()=>{
    const results = await getData();

    if (indice - 3 >= 0)  {
        indice -= 3;
        container.innerHTML="";
        containerWrite(results.slice(indice, indice + 3));
        page--;
        if(page == 1){
            prev.classList.toggle("hide");
        }
        document.getElementById("pagina").innerHTML = "Pagina " + page;
    }
        
});


document.addEventListener("DOMContentLoaded",async ()=>{
    const results = await getData();
    containerWrite(results.slice(0,3));
});