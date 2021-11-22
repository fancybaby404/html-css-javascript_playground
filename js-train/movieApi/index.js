
const apikey = 'cf0c830b'

$('.search-button').on('click', () => {
    $('.movie-list').empty()

    let query = $('.search-input').val()
    axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}`)
        .then(response => {
            response['data'].Search.forEach((movie) => {
                let title = movie.Title
                for (let i = 0; i < $('.movie-item').length; i++) {
                    let findTitle = title.split(' ')
                    if ($('.movie-item')[i].classList.contains(findTitle)) return
                }
                let year = movie.Year
                let type = movie.Type
                let poster = movie.Poster

                let classTitle = title.split(' ')
                let htmlTemplate = `<div class="${classTitle} movie-item row row-cols-4 row-cols-sm-2 row-cols-md-2 g-4"> <div class="col"> <div class="card" style="min-width:250px;"> <img src="${poster}" class="card-img-top"> <div class="card-body"> <h5 class="card-title">${title}</h5> <p class="card-text">Year: ${year} Type: ${type}</p> </div> </div> </div> </div>`
                $('.movie-list').append(htmlTemplate)
            })
        })

        .catch((error) => {
            console.log(`Error: ${error}`)
        })
})
