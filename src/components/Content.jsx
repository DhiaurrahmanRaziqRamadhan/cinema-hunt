import ImageSlider from "./ImageSlider";
import PopularMoviesList from "./PopularMovieList";
import SearchInput from "./SearchInput";

const Content = ({
  imgUrl,
  currentIndex,
  posterSlider,
  prevSlides,
  nextSlides,
  gotoSlides,
  popularMovies,
  search,
  searchQuery
}) => {

  return (
    <div className="mt-[72px]">
      <div className="w-max-screen">
        <ImageSlider
          imgUrl={imgUrl}
          currentIndex={currentIndex}
          posterSlider={posterSlider}
          prevSlides={prevSlides}
          nextSlides={nextSlides}
          gotoSlides={gotoSlides}
        />
      </div>
      <div className="flex items-center justify-center py-8">
        <SearchInput search={search}/>
      </div>
      <div className="Movie-container mx-auto flex flex-wrap justify-evenly gap-y-5 ">
        <PopularMoviesList imgUrl={imgUrl} popularMovies={popularMovies} searchQuery={searchQuery}/>
      </div>
    </div>
  );
};

export default Content;
