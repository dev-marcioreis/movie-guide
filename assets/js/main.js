// Initial references
let movieNameRef = document.querySelector('.movieName')
let searchBtn = document.querySelector('.searchBtn')
let result = document.querySelector('.result')

// Function to fetch data from API
let getMovie = () => {
    let movieName = movieNameRef.value
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}&language=pt-BR`

    // If input field is empty
    if(movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Digite o nome do filme</h3>`
    } else {
        fetch(url).then(resp => resp.json()).then(data => {

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
        })
    }
}

window.addEventListener('load', getMovie)