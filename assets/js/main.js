// Initial references
const movieNameRef = document.querySelector('.movieName')
const searchBtn = document.querySelector('.searchBtn')
const result = document.querySelector('.result')

// Function to fetch data from API
let getMovie = () => {
    let movieName = movieNameRef.value
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}&language=pt-BR`

    // If input field is empty
    if(movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Digite o nome do filme</h3>`
    } else {
        fetch(url).then(resp => resp.json()).then(data => {

            if(data.Response = 'Try') {

                result.innerHTML = `
                <div class="info">
                    <img src=${data.Poster} class="poster" />
                    <div>
                        <h3 class="title">${data.Title}</h3>
                        <div class="rating">
                            <i class="uil uil-star"></i>
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(',').join('</div><div>')}</div>
                        </div>
                    </div>
                </div>
                <h5>Trama:</h5>
                <p>${data.Plot}</p>
                <h5>Elenco:</h5>
                <p>${data.Actors}</p>
            `

            } else {
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
            }
        }).catch(() => {
            result.innerHTML = `<h3 class="msg">Aconteceu um erro!</h3>`
        })
    }
}

searchBtn.addEventListener('click', getMovie)
window.addEventListener('load', getMovie)