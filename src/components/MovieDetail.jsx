import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { getMovieList, searchMovie } from "../utils/api";

const MovieDetail = ({ imgUrl }) => {
  const { id } = useParams();
  const location = useLocation();
  const myQuery = new URLSearchParams(location.search);
  const getQuery = myQuery.get("q");

  const [foundMovie, setFoundMovie] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let queryResult;
        if (getQuery && getQuery.length > 3) {
          queryResult = await searchMovie(getQuery);
          setFoundMovie(queryResult.results);
        }
        if (getQuery.length == 0) {
          getMovieList().then((result) => {
            setFoundMovie(result);
          });
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchData();
  }, [getQuery]);

  useEffect(() => {
    if (foundMovie.length > 0 && id) {
      const movie = foundMovie.find((movie) => movie.id.toString() === id);
      setMovieDetail(movie);
    }
  }, [foundMovie, id]);

  return (
    <div className="mt-[72px] text-slate-100">
      {!movieDetail ? (
        <div>
          <div className="py-4">
            <div className="mx-auto flex w-full flex-col items-center gap-10 px-4 md:flex-row xl:flex-row xl:px-32">
              <div className="flex flex-col gap-6">
                <Link
                  to="/cinema-hunt/"
                  className="flex flex-row items-center gap-4"
                >
                  <IoArrowBack size={40} />
                  <p className="text-xl font-semibold">Kembali</p>
                </Link>
                <div className="h-[500px] w-[333.33px] rounded-lg bg-gray-700"></div>
              </div>
              <div className="flex-1">
                <div className="grid w-96 gap-6 px-4 xl:w-auto">
                  <div className="space-y-3">
                    <div className="h-4 rounded-full bg-gray-700 xl:w-full"></div>
                    <div className="h-4 rounded-full bg-gray-700 xl:w-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 rounded-full bg-gray-700 xl:w-full"></div>
                    <div className="h-4 rounded-full bg-gray-700 xl:w-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="h-4 w-4 rounded-full bg-gray-700 p-4"></div>
                      <div className="h-4 w-full rounded-full bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-4">
          <div className="mx-auto flex w-full flex-col items-center gap-10 px-4 md:flex-row xl:flex-row xl:px-32">
            <div className="flex flex-col gap-6">
              <Link
                to="/cinema-hunt/"
                className="flex flex-row items-center gap-4"
              >
                <IoArrowBack size={40} />
                <p className="text-xl font-semibold">Kembali</p>
              </Link>
              <div className="flex rounded-lg">
                <img
                  src={`${imgUrl}/${movieDetail.poster_path}`}
                  alt={movieDetail.title}
                  className="h-[500px] rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="grid gap-6">
                <div>
                  <div className="text-4xl font-bold">
                    {movieDetail.original_title}
                  </div>
                  <div className="text-xl">{movieDetail.overview}</div>
                </div>
                <div>
                  <div className="text-xl">
                    Popularity {movieDetail.popularity}
                  </div>
                  <div className="text-xl">
                    Release Date {movieDetail.release_date}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div>
                      <FaStar size={32} className="text-yellow-500" />
                    </div>
                    <div className="text-xl">{movieDetail.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
