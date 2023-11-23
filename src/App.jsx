import {useEffect, useState} from "react"
import {getMovieList, searchMovie} from './utils/api'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Content from "./components/Content"

const App = () => {
  document.body.classList.add('bg-slate-900');
  
  const imgUrl = import.meta.env.VITE_IMGURL
  const [sliderImages, setSliderImages] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
      setSliderImages(result)
    })
  }, [])

  const posterPaths = sliderImages.map((movie) => [
    movie.title,
    movie.overview,
    movie.release_date,
    movie.vote_average,
    movie.poster_path,
  ]);

  const posterSlider = posterPaths.slice(0,5)

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlides = () => {
    const ifFirstSlide = currentIndex === 0
    const newIndex = ifFirstSlide ? posterSlider.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  };

  const nextSlides = () => {
    const ifLastSlide = currentIndex === (posterSlider.length - 1)
    const newIndex = ifLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  };

  const gotoSlides = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const [autoSlide, setAutoSlide] = useState(true)
  const autoSlideInterval = 10000

  // function untuk autoslide
  const autoSlideNext = () => {
    if(autoSlide) {
      nextSlides()
    }
  }

  useEffect(() => {
    const autoSlideTimer = setInterval(autoSlideNext, autoSlideInterval)
    return () => {
      clearInterval(autoSlideTimer)
    }
  }, [currentIndex, autoSlide])

  // function untuk mencari film
  const search = async(q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }

    if (q.length == 0) {
      getMovieList().then((result) => {
        setPopularMovies(result)
      })
    }
  }

  return (
    <>
    <Navbar search={search}/>
    <Content imgUrl={imgUrl} currentIndex={currentIndex} posterSlider={posterSlider} prevSlides={prevSlides} nextSlides={nextSlides} gotoSlides={gotoSlides} popularMovies={popularMovies}/>
    <Footer/>
    </>
  )
}

export default App