const PopularMoviesList = ({imgUrl, popularMovies}) => {
  return popularMovies.map((movie, i) => {
    return(
      <div className="Movie-wrapper" key={i}>
        <div className="w-[250px] h-[300px] rounded-lg overflow-hidden shadow-lg">
          <div style={{ backgroundImage: `url(${imgUrl}/${movie.poster_path})` }}
          className='w-full h-full bg-center bg-cover'>
            <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50 relative">
              <div className="flex flex-col justify-end h-full text-white px-2 py-4">
                <div className="Movie-title text-xl font-bold">{movie.title}</div>
                <div className="Movie-date">{movie.release_date}</div>
                <div className="Movie-rate"><i className="fa-solid fa-star text-yellow-500 mr-1"></i>{movie.vote_average}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
}

export default PopularMoviesList