import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";

const ImageSlider = ({
  currentIndex,
  posterSlider,
  prevSlides,
  nextSlides,
  gotoSlides,
}) => {
  const imgUrl = import.meta.env.VITE_IMGURL;

  if (posterSlider.length > 0) {
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${imgUrl}/${posterSlider[currentIndex][4]})`,
          }}
          className="h-[500px] bg-cover bg-center text-white duration-500 xl:h-screen"
        >
          <div className="flex h-full flex-col justify-around gap-3 bg-gradient-to-b from-transparent to-black/50 pt-8">
            <div className="flex pt-24 justify-between gap-4 h-96 px-4">
              <div className="hidden h-fit cursor-pointer rounded-full bg-black/50 p-2 text-2xl xl:block self-center">
                <BsChevronLeft onClick={prevSlides} size={30} />
              </div>
              <div className="flex flex-col w-[1000px] gap-0">
                <div className="text-2xl font-bold xl:text-4xl h-10">
                  {posterSlider[currentIndex][0]}
                </div>
                <div className="line-clamp-6 w-full overflow-hidden xl:text-xl">
                  {posterSlider[currentIndex][1]}
                </div>
                <div className="xl:text-lg">
                  {posterSlider[currentIndex][2]}
                </div>
                <div className="flex items-center gap-2 xl:text-lg">
                  <FaStar size={26} className="text-yellow-500" />
                  {posterSlider[currentIndex][3]}
                </div>
              </div>
              <div className="hidden h-fit cursor-pointer rounded-full bg-black/50 p-2 text-2xl xl:block self-center">
                <BsChevronRight onClick={nextSlides} size={30} />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 xl:hidden">
              <div className="cursor-pointer rounded-full bg-black/50 p-2 text-2xl">
                <BsChevronLeft onClick={prevSlides} size={30} />
              </div>
              <div className="cursor-pointer rounded-full bg-black/50 p-2 text-2xl">
                <BsChevronRight onClick={nextSlides} size={30} />
              </div>
            </div>
            <div className="flex items-center justify-center">
              {posterSlider?.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => {
                    gotoSlides(slideIndex);
                  }}
                  className={`cursor-pointer ${
                    slideIndex === currentIndex
                      ? "text-4xl text-white "
                      : "text-2xl text-white opacity-80"
                  }`}
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div className="h-[500px] w-screen bg-gray-700"></div>;
  }
};

export default ImageSlider;
