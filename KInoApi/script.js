const btnResult = document.querySelector('#saveTask')
const apiPopular = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const apiSearch = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
const TOKEN = '8324c806-e7a9-4714-98d2-1eaee419db80';

    getData()

function getData() {
    let searchInput = document.querySelector('#searchInput')
    fetch(apiPopular, {
            method: 'GET', 
            headers: {
                "X-API-KEY": "8324c806-e7a9-4714-98d2-1eaee419db80",
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(film => showData(film))
        
        
        .catch(err => console.log(err))
}

function showData(film) {
    const filmsEl = document.querySelector(".main__card");
    const moviesEl = document.querySelector("#card")
    

    film.films.forEach(data => {
        const filmEl = document.createElement("div");
        filmEl.classList.add("card");
        filmEl.innerHTML = `
                <div id="cardP" class="cardP">
                    <img src="${data.posterUrlPreview}">
                    <div id="cardName" class="cardName">"${data.nameRu}"</div>
                    <div id="cardCategory" class="cardCategory">${data.genres.map(genre=>`${genre.genre}`)}</div>
                </div>
        `;
        filmsEl.appendChild(filmEl)

    })

}
saveTask.addEventListener('click', () => {
    findData()
})

function findData() {
    let searchInput = document.querySelector('#searchInput')
    let url = `${apiSearch}${searchInput.value}`
    
    fetch(url, {
            method: 'GET', 
            headers: {
                "X-API-KEY": "8324c806-e7a9-4714-98d2-1eaee419db80",
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(film => showData(film))
        
        
        .catch(err => console.log(err))
}
