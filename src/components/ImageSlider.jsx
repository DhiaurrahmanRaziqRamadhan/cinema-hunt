import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const ImageSlider = ({ currentIndex, posterSlider, prevSlides, nextSlides, gotoSlides}) => {
  const imgUrl = import.meta.env.VITE_IMGURL
  // console.log(`link: ${imgUrl}/${poster[currentIndex]}`)

  if(posterSlider.length > 0){
    return (
      <>
        <div style={{ backgroundImage: `url(${imgUrl}/${posterSlider[currentIndex][4]})` }} className='w-full h-full bg-center bg-cover duration-500'>
          <div className="w-full h-full bg-gradient-to-b from-transparent to-black/50 relative text-white px-16 pb-80 xl:px-44 xl:py-64">
            <div className="h-full w-full flex flex-col justify-end">
              <div className="text-2xl xl:text-4xl font-bold">{posterSlider[currentIndex][0]}</div>
              <div className="overflow-hidden line-clamp-6 xl:text-xl w-full">{posterSlider[currentIndex][1]}</div>
              <div className="xl:text-lg">{posterSlider[currentIndex][2]}</div>
              <div className="xl:text-lg"><i className="fa-solid fa-star text-yellow-500 mr-1"></i>{posterSlider[currentIndex][3]}</div>
            </div>
          </div>
        </div>

        <div className="absolute top-[50%] xl:-translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlides} size={30}/>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlides} size={30}/>
        </div>

        <div className="absolute bottom-0 left-[50%] -translate-x-[50%]">
          <div className="flex justify-center items-center">
            {posterSlider.map((slide, slideIndex) => (
              <div 
                key={slideIndex}
                onClick={()=>{gotoSlides(slideIndex)}}
                className={`cursor-pointer ${slideIndex === currentIndex ? 'text-white text-4xl ' : 'text-white text-2xl opacity-80'}`}>
                <RxDotFilled/>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default ImageSlider