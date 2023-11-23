import ImageSlider from "./ImageSlider"
import PopularMoviesList from "./PopularMovieList"

const Content = ({imgUrl, currentIndex, posterSlider, prevSlides, nextSlides, gotoSlides, popularMovies}) => {
  return (
    <>
    <div className="h-[780px] w-full m-auto">
      <ImageSlider imgUrl={imgUrl} currentIndex={currentIndex} posterSlider={posterSlider} prevSlides={prevSlides} nextSlides={nextSlides} gotoSlides={gotoSlides}/>
    </div>
    <div className="Movie-container mx-auto flex flex-wrap justify-evenly gap-y-5 py-5">
      <PopularMoviesList imgUrl={imgUrl} popularMovies={popularMovies}/>
    </div>
    </>
  )
}

export default Content