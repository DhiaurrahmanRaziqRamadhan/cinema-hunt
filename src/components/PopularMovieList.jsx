import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PopularMoviesList = ({ imgUrl, popularMovies, searchQuery }) => {
  const skeletonCards = new Array(20).fill(null);
  return (
    <>
      {popularMovies.length === 0 ? (
        <>
          {skeletonCards.map((_, index) => (
            <div
              key={index}
              className="h-[300px] w-[250px] animate-pulse rounded-lg bg-gray-700"
            ></div>
          ))}
        </>
      ) : (
        <>
          {popularMovies.map((movie, i) => (
            <Link
              to={{
                pathname: `/cinema-hunt/movie-detail/${movie.id}`,
                search: `?q=${searchQuery}`, // Tambahkan query parameter q di sini
              }}
              className="Movie-wrapper relative overflow-hidden rounded-lg"
              key={i}
            >
              <div
                style={{
                  backgroundImage: `url(${imgUrl}/${movie.poster_path})`,
                }}
                className="h-[300px] w-[250px] bg-cover bg-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 duration-300 md:opacity-0 xl:opacity-0 xl:hover:opacity-100">
                  <div className="flex h-full flex-col justify-end px-2 py-4 text-white">
                    <div className="Movie-title text-xl font-bold">
                      {movie.title}
                    </div>
                    <div className="Movie-date">{movie.release_date}</div>
                    <div className="Movie-rate flex items-center">
                      <FaStar size={20} className="text-yellow-500" />
                      {movie.vote_average}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default PopularMoviesList;
