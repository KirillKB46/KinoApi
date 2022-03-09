const btnResult = document.querySelector('#saveTask')
const apiPopular = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const apiSearch = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
const TOKEN = '8324c806-e7a9-4714-98d2-1eaee419db80';

btnResult.addEventListener('click', () => {
    getData()
})

function getData() {
    let searchInput = document.querySelector('#searchInput')
    let url = `${apiSearch}${searchInput.value}`

    const searchFilm = fetch(url, {
            method: 'GET',
            headers: {
                "X-API-KEY": "8324c806-e7a9-4714-98d2-1eaee419db80",
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    const finalFilm = searchFilm.value;
    showData(finalFilm)
}

function showData(data) {
    const filmsEl = document.querySelector(".main__card");

    data.films.forEach(card => {
        const filmEl = document.createElement("div");
        filmEl.classList.add("card");
        filmEl.innerHTML = `
                <div id="cardP" class="cardP">
                <img scr="${card.posterUrlPreview}"</div>
                    <div id="cardName" class="cardName">"${card.nameRu}"</div>
                    <div id="cardCategory" class="cardCategory">"${card.gener}"</div>
                    <div id="cardR" clss="cardR">
            </div>
        </div>`;
        filmsEl.appendChild(movieEL);

    })

}

// function PopularMovie() {
//     let url = https: kinopoiskapiunofficial.tech / api / v2 .2 / films / top ? type = TOP_100_POPULAR_FILMS & page = 1 = $ { TOKEN }
//     `
//     `
//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))