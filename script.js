const API_KEY = '58381454d94a5e19366090f7c58b43d4'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const searchButton = document.querySelector('#search');
const movieInput = document.querySelector('#search-input');
const movieResults = document.querySelector('.movie-list')

searchButton.addEventListener('click', async () => {
    if (movieResults.innerText != ''){
        movieResults.innerText = ''
    }
    let movie = movieInput.value;
    let response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`);
    let movieResult = response.data.results
    renderList(movieResult)
    console.log(movieResult)
  });


const renderList = (movieResult) => {
    for (i = 0; i < movieResult.length; i++){
        let resultGoesHere = document.createElement('p')
        let resultImage = document.createElement('div')
        movieResults.appendChild(resultImage)
        movieResults.appendChild(resultGoesHere)
        resultGoesHere.innerText = `"${movieResult[i].title}":\n  ${movieResult[i].overview}`
        resultImage.innerHTML = `<img src='https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieResult[i].poster_path}'>`
    }
}


// aladdin image url: https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg



// let movieTitle = response.data.results.original_title
// let movieRelease = response.data.results.release_date
// let movieSummary = response.data.results.overview